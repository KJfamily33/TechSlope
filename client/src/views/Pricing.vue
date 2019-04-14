<template>
  <div id="pricing">
    <div class="homeGradient" style="margin-top: -64px;">
    <v-container style="padding-top: 7em;">
      <v-layout text-xs-center wrap class="white--text">
      <v-flex mb-4 class="text-xs-left">
        <h1 class="display-2 font-weight-light mb-3">
          Pricing
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</div>
  <v-container>
    <PriceCalc/>
      <CompareTable/>
  </v-container>
</div>
</template>

<script>
import CompareTable from '@/components/CompareTable'
import PriceCalc from '@/components/PriceCalc'

export default {
  name: "APIs",
  components: {
    CompareTable,
    PriceCalc
  },
}
</script>
