export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    // {
    //   name: 'label',
    //   type: 'string',
    //   description: 'an optional description of the block'
    // },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent',
      description: 'Optional tagline'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled',
      media: 'illustration'

    },
    prepare({ media, title, disabled }) {
      return {
        media: media ? media : '',
        title: `Hero: ${disabled ? 'DISABLED' : title}`,
      }
    }
  }
}