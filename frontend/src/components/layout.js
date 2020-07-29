import PropTypes from "prop-types"
import React from "react"
import Header from "./header"

const Layout = ({ children, navMenuItems }) => {
  return (
    <>
      <Header navItems={navMenuItems} />

      <main className="wrapper">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
