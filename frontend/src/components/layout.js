import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { FaLinkedin, FaSnapchat } from "react-icons/fa"
import { GrFacebook } from "react-icons/gr"
import Header from "./header"
import UniversalLink from "./UniversalLink"

const iconArray = {
  facebook: <GrFacebook />,
  twitter: <AiFillTwitterCircle />,
  linkedin: <FaLinkedin />,
  instagram: <AiFillInstagram />,
  snapchat: <FaSnapchat />,
}

const Layout = ({ children, navMenuItems }) => {
  const {
    sanitySiteSettings: { _rawSocialLinks },
  } = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        _rawSocialLinks(resolveReferences: { maxDepth: 10 })
      }
    }
  `)
  console.log(_rawSocialLinks)
  return (
    <>
      <Header navItems={navMenuItems} />

      <main>{children}</main>
      <footer className="footer">
        <div className="wrapper">
          <h2>Follow Me!</h2>
          {_rawSocialLinks && (
            <ul className="footer__social-links">
              {_rawSocialLinks &&
                _rawSocialLinks.map(({ _key, platform, url }) => (
                  <li key={_key}>
                    <UniversalLink to={url}>
                      {iconArray[platform]}
                    </UniversalLink>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <small>© {new Date().getFullYear()}, Virginia Grice</small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
