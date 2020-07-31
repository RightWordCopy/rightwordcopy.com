import BackgroundImage from "gatsby-background-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import React from "react"
import clientConfig from "../../client.config"
import PortableText from "./PortableText"
const PageHeader = ({ illustration, title, subtitle }) => {
  const hasIllustration =
    !!illustration && !illustration.disabled && illustration.image.asset

  const fluidProps = hasIllustration
    ? getFluidGatsbyImage(
        illustration.image.asset._id,
        { maxWidth: 1050 },
        clientConfig.sanity
      )
    : null

  const backgroundFluidImageStack = [
    fluidProps,
    `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))`,
  ].reverse()
  return (
    <>
      {hasIllustration && (
        <BackgroundImage
          Tag="section"
          className="page-header__with-illustration"
          fluid={backgroundFluidImageStack}
        >
          {title && (
            <h1 className="page-header__with-illustration--title">{title}</h1>
          )}
          {subtitle && <PortableText blocks={subtitle} />}
        </BackgroundImage>
      )}
      {!hasIllustration && (
        <section className="page-header">
          {title && <h1 className="page-header__title ">{title}</h1>}
          {subtitle && <PortableText blocks={subtitle} />}
        </section>
      )}
    </>
  )
}

export default PageHeader
