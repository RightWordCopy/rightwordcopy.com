export default {
  title: 'Body Section',
  name: 'bodySection',
  type: 'object',
  fields: [
    { name: 'content', type: 'bodyPortableText' }
  ],
  preview: {
    select: {
      subtitle: 'content.0.children.0.text'
    },
    prepare: ({ subtitle, title }) => {
      const subText = subtitle.length > 70 ? `${subtitle.substring(0, 67)}...` : subtitle
      return {
        title: 'Body Section',
        subtitle: subtitle ? subText : ''
      }
    }
  }
}