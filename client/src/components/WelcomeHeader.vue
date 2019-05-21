<template>
  <v-container style="padding-top: 5em;">
    <v-layout
      text-xs-center
      wrap
      class="white--text"
    >
      <v-flex mb-4 class="text-xs-left">
        <h1 class="display-2 font-weight-light mb-3">
          Property Usage Data
        </h1>
        <p class="subheading font-weight-light">
          This API returns a suggested property use and why, in addition to municiple zoneing codes with descriptions for any location in Colorado.
          <br>
          This can be easily integrated into websites, and property listings.
          <br>
          Get started by requesting an API key.
        </p>
        <v-btn color="green white--text font-weight-normal">Get an API key</v-btn>
      </v-flex>
      <v-flex class="text-xs-left mt-5">
        <h3 class="headline font-weight-light">Usage Search</h3>
        <SearchDemo/>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SearchDemo from '@/components/SearchDemo'
  export default {
    components: {
      SearchDemo
    },
    name: "welcomeHeader",
    data: () => ({

    })
  }
</script>

<style>

</style>
