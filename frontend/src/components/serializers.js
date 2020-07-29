import React from "react"
import UniversalLink from "./UniversalLink"
const serializers = {
  marks: {
    link: props => {
      return (
        <UniversalLink to={props.mark.href}>{props.children}</UniversalLink>
      )
    },
  },
}

export default serializers
