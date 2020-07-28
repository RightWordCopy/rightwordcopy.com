import { graphql } from 'gatsby'
import React from 'react'
import PageTemplate from '../templates/Page'

const IndexPage = ({ data, errors }) => {
  if (errors) {
    console.error(errors)
  }

  const pageData = { ...data, meta: data.site.openGraph }
  return <PageTemplate pageContext={pageData} />
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexQuery {
    page: sanityPage(_id: {eq: "frontpage"}) {
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
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
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
            alt
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              metadata {
                lqip
                dimensions {
                  aspectRatio
                  width
                  height
                }
              }
            }
          }
        }
      }
  }
`