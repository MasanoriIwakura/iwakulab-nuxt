<template>
  <v-app>
    <nuxtdown-body class="body" :body="page.body"/>
  </v-app>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      page: (await app.$content("/profile").get(route.path)) || payload
    };
  }
};
</script>

