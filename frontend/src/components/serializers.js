import SanityBlockContent from "@sanity/block-content-to-react"
import React from "react"
import CTALink from "./CTALink"
import Figure from "./Figure"
import PortableTextList from "./PortableTextList"
import UniversalLink from "./UniversalLink"

const BlockRenderer = props => {
  const { style = "normal" } = props.node

  if (style === "normal") {
    return <p className="paragraph">{props.children}</p>
  }

  // Fall back to default handling
  return SanityBlockContent.defaultSerializers.types.block(props)
}

const serializers = {
  marks: {
    link: props => {
      return (
        <UniversalLink to={props.mark.href}>{props.children}</UniversalLink>
      )
    },
  },
  types: {
    cta: ({ node }) => <CTALink {...node} />,
    mainImage: Figure,
    block: BlockRenderer,
  },
  list: PortableTextList,
}

export default serializers
