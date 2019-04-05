<template>
  <page-common head="Contact">
    <div>ご用の方はお気軽にご連絡ください！</div>
    <v-form>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-textarea label="Message" required></v-textarea>
      </v-flex>
      <v-btn large>Send</v-btn>
    </v-form>
  </page-common>
</template>

<script>
import PageCommon from '~/components/PageCommon.vue'

export default {
  components: {
    PageCommon
  },
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>
