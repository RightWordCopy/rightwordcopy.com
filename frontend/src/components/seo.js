/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import { buildImageObj, imageUrlFor } from "../utils"

function SEO({ description, lang, meta, title, keywords, image, bodyAttr }) {
  const { site } = useStaticQuery(detailsQuery)
  const metaDescription =
    description || (site.openGraph && site.openGraph.description) || ""
  const siteTitle = (site && site.title) || ""
  const siteAuthor =
    (site && site.author && site.author.name) || "Virginia Grice"
  const metaImage =
    image && image.asset
      ? imageUrlFor(buildImageObj(image)).width(1200).url()
      : site.openGraph && site.openGraph.image
      ? imageUrlFor(buildImageObj(site.openGraph.image)).width(1200).url()
      : ""

  const pageTitle = title || siteTitle
  return (
    <Helmet
      bodyAttributes={bodyAttr}
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={pageTitle === siteTitle ? siteTitle : `%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
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
