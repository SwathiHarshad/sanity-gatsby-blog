export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6076c0a9c63091e4759e29e5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-berw8x19",
                  apiId: "13fc1d25-cff2-419a-b506-7dee6601d043",
                },
                {
                  buildHookId: "6076c0a9f3f8b1e76e38b730",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-a149ksdd",
                  apiId: "67b36a5b-23e8-4022-b3fa-6d76725a6d79",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SwathiHarshad/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-a149ksdd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
