import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Figure from "./Figure"
import UniversalLink from "./UniversalLink"
const Portfolio = () => {
  const {
    allSanityPortfolio: { edges },
  } = useStaticQuery(graphql`
    {
      allSanityPortfolio {
        edges {
          node {
            id
            _rawFeaturedImage(resolveReferences: { maxDepth: 10 })
            _rawSlug(resolveReferences: { maxDepth: 10 })
            title
          }
        }
      }
    }
  `)

  return (
    <section className="portfolio-list wrapper">
      {edges &&
        edges.map(({ node }) => {
          console.log(node._rawProjectDescription)
          const excerpt = node._rawProjectDescription
            ? node._rawProjectDescription.slice(0, 3)
            : []

          const hasIllustration =
            !!node._rawFeaturedImage &&
            !node._rawFeaturedImage.disabled &&
            node._rawFeaturedImage.image
          return (
            <article className="portfolio-card" key={node.id}>
              {hasIllustration && (
                <Figure node={node._rawFeaturedImage.image} />
              )}
              {node.title && (
                <h2 className="portfolio-card__title">{node.title}</h2>
              )}

              <UniversalLink className="cta__button" to={node._rawSlug.current}>
                More Info
              </UniversalLink>
            </article>
          )
        })}
    </section>
  )
}

export default Portfolio
