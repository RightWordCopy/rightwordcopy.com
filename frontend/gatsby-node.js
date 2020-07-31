const { PageInfo } = require("./src/graphql-fragments/PageInfo")
const { NavMenu } = require("./src/graphql-fragments/NavMenu")
const { SanityImage } = require("./src/graphql-fragments/SanityImage")

async function createLandingPages(
  pathPrefix = "/",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    # Here we pull in the fragments pulled in above.
    ${PageInfo}
    ${NavMenu}
    ${SanityImage}
    query GET_ROUTES {
      allSanityRoute(
        filter: { slug: { current: { ne: null } }, page: { id: { ne: null } } }
      ) {
        edges {
          node {
            id
            openGraph {
              title
              description
            }
            useSiteTitle
            includeInSitemap
            slug {
              current
            }
            page {
              ...PageInfo
            }
          }
        }
      }
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        primaryColor {
          hex
        }
        secondaryColor {
          hex
        }
        title
        openGraph {
          title
          description
          image {
            ...SanityImage
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const routeEdges = (result.data.allSanityRoute || {}).edges || []
  routeEdges.forEach(edge => {
    const {
      id,
      slug = {},
      page,
      openGraph,
      useSiteTitle,
      includeInSitemap,
    } = edge.node
    const meta = {}
    meta.title = useSiteTitle
      ? result.data.site.openGraph.title
      : openGraph.title
    meta.description =
      openGraph.description || result.data.site.openGraph.description
    meta.image = openGraph.image || result.data.site.openGraph.image
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/Page.js"),
      context: { id, page: page, meta: meta },
    })
  })
}

exports.createPagesStatefully = async (
  { graphql, actions, reporter },
  options
) => {
  await createLandingPages("/", graphql, actions, reporter)
}
