import React from "react"
import CTALink from "./CTALink"
import Figure from "./Figure"
import PortableText from "./PortableText"
const AuthorCallout = ({ authorImg, authorBio, ctas }) => {
  return (
    <section className="author-callout">
      <div className="wrapper author-callout__content">
        <Figure node={authorImg} />
        <PortableText blocks={authorBio} />
        <div className="author-callout__ctas">
          {ctas && ctas.map(cta => <CTALink key={cta.route} {...cta} />)}
        </div>
      </div>
    </section>
  )
}

export default AuthorCallout
