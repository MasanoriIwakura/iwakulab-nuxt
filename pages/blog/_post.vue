<template>
  <page-common v-bind:head="page.title">
    <nuxtdown-body class="markdown-body" :body="page.body"/>
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
      page: (await app.$content("/blog").get(route.path)) || payload
    };
  }
};
</script>
