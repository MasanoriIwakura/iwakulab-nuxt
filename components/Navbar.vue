<template>
  <v-toolbar color="black" dark>
    <v-toolbar-title>
      <img src="/img/iwakulab-logo.svg" width="64" height="64">
    </v-toolbar-title>

    <v-divider class="mx-3" inset vertical></v-divider>

    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>

      <v-divider vertical></v-divider>
      <v-btn flat to="/blog">Tech Blog</v-btn>

      <v-divider vertical></v-divider>

      <v-btn flat>Hobby Blog</v-btn>

      <v-divider vertical></v-divider>

      <v-btn flat>Contact</v-btn>

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-side-icon></v-toolbar-side-icon>
  </v-toolbar>
</template>