import S from '@sanity/desk-tool/structure-builder'
import { FcBriefcase } from 'react-icons/fc'
export default S.listItem()
  .schemaType('portfolio')
  .title('Portfolio')
  .icon(FcBriefcase)
  .child(
    S.documentTypeList('portfolio')
  )
