<template>

  <v-flex xs12>
    <div class="display-3"> Estimated Cost: ${{ cost }}</div>
    <v-subheader class="pl-0">API Calls per Day</v-subheader>
    <v-slider v-model="calls"
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
      calls: 812,
    }),
    computed: {
      cost: function () {
        return (this.calls*.007).toFixed(2)
      }
    }
  }
</script>
