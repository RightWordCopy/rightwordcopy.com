import { graphql } from 'gatsby'

export const PageInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    title
    navMenu {
      ...NavMenu
    }
    _rawContent(resolveReferences: {maxDepth: 10})
  }
`