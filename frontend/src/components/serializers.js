import React from "react"
import CTALink from "./CTALink"
import PortableTextList from "./PortableTextList"
import UniversalLink from "./UniversalLink"
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
  },
  list: PortableTextList,
}

export default serializers
