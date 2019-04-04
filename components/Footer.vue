<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-4">
        <strong class="subheading">
          <img src="/img/iwakulab-logo.svg" width="64" height="64">
        </strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-4 justify-center">
        &copy;2019 —
        <strong>Iwakulab</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-instagram"]
  })
};
</script>
