<template>
  <page-common head="Technology Blog">
    <div>個人的に気になった技術を中心に投稿します</div>
    <v-timeline>
      <v-timeline-item v-for="post in posts" :key="post.date" color="blue lighten-2" large>
        <template v-slot:opposite>
          <span>{{ post.date }}</span>
        </template>
        <v-card class="elevation-2">
          <nuxt-link :to="post.permalink">
            <v-card-title class="headline">{{ post.title }}</v-card-title>
          </nuxt-link>
          <v-img :src="post.image" height="200" width="200"/>
          <v-card-text>{{ post.description }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </page-common>
</template>

<style scoped>
a {
  color: black;
}
</style>


<script>
import PageCommon from "~/components/PageCommon.vue";

export default {
  components: {
    PageCommon
  },
  asyncData: async ({ app, route }) => {
    const posts = app.$content("/blog");
    console.log(await posts.getAll());
    return {
      posts: await posts.getAll()
    };
  }
};
</script>
