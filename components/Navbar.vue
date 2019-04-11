<template>
  <nav>
    <v-toolbar class="grey darken-4 hidden-sm-and-down" dark>
      <v-toolbar-title>
        <router-link to="/">
          <img src="/img/iwakulab-logo.svg" width="64" height="64">
        </router-link>
      </v-toolbar-title>

      <v-divider class="mx-3" inset vertical></v-divider>

      <v-toolbar-items>
        <v-btn flat v-for="item in menu" :key="item.title" :to="item.link">{{ item.title }}</v-btn>
        <v-divider vertical></v-divider>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-btn flat icon href="https://github.com/MasanoriIwakura/iwakulab-nuxt" target="_blank">
        <v-icon medium>fa-github</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="hidden-md-and-up">
      <v-expansion-panel class="grey darken-4" dark>
        <v-expansion-panel-content v-model="show">
          <div slot="header">
            <router-link to="/">
              <img src="/img/iwakulab-logo.svg" width="32" height="32">
            </router-link>
          </div>
          <v-card v-for="item in menu" :key="item.title">
            <v-btn flat class="nav-item" :to="item.link" style="width:100%;" @click="closeMenu">{{ item.title }}</v-btn>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: 'Profile', link: '/profile' },
        { title: 'Tech Blog', link: '/blog' },
        { title: 'Hobby Blog', link: '/hobby' },
        { title: 'Contact', link: '/contact' }
      ],
      show: false
    }
  },
  methods: {
    closeMenu () {
      this.show = false
    }
  }
}
</script>
