import BackgroundImage from "gatsby-background-image"
import React from "react"
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import Figure from "../components/Figure"
import Layout from "../components/layout"
import PortableText from "../components/PortableText"
import UniversalLink from "../components/UniversalLink"
import { menuArray } from "../pages/thank-you"
import { getFluidProps } from "../utils"
const PortfolioTemplate = ({
  pageContext: {
    project: {
      id,
      _rawImageGallery,
      _rawFeaturedImage,
      _rawProjectDescription,
      _rawProjectExcerpt,
      title,
      slug: { current },
    },
    pagination: { prev, next },
  },
}) => {
  console.log(prev, next)
  const hasIllustration =
    !!_rawFeaturedImage &&
    !_rawFeaturedImage?.disabled &&
    _rawFeaturedImage?.image?.asset
  return (
    <Layout navMenuItems={menuArray}>
      {hasIllustration && (
        <BackgroundImage
          Tag="section"
          className="project__bg-image"
          fluid={getFluidProps(_rawFeaturedImage)}
        >
          {title && <h1 className="project__bg-image--title">{title}</h1>}
        </BackgroundImage>
      )}
      {!hasIllustration && (
        <section className="page-header">
          {title && <h1 className="page-header__title ">{title}</h1>}
        </section>
      )}
      <section className="wrapper project__content">
        <aside className="project__aside">
          <h3>Project Description</h3>
          {_rawProjectExcerpt && <PortableText blocks={_rawProjectExcerpt} />}
          <div className="pagination">
            {prev && (
              <UniversalLink to={prev.slug.current}>
                <GoChevronLeft /> Previous Project
              </UniversalLink>
            )}
            {next && (
              <UniversalLink to={next.slug.current}>Next Project <GoChevronRight /></UniversalLink>
            )}
          </div>
        </aside>
        <article className="project__description">
          {_rawProjectDescription && (
            <PortableText blocks={_rawProjectDescription} />
          )}
        </article>
      </section>
      {_rawImageGallery.length > 0 && (
        <section className="project__image-gallery wrapper">
          <h2>Project Screenshots:</h2>
          {_rawImageGallery.map(image => (
            <Figure key={image._key} node={image} />
          ))}
        </section>
      )}
    </Layout>
  )
}

export default PortfolioTemplate
