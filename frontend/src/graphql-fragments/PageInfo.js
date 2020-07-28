
const PageInfo = `
  fragment PageInfo on SanityPage {
    id
    title
    navMenu {
      ...NavMenu
    }
    _rawContent(resolveReferences: {maxDepth: 10})
  }
`
module.exports.PageInfo = PageInfo