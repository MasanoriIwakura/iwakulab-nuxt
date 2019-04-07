<template>
  <page-common v-bind:head="post.title">
    <v-img :src="post.image" max-height="300" max-width="550"/>
    <v-container>
      <h2>{{ post.description }}</h2>
      <nuxtdown-body class="markdown-body" :body="post.body"/>
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
      title: `${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      post: (await app.$content("/blog").get(route.path)) || payload
    };
  }
};
</script>
