<template>
  <page-common head="Contact">
    <div>ご用の方はお気軽にご連絡ください！</div>
    <v-form
      name="contact"
      method="post"
      action="/contact/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="send"
    >
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="name" name="name" :rules="nameRules" label="Name" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="email" name="email" :rules="emailRules" label="E-mail" required></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-textarea v-model="message" name="message" :rules="messageRules" label="Message" required></v-textarea>
      </v-flex>
      <v-btn type="submit" large>Send</v-btn>
    </v-form>
  </page-common>
</template>

<script>
import PageCommon from "~/components/PageCommon.vue";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => v.length <= 100 || "Message must be less than 100 characters"
    ]
  }),
  methods: {
    send(e) {
      if (!this.name || !this.email || !this.message) {
        alert();
        return;
      }
      const form = e.target;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name")
        })
      })
        .then(() => this.$router.push({ path: form.getAttribute("action") }))
        .catch(error => alert(error));
    }
  }
};
</script>
