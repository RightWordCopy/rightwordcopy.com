import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"
const Header = ({ navItems }) => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState("")
  useScrollPosition(
    ({ currPos }) => {
      currPos.y < -10
        ? setIsHeaderScrolled("header--scrolled")
        : setIsHeaderScrolled("")
    },
    [isHeaderScrolled]
  )

  return (
    <header className={`header ${isHeaderScrolled}`}>
      <nav className="wrapper navigation">
        <ul className="navigation__list">
          {navItems &&
            navItems.map(({ route, title }, index) => (
              <li className="navigation__item" key={index}>
                <Link activeClassName="navigation__item--active" to={route}>
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  navItems: PropTypes.array,
}

export default Header
