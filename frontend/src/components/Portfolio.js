import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Figure from "./Figure"
import PortableText from "./PortableText"
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
            _rawProjectExcerpt(resolveReferences: { maxDepth: 10 })
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
          const hasIllustration =
            !!node._rawFeaturedImage &&
            !node._rawFeaturedImage.disabled &&
            node._rawFeaturedImage.image
          return (
            <article className="portfolio-card" key={node.id}>
              {hasIllustration && (
                <UniversalLink to={node._rawSlug.current}>
                  <Figure
                    className="portfolio-card__illustration"
                    node={node._rawFeaturedImage.image}
                  />
                </UniversalLink>
              )}
              <div className="portfolio-card__content">
                {node.title && (
                  <h2 className="portfolio-card__title">{node.title}</h2>
                )}
                {node._rawProjectExcerpt && (
                  <PortableText blocks={node._rawProjectExcerpt} />
                )}
              </div>
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
