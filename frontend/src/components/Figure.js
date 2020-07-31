import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import React from "react"
import clientConfig from "../../client.config"
export default ({ node }) => {
  if (!node.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 1050 },
    clientConfig.sanity
  )

  return (
    <figure className="figure">
      <Img fluid={fluidProps} alt={node.alt} />
      {node.caption && (
        <figcaption
          style={{ textAlign: `center`, color: `var(--green-primary)` }}
        >
          {node.caption}
        </figcaption>
      )}
    </figure>
  )
}