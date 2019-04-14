<template>
  <div id="contact">
    <div class="homeGradient" style="margin-top: -64px;">
      <v-container style="padding-top: 5em;">
        <v-layout
        text-xs-center
        wrap
        class="white--text"
        >
        <v-flex mb-4 class="text-xs-left">
          <h1 class="display-2 font-weight-light mb-0">
            Contact Us
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <v-container mt-3>
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs12 my-5>
            <h1 class="display-1 text-xs-center" style="margin-left: -2.5em;">
              Contact us and take it to <br> the next level...
            </h1>
          </v-flex>
          <v-flex xs6>
            <h2>Our Location</h2>
            <ul style="list-style: none; padding-left: 0"">
              <li>Grand Junction</li>
              <li>CO, 81505</li>
            </ul>
          </v-flex>
          <v-flex xs6>
            <h2>Email Us</h2>
            <ul style="list-style: none; padding-left: 0">
              <li>Operations: op@propertyusage.com</li>
              <li>Manager: marcdfiot@gmail.com</li>
            </ul>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-form method="post" action="https://getform.io/f/31f1792e-353b-4463-97e7-e5254295f59a" id="nativeForm" v-model="valid">

              <v-text-field
              box
                label="Name"
                v-model="name"
                :rules="nameRules"
                :counter="10"
                required
                name="name"
              ></v-text-field>

              <v-text-field
              box
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                name="mail"
              ></v-text-field>

              <v-textarea box v-model="message"
              required
              name="message"></v-textarea>

              <v-btn @click="submit" :disabled="!valid" color="primary">Send</v-btn>
         </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
    export default {
      name: 'contact',

      data () {
         return {
            valid: false,
            name: '',
            message: '',
            nameRules: [
              (v) => !!v || 'Name is required',
              (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
          }
        },
        methods: {
          submit() {
            nativeForm.submit()
          }
        }
      }
  </script>
