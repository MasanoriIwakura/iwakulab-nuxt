<template>
  <v-app>
    <v-container>
      <h1>Contact</h1>
      <v-content>
        <v-container>ご用の方はお気軽にご連絡ください！</v-container>
      </v-content>
      <v-form>
        <v-flex xs12 sm6 md3>
          <v-text-field label="Name" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-textarea
            label="Message"
            required
          ></v-textarea>
        </v-flex>
        <v-btn large>Send</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
// Your name

// Email

// Message

// Send Button
export default {};
</script>
