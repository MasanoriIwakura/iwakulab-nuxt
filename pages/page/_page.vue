<template>
  <page-common :head="page.title">
    <v-container class="markdown-body">
      <nuxtent-body class="body" :body="page.body"/>
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
      page: (await app.$content("/page").get(route.path)) || payload
    };
  }
};
</script>

