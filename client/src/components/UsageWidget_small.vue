<template>

  <v-flex xs12>
    <v-card max-width="400" class="mx-auto" >
      <v-card-title><span class="title text-uppercase"><span>Property</span>
        <span class="font-weight-light">Usage</span></span></v-card-title>
        <v-card-text class="text-xs-center headline">
          <v-icon large left>
            {{ usageIcon }}
          </v-icon>
          <span>
            {{ response.usages[0].name + ": " + response.usages[0].score*100 }}
          </span>
        </v-card-text>
        <v-card-actions>
          <v-list-tile class="grow">
            <v-list-tile-avatar color="grey darken-3">
              <v-img class="elevation-6"
              src="https://maps.googleapis.com/maps/api/streetview?size=400x400&location=39.070060,-108.555690&fov=90&heading=235&pitch=10&key=AIzaSyBn9dpIQ_h43X4UYjRGkaoy-_iL2iE1wvs"
              ></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ response.match }}</v-list-tile-title>
            </v-list-tile-content>

            <v-layout align-center justify-end>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-layout>
        </v-list-tile>
      </v-layout>
    </v-card-actions>
  </v-card>
</v-flex>

</template>

<script>
export default {
  name: "usageWidget_small",
  data: () => ({
    response: { match: "1003 Grand Ave.", usages: [ {name: "Health Care", score: 0.8}, {name: "Office", score: 0.2} ], details: { population: 2045, dailyTraffic: 5000, crimeRate: 1.1, medianIncome: 68.94, unemploymentRate: 5.2, povertyRate: 28.90, competing: { count: 1, business: [ {name: "Paladina Health Clinic", lat: 39.069010, lon: -108.561330}] }, opportunityZone: {name: "Mesa 2", link: "https://www.cdfifund.gov/Pages/Opportunity-Zones.aspx", details: "Low-Income Community: NMTC", censusTract: "08077000200", geoPoly: null } } }
  }),
  computed: {
    usageIcon: function () {
      switch (this.response.usages[0].name) {
        case "Health Care":
          return "mdi-medical-bag";
          break;
        case "Restaurant":
          return "mdi-food";
          break;
        default:
          return "mdi-help";
      }
    }
  },
  methods: {

  }
}
</script>
