const { PageInfo } = require('./src/graphql-fragments/PageInfo')

async function createLandingPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      ${PageInfo}
      allSanityRoute(filter: {slug: {current: {ne: null}}, page: {id: {ne: null}}}){
        edges {
          node {
            id
            slug {
              current
            }
            page {
              ...PageInfo
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const routeEdges = (result.data.allSanityRoute || {}).edges || []
  routeEdges.forEach((edge) => {
    const { id, slug = {}, page } = edge.node
    const path = [pathPrefix, slug.current, "/"].join("")
    reporter.info(`Creating landing page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/Page.js'),
      context: { id, page: page }
    })
  })
}










exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
  await createLandingPages('/', graphql, actions, reporter)
}