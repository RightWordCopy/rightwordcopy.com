import { FcOpenedFolder } from "react-icons/fc";
import { customSlugify } from "../../src/utils";
export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: FcOpenedFolder,
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
    },
    prepare: ({ title, media }) => {
      return {
        title,
        media: media.image ? media.image : "",
      };
    },
  },
  fields: [
    {
      name: "featuredImage",
      type: "illustration",
      title: "Featured Image",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Click generate to create a link to this project!",
      options: {
        source: (doc) => `/portfolio/${doc.title}`,
        slugify: customSlugify,
      },
    },
    {
      name: "projectExcerpt",
      title: "Excerpt",
      type: "simpleBlockContent",
      description:
        "Add a brief (<140 characters) description of the project (e.g. what kind of project was it?)",
      validation: (Rule) =>
        Rule.required()
          .max(140)
          .error("Titles must be less than 140 characters."),
    },

    {
      name: "projectDescription",
      title: "Project Description",
      type: "bodyPortableText",
    },
    {
      name: "imageGallery",
      title: "Project Gallery",
      description: "Add multiple pictures in here to show off your project.",
      type: "array",
      of: [{ type: "mainImage" }],
    },
  ],
};
