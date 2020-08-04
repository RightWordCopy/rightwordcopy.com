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
              image {
                ...SanityImage
              }
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
    meta.image = !useSiteTitle && openGraph.image
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/templates/Page.js"),
      context: { id, page: page, meta: meta },
    })
  })
}

async function createPortfolioPages(
  pathPrefix = "/",
  graphql,
  actions,
  reporter
) {
  const { createPage } = actions
  const result = await graphql(`
    query GET_PORTFOLIO_ITEMS {
      allSanityPortfolio {
        totalCount
        edges {
          next {
            slug {
              current
            }
          }
          previous {
            slug {
              current
            }
          }
          node {
            title
            id
            _rawImageGallery(resolveReferences: { maxDepth: 10 })
            _rawFeaturedImage(resolveReferences: { maxDepth: 10 })
            _rawProjectDescription(resolveReferences: { maxDepth: 10 })
            _rawProjectExcerpt(resolveReferences: { maxDepth: 10 })
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const portfolioEdges = (result.data.allSanityPortfolio || {}).edges || []
  portfolioEdges.forEach(edge => {
    const prev = edge.previous
    const next = edge.next
    const path = [pathPrefix, edge.node.slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/Portfolio.js"),
      context: {
        id: edge.node.id,
        project: edge.node,
        pagination: {
          prev,
          next,
        },
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  await createLandingPages("/", graphql, actions, reporter)
  await createPortfolioPages("", graphql, actions, reporter)
}
