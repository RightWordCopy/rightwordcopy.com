import { FcOpenedFolder } from "react-icons/fc";

export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  icon: FcOpenedFolder,
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage'
    },
    prepare: ({ title, media }) => {
      console.log(media)
      return {
        title,
        media: media.image ? media.image : ''
      }
    }
  },
  fields: [
    {
      name: 'featuredImage',
      type: 'illustration',
      title: 'Featured Image'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'bodyPortableText'
    },
    {
      name: "imageGallery",
      title: "Project Gallery",
      description: "Add multiple pictures in here to show off your project.",
      type: "array",
      of: [{ type: "mainImage" }],
    },

  ]
}