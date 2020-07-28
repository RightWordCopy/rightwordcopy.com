import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ navItems }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav>
      <ul>
        {navItems && navItems.map(({ route, title }, index) => (
          <li key={index}><Link to={route}>{title}</Link></li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  navItems: PropTypes.array,
}


export default Header
