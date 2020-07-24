export default {
  type: 'object',
  name: 'uiComponentRef',
  title: 'UI component reference',
  fields: [
    {
      description: 'This is for adding reference to specific UI components. Currently works with the string `portfolio` or `contactForm`',
      type: 'string',
      name: 'name'
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare({ title }) {
      return {
        title: `UI reference: ${title}`
      }
    }
  }
}