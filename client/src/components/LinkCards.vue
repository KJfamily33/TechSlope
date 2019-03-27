<template>
  <v-container>
    <v-layout
    text-xs-center
    wrap
    class="white--text"
    >
    <v-flex xs4 mb-4>
      <transition appear name="slide-y-reverse-transition">
      <v-card
      light
      style="border-left: 5px solid #114fa5;"
      max-width="500"
      mx-4
      >
      <v-card-title>
        <v-icon
        left
        style="color: #114fa5;"
        >
        mdi-database
      </v-icon>
      <span class="title font-weight-light" style="color: #114fa5;">Explore Our APIs</span>
      <v-icon
      left
      style="color: #114fa5;"
      >
      mdi-arrow-right
    </v-icon>
    </v-card-title>

    <v-card-text>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </v-card-text>
</v-card>
</transition>
    </v-flex>
    <v-flex xs4 mb-4>
      <v-card
      light
      style="border-left: 5px solid #12a365; margin: 0 15px;"
      max-width="500"
      mx-4
      >
      <v-card-title>
        <v-icon
        left
        style="color: #12a365;"
        >
        mdi-book
      </v-icon>
      <span class="title font-weight-light" style="color: #12a365;">The Documentation</span>
      <v-icon
      left
      style="color: #12a365;"
      >
      mdi-arrow-right
    </v-icon>
    </v-card-title>

    <v-card-text>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </v-card-text>
</v-card>
    </v-flex>
    <v-flex xs4 mb-4>
      <v-card
      light
      style="border-left: 5px solid #e1781c;"
      max-width="500"
      >
      <v-card-title>
        <v-icon
        left
        style="color: #e1781c;"
        >
        mdi-help
      </v-icon>
      <span class="title font-weight-light" style="color: #e1781c;">Learn About Us</span>
      <v-icon
      left
      style="color: #e1781c;"
      >
      mdi-arrow-right
    </v-icon>
    </v-card-title>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</template>

<script>
  export default {
    name: "linkCards",
    data: () => ({

    })
  }
</script>

<style>

</style>
