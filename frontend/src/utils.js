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
