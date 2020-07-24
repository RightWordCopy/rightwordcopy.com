import S from '@sanity/desk-tool/structure-builder'
import { FcHome } from 'react-icons/fc'
import { GoSettings } from 'react-icons/go'
import landingPages from './src/structure/landingPages'
import portfolio from './src/structure/portfolio'
const hiddenDocTypes = (listItem) => {
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(listItem.getId())
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .id('siteSettings')
        .title('Site Settings')
        .icon(GoSettings)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(FcHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
        ),
      landingPages,
      portfolio,
      ...S.documentTypeListItems().filter(hiddenDocTypes),


    ])