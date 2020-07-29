import { Link as GatsbyLink } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { forwardRef } from "react"
const UniversalLink = forwardRef(
  (
    {
      children,
      to,
      className,
      activeClassName,
      partiallyActive,
      initial,
      ...other
    },
    ref
  ) => {
    /**
     * Tailor the following test to your environment.
     * This example assumes that any internal link (intended for Gatsby)
     * will start with exactly one slash, and that anything else is external
     *
     */
    const internal = /^\/(?!\/)/.test(to)
    const isHashedPath = to.includes("/#")
    // Use Gatsby Link for internal links and <a> for others
    if (internal) {
      return (
        <GatsbyLink
          ref={ref}
          to={to}
          className={className}
          partiallyActive={partiallyActive}
          activeClassName={isHashedPath && to !== "/" ? "" : activeClassName}
          {...other}
        >
          {children}
        </GatsbyLink>
      )
    } else if (isHashedPath) {
      return (
        <AnchorLink ref={ref} className={className} {...other} to={to}>
          {children}
        </AnchorLink>
      )
    }
    return (
      <a
        ref={ref}
        href={to}
        className={className}
        {...other}
        target="_BLANK"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
)

export default UniversalLink
