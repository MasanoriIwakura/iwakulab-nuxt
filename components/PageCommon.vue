<template>
  <v-app>
    <v-container>
      <h1>{{ head }}</h1>
      <v-content>
        <v-container>
          <slot></slot>
        </v-container>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ["head"]
};
</script>
