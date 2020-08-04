import imageUrlBuilder from "@sanity/image-url"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../client.config"
export const getFluidProps = illustration => {
  if (!!illustration && !illustration.disabled && illustration.image.asset) {
    return getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 1050 },
      clientConfig.sanity
    )
  }
  return null
}

/**
 * Build imageURL for SEO
 */

const builder = imageUrlBuilder(clientConfig.sanity)

export function imageUrlFor(source) {
  return builder.image(source)
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}
