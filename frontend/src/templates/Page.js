import React from "react"
import AuthorCallout from "../components/AuthorCallout"
import BodySection from "../components/BodySection"
import ContactForm from "../components/ContactForm"
import CTAction from "../components/CTAction"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import Portfolio from "../components/Portfolio"
import SEO from "../components/seo"
const PageTemplate = ({
  pageContext: {
    page,
    meta: { title, description, image },
  },
  location: { pathname },
}) => {
  // return components from _rawContent that are not disabled
  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case "pageHeader":
          el = <PageHeader key={c._key} {...c} />
          break
        case "hero":
          el = <Hero key={c._key} {...c} />
          break
        case "bodySection":
          el = <BodySection key={c._key} {...c} />
          break
        case "authorCallout":
          el = <AuthorCallout key={c._key} {...c} />
          break
        case "ctaPlug":
          el = <CTAction key={c._key} {...c} />
          break
        case "uiComponentRef":
          switch (c.name) {
            case "portfolio":
              el = <Portfolio key={c.name} />
              break
            case "contactForm":
              el = <ContactForm key={c.name} />
              break
            default:
              break
          }
          break
        default:
          el = null
      }
      return el
    })

  const menuItems = page.navMenu && (page.navMenu.items || [])
  return (
    <Layout className={pathname.replace("/", "")} navMenuItems={menuItems}>
      <SEO title={title} description={description} image={image} />
      {content}
    </Layout>
  )
}

export default PageTemplate
