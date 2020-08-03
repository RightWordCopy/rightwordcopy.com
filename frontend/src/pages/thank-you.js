import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const menuArray = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/about-me",
    title: "About",
  },
  {
    route: "/portfolio",
    title: "Portfolio",
  },
  {
    route: "/contact",
    title: "Contact",
  },
]

const ThankYou = () => {
  return (
    <Layout navMenuItems={menuArray}>
      <SEO title="Thank You!" />
      <section
        className="wrapper"
        style={{
          minHeight: `61vh`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <h1>Thanks for reaching out! </h1>
        <p>I'll be in touch shortly!</p>
      </section>
    </Layout>
  )
}

export default ThankYou
