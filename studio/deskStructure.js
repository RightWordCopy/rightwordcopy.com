import S from '@sanity/desk-tool/structure-builder'
import { GoHome, GoSettings } from 'react-icons/go'
import landingPages from './src/structure/landingPages'

const hiddenDocTypes = (listItem) => {
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(listItem.getId())
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site Settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
        ),
      landingPages,
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])