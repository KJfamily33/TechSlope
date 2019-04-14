<template>
  <v-app light>
    <v-toolbar app color=transparent dark flat class="elevation-0">
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" style="color: white">
          <span>Property</span>
          <span class="font-weight-light">Usage</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="apis"><v-btn flat >APIs</v-btn></router-link>
      <router-link to="documentation"><v-btn flat >Documentation</v-btn></router-link>
      <router-link to="about"><v-btn flat >About</v-btn></router-link>
      <router-link to="contact"><v-btn flat >Contact Us</v-btn></router-link>
      <v-spacer></v-spacer>
      <v-btn outline
      @click.stop="loginDialog = true"
      target="_blank"
      >
      <v-icon>mdi-lock-outline</v-icon>
      <span class="text-uppercase mr-2">Login</span>
    </v-btn>
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="drawer = true"
    />
  </v-toolbar>
  <v-navigation-drawer
    v-model="drawer"
    app
    light
    temporary
    right
  >
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
      >
        <v-list-tile-title v-text="link.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <v-content>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
    <!-- <v-dialog
    v-model="loginDialog"
    max-width="290"
    >
    <v-card>
      <v-tabs
      v-model="active"
      color="white"
      light
      slider-color="grey"
      >
      <v-tab ripple key="login">
        Login
      </v-tab>
      <v-tab ripple key="signup">
        Sign Up
      </v-tab>
      <v-tab-item
      :key="login"
      >
      <v-container>
        <v-flex xs-12>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          >
          <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          ></v-text-field>

          <v-text-field
          v-model="password"
          label="Password"
          required
          ></v-text-field>
          <v-btn
          color="green"
          dark
          @click="resetValidation"
          >
          Login
        </v-btn>
      </v-form>
      <v-btn block color="red" dark>Google</v-btn>
      <v-btn block color="blue" dark>Facebook</v-btn>
    </v-flex xs-12>
  </v-container>
</v-tab-item>
<v-tab-item
:key="signup"
>
<v-container>
  <v-flex xs-12>
    <v-text class="subheader">Welcome</v-text>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-text-field
    v-model="name"
    :rules="nameRules"
    label="Name"
    required
    ></v-text-field>

    <v-text-field
    v-model="email"
    :rules="emailRules"
    label="E-mail"
    required
    ></v-text-field>

    <v-text-field
    v-model="password"
    :counter="8"
    label="Password"
    required
    ></v-text-field>

    <v-btn
    color="green"
    dark
    // @click="resetValidation"
    >
    Signup
  </v-btn>
</v-form>
</v-flex>
</v-container>
</v-tab-item>
</v-tabs>

</v-card>
</v-dialog> -->
</v-content>
</v-app>
</template>

<script>
import {
  mapMutations
} from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      links: [ {to: "apis", text: "APIs"}, {to: "docs", text: "Documentation"}, {to: "pricing", text: "Pricing"}, {to: "about", text: "About"}],
      loginDialog: false,
      password: "",
      email: "",
      name: "",
      emailRules: "",
      nameRules: "",
      valid: false,
      drawer: false,
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: none;
}

.v-btn {
  font-weight: 300;
  text-transform: none;
}

.homeGradient {
  background: rgb(4,41,76); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgba(4,41,76,1) 0%, rgba(0,35,91,1) 23%, rgba(8,38,119,1) 29%, rgba(7,48,130,1) 36%, rgba(9,78,142,1) 66%, rgba(0,73,142,1) 69%, rgba(33,88,140,1) 84%, rgba(22,84,142,1) 86%, rgba(6,78,147,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(4,41,76,1) 0%,rgba(0,35,91,1) 23%,rgba(8,38,119,1) 29%,rgba(7,48,130,1) 36%,rgba(9,78,142,1) 66%,rgba(0,73,142,1) 69%,rgba(33,88,140,1) 84%,rgba(22,84,142,1) 86%,rgba(6,78,147,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(4,41,76,1) 0%,rgba(0,35,91,1) 23%,rgba(8,38,119,1) 29%,rgba(7,48,130,1) 36%,rgba(9,78,142,1) 66%,rgba(0,73,142,1) 69%,rgba(33,88,140,1) 84%,rgba(22,84,142,1) 86%,rgba(6,78,147,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#04294c', endColorstr='#064e93',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>
