import React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from '../components/layout'
import Portfolio from '../components/Portfolio'
const PageTemplate = ({ pageContext: { page, meta } }) => {



  // return components from _rawContent that are not disabled
  const content = (page._rawContent || []).filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case "pageHeader":
          el = <pre style={{ marginBottom: `40px`, background: `red` }} key={c._key}>{JSON.stringify(c, null, 2)}</pre>
          break;
        case "hero":
          el = <pre style={{ marginBottom: `40px` }} key={c._key}>{JSON.stringify(c, null, 2)}</pre>
          break;
        case "bodySection":
          el = <pre style={{ marginBottom: `40px`, background: `red` }} key={c._key}>{JSON.stringify(c, null, 2)}</pre>
          break;
        case "authorCallout":
          el = <pre style={{ marginBottom: `40px` }} key={c._key}>{JSON.stringify(c, null, 2)}</pre>
          break;
        case "ctaPlug":
          el = <pre style={{ marginBottom: `40px` }} key={c._key}>{JSON.stringify(c, null, 2)}</pre>
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "portfolio":
              el = <Portfolio />;
              break;
            case "contactForm":
              el = <ContactForm />;
              break;
            default:
              break;
          }
          break;
        default:
          el = null;
      }
      return el
    })


  const menuItems = page.navMenu && (page.navMenu.items || []);

  return (
    <Layout navMenuItems={menuItems}>
      {content}
    </Layout>
  )
}

export default PageTemplate
