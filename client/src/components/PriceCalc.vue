<template>

  <v-flex xs12>
    <v-subheader class="pl-0">API Calls per Day</v-subheader>
    <v-slider v-model="slider"
    min="0"
    max="9999"
    thumb-label="always"
    >

  </v-slider>
  </v-flex>

</template>

<script>
  export default {
    name: "priceCalc",
    data: () => ({
      slider: 2000,
    }),
  }
</script>
