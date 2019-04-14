<template>
  <page-common head="Technology Blog">
    <div>個人的に気になった技術を中心に投稿します</div>
    <v-timeline class="hidden-sm-and-down">
      <v-timeline-item v-for="post in posts" :key="post.date" color="blue lighten-2" large>
        <template v-slot:opposite>
          <span>{{ post.date }}</span>
        </template>
        <v-card class="elevation-2">
          <nuxt-link :to="post.permalink">
            <v-card-title class="headline">{{ post.title }}</v-card-title>
          </nuxt-link>
          <v-img :src="post.image"/>
          <v-card-text>{{ post.description }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <div class="hidden-md-and-up">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 v-for="post in posts" :key="post.date">
            <v-card>
              <nuxt-link :to="post.permalink">
                <v-card-title class="headline">{{ post.title }}</v-card-title>
              </nuxt-link>
              <v-img :src="post.image"/>
              <v-card-text>{{ post.date }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </page-common>
</template>

<style scoped>
a {
  color: black;
}

.v-image {
  width: 100%;
  max-width: 200px;
  height: auto;
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
