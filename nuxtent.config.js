module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? baseURL : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [
      "page",
      {
        page: "_page",
        permalink: "/page/:slug",
        isPost: false,
        generate: [
          'get',
          'getAll'
        ]
      }
    ],
    [
      "blog",
      {
        page: "_post",
        permalink: "/blog/:year-:month-:day-:slug",
        isPost: true,
        toc: 1,
        generate: [
          'get',
          'getAll'
        ]
      }
    ]
  ]
};
