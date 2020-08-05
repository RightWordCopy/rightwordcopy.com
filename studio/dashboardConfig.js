export default {
  widgets: [
    {
      name: "project-info",
      layout: {
        width: "small",
        height: "auto",
      },
    },
    { name: "structure-menu" },
    {
      name: "netlify",
      layout: {
        width: "small",
        height: "auto",
      },
      options: {
        title: "Netlify Deploys",
        description:
          "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",

        sites: [
          {
            title: "Deploy Site",
            apiId: "513d4fd9-f7ea-4d75-8a26-932e9082b7de",
            buildHookId: "5f2aeb06baa4d30134f1d735",
            name: "rightwordcopy",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Recent Portfolio Pieces",
        order: "_createdAt desc",
        types: ["portfolio"],
        limit: 6,
        createButtonText: "Create new project",
      },
      layout: { width: "medium" },
    },
  ],
};
