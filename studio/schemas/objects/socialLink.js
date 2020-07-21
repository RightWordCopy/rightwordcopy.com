import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin, FaRegQuestionCircle, FaSnapchat } from "react-icons/fa";
import { GrFacebook } from 'react-icons/gr';
export default {
  title: "Social Link",
  name: "socialLink",
  type: "object",
  fields: [
    {
      title: "Platform",
      name: "platform",
      type: "string",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Instagram", value: "instagram" },
          { title: "SnapChat", value: "snapchat" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Url",
      name: "url",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "platform",
    },
    prepare: ({ title }) => {
      const iconArray = {
        facebook: <GrFacebook />,
        twitter: <AiFillTwitterCircle />,
        linkedin: <FaLinkedin />,
        instagram: <AiFillInstagram />,
        snapchat: <FaSnapchat />,
      };

      return {
        title: title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Please choose a link',
        media: title ? iconArray[title] : <FaRegQuestionCircle />,
      };
    },
  },
};