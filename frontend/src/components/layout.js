
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import "./layout.css"


const Layout = ({ children, navMenuItems }) => {


  return (
    <>
      <Header navItems={navMenuItems} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
