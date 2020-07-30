import React from "react"
import CTALink from "./CTALink"
import PortableText from "./PortableText"

const CTAction = ({ title, body, ctas }) => {
  return (
    <section className="cta-section">
      <div className="wrapper">
        {(title || body) && (
          <div className="cta-section__content">
            {title && <h3>{title}</h3>}
            {body && <PortableText blocks={body.content} />}
          </div>
        )}
        {ctas &&
          ctas.map((cta, index) => <CTALink key={cta + index} {...cta} />)}
      </div>
    </section>
  )
}

export default CTAction
