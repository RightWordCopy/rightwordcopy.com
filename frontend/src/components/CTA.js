import { navigate } from "gatsby"
import React from "react"
import UniversalLink from "./UniversalLink"

const doNavigate = target => {
  if (!target || !target.length) {
    return
  }
  const internal = /^\/(?!\/)/.test(target)
  if (internal) {
    navigate(target)
  } else {
    window.location = target
  }
}

const CTA = props => {
  console.log(props)
  let link = props.route || props.link || "#"
  if (
    props.sitePageRoute &&
    props.sitePageRoute.slug &&
    props.sitePageRoute.slug.current
  ) {
    link = `/${props.sitePageRoute.slug.current}`
  }

  if (props.kind === "button") {
    return (
      <UniversalLink
        id="navAction"
        to={link}
        className={props.buttonActionClass || `${props.kind}`}
      >
        {props.title}
      </UniversalLink>
    )
  }

  // External
  if (props.link) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    )
  }

  return <UniversalLink to={link}>{props.title}</UniversalLink>
}

export default CTA
