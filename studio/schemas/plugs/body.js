
export default {
  title: 'Body Section',
  name: 'bodySection',
  type: 'object',
  fields: [
    { name: 'content', type: 'bodyPortableText' }
  ],
  preview: {
    select: {
      subtitle: 'content.0',
      media: 'content.0'
    },
    prepare: ({ subtitle, title, media }) => {
      if (subtitle === 'mainImage') {
        return {
          title: 'Body Section',
          media
        }
      } else {
        const text = subtitle.children ? subtitle.children[0]?.text : ''
        const subText = text.length > 70 ? `${text.substring(0, 67)}...` : text
        return {
          title: 'Body Section',
          subtitle: subtitle ? subText : ''
        }
      }
    }
  }
}