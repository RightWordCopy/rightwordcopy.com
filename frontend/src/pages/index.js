import { graphql } from 'gatsby'
import React from 'react'

const IndexPage = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      Home Page
    </div>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexQuery {
    sanityPage(_id: {eq: "frontpage"}) {
      id
      title
      navMenu {
        items {
          route
          link
          kind
          title
        }
      }
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`