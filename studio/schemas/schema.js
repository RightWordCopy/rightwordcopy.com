// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
// document schemas
import navMenu from './documents/navMenu'
import page from './documents/page'
import portfolio from './documents/portfolio'
import route from './documents/route'
import siteSettings from './documents/siteSettings'
// object schemas
import authorCallout from './objects/authorCallout'
import bodyPortableText from './objects/bodyPortableText'
import cta from './objects/cta'
import mainImage from './objects/mainImage'
import openGraph from './objects/openGraph'
import simpleBlockContent from './objects/simpleBlockContent'
import socialLink from './objects/socialLink'
import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'


const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    openGraph,
    mainImage,
    socialLink,
    siteSettings,
    navMenu,
    page,
    cta,
    route,
    portfolio,
    bodyPortableText,
    authorCallout,
    simpleBlockContent
  ]).concat(allPlugs)
})
