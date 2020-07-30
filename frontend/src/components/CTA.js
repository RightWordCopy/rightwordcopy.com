import React from "react"
import UniversalLink from "./UniversalLink"

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
        className={props.buttonActionClass || `cta cta__${props.kind}`}
      >
        {props.title}
      </UniversalLink>
    )
  }

  // External
  if (props.link) {
    return (
      <a
        href={props.link}
        className="cta cta__link--external"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    )
  }

  return (
    <UniversalLink className={`cta cta__${props.kind}`} to={link}>
      {props.title}
    </UniversalLink>
  )
}

export default CTA
