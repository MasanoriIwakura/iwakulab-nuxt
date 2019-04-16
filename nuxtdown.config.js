module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [
      "pages",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ],
    [
      "blog",
      {
        page: "/blog/_post",
        permalink: "/blog/:year-:month-:day-:slug",
        isPost: true,
        toc: 1
      }
    ],
    [
      "profile",
      {
        page: "profile/_profile",
        permalink: "/profile",
        isPost: false
      }
    ]
  ]
};
