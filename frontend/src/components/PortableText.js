import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import clientConfig from "../../client.config"
import serializers from "./serializers"

const PortableText = ({ blocks, className }) => {
  console.log(blocks)
  return (
    <BaseBlockContent
      className={`wrapper portable-text ${className} `}
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  )
}

export default PortableText
