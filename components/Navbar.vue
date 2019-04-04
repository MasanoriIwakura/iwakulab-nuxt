<template>
  <v-toolbar class="grey darken-4" dark>
    <v-toolbar-title>
      <img src="/img/iwakulab-logo.svg" width="64" height="64">
    </v-toolbar-title>

    <v-divider class="mx-3" inset vertical></v-divider>

    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>

      <v-divider vertical></v-divider>
      <v-btn flat to="/blog">Tech Blog</v-btn>

      <v-divider vertical></v-divider>

      <v-btn flat to="/hobby">Hobby Blog</v-btn>

      <v-divider vertical></v-divider>

      <v-btn flat to="/contact">Contact</v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-btn flat icon href="https://github.com/MasanoriIwakura/iwakulab-nuxt" target="_blank">
      <v-icon medium>fa-github</v-icon>
    </v-btn>
  </v-toolbar>
</template>