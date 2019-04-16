<template>
  <page-common v-bind:head="post.title">
    <v-img :src="post.image"/>
    <v-container>
      <h2>{{ post.description }}</h2>
      <div v-if="post.toc">
        <h1 style="margin-top: 1em;">目次</h1>
        <section style="margin-bottom: 2em;">
          <ol>
            <li v-for="toc in post.toc.items" :key="toc.title">
              <a :href="toc.link">
                <b>{{ toc.title }}</b>
              </a>
            </li>
          </ol>
        </section>
      </div>
      <nuxtent-body class="markdown-body" :body="post.body"/>
      <hr>
      <h1>[Tags]</h1>
      <div v-for="tag in post.tags" :key="tag">
        <kbd>{{tag}}</kbd>
      </div>
    </v-container>
  </page-common>
</template>

<style scoped>
ul, ol {
  padding: 0;
  position: relative;
}

ul li, ol li {
  color: gray;
  border-left: solid 6px gray;
  background: lightgray;
  margin-bottom: 3px;
   line-height: 1.5;
  padding: 0.5em;
  list-style-type: none!important;
}

a {
  color: black;
}

.v-image {
  width: 100%;
  max-width: 400px;
  height: auto;
}
</style>

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
