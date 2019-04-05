<template>
  <v-app>
    <v-container class="markdown-body">
      <nuxtdown-body class="body" :body="page.body"/>
    </v-container>
  </v-app>
</template>

<template>
  <page-common head="Profile">
    <v-container class="markdown-body">
      <nuxtdown-body class="body" :body="page.body"/>
    </v-container>
  </page-common>
</template>

<script>
import PageCommon from '~/components/PageCommon.vue'

export default {
  components: {
    PageCommon
  },
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

