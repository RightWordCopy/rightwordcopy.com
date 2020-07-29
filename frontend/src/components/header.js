import PropTypes from "prop-types"
import React, { useState } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"
import UniversalLink from "./UniversalLink"
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
                <UniversalLink
                  activeClassName="navigation__item--active"
                  to={route}
                >
                  {title}
                </UniversalLink>
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
