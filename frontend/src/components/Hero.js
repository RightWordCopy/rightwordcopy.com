import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import React from "react"
import clientConfig from "../../client.config"
import CTALink from "./CTALink"
import PortableText from "./PortableText"
const Hero = ({ heading, illustration: { image }, tagline, cta }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-default.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const fluidProps =
    image && image.asset
      ? getFluidGatsbyImage(
          image.asset._id,
          { maxWidth: 1050 },
          clientConfig.sanity
        )
      : fluid
  const heroGradient =
    !!heading || !!tagline || !!cta.title
      ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`
      : `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0))`
  const backgroundFluidImageStack = [fluidProps, heroGradient].reverse()
  return (
    <BackgroundImage fluid={backgroundFluidImageStack} className="hero">
      <div className="hero__inner wrapper">
        {heading && <h1 dangerouslySetInnerHTML={{ __html: `${heading}` }} />}
        {tagline && <PortableText blocks={tagline} />}
        {cta && cta.title && <CTALink {...cta} />}
      </div>
    </BackgroundImage>
  )
}

export default Hero
