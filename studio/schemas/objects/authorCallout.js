export default {
  name: 'authorCallout',
  title: 'Author Callout',
  type: 'object',
  fields: [
    {
      type: 'mainImage',
      name: 'authorImg',
      title: 'Author Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctas',
      type: 'array',
      of: [
        {
          name: 'cta', type: 'cta'
        }
      ]
    }
  ],
  preview: {
    select: {
      cta0: 'ctas.0.title',
      cta1: 'ctas.1.title',
      cta2: 'ctas.2.title',
      cta3: 'ctas.3.title',
      media: 'authorImg'
    },
    prepare: ({ title, cta0, cta1, cta2, cta3, media }) => {
      const ctas = [cta0, cta1, cta2,].filter(Boolean)
      const subtitle = ctas.length > 0 ? `CTAs: ${ctas.join(', ')}` : ''
      const hasMoreCTAs = Boolean(cta3)
      return {
        media,
        title: `Author Callout`,
        subtitle: hasMoreCTAs ? `${subtitle}...` : subtitle,
      }
    }
  }
}