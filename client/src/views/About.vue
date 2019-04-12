<template>
  <div id="About">
    <div class="homeGradient" style="margin-top: -64px;">
    <v-container style="padding-top: 7em;">
      <v-layout
      text-xs-center
      wrap
      class="white--text">
        <v-flex mb-4 class="text-xs-left">
          <h1 class="display-2 font-weight-light mb-3">
            About
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
    <v-container>
      <v-flex d-flex xs12 sm6 md12>
        <v-flex d-flex cs12 sm6 md6>
        <v-card color=#FAFAFA class="elevation-0">
          <h1> Our Mission </h1>
          <p> PropertyUsage empowers investors to
            profitability by finding the best use for commercial real estate property. </p>
          <h1> Our Vision </h1>
          <p> PropertyUsage makes it easy for Business Decision
            Makers to evaluate a property's use based on factors such as
            traffic, demographics, income, tax incentives and
            the location of similar and competing businesses.</p>
          <h1> Our Product </h1>
          <p> PropertyUsage provides multiple Application Programming Interfaces (APIs), which allow you access to our database to retrieve information about the best usage for commercial real estate properties. PropertyUsage has four main products:
            <br></br>
            <ul>
              <li>PropertyUsage Score: a free API that gives you a badge to place on your website to show the best usage of commercial real estate properties broken down by the score for each relevant industry type (Retail, Industrial, Hospitality, etc.).</li>
              <li>PropertyUsage Score Pro: a paying API that provides you with the details of how we came up with our PropertyUsage Score. We list all of the data we used so that you can make knowledgeable decisions.</li>
              <li>PropertyUsage Zoning: a free API that saves you time by looking up zoning information on various government websites. You will see the zoning type that is attached to the property’s address.</li>
              <li>PropertyUsage Zoning Pro: a paying API that provides you with the current zoning information and also gives you the predictive analytics information about future zoning and the effect on the property.</li>
            </ul>
          </p>
        </v-card>
        </v-flex>
        <v-layout  column align-center justify-center>
        <v-card color=#FAFAFA class = "elevation-0">
          <h1> Supporting Information </h1>
          <h3><a href="https://data.colorado.gov/Transportation/Road-Traffic-Counts-in-Colorado-2017/uzf4-3qtt">  Colorado Traffic For 2017</a></h3>
          <h3><a href="https://data.colorado.gov/Economic-Growth/Enterprise-Zones-1-1-2019/apxk-9kv4">Colorado Enterprise Zones</a></h3>
          <h3><a href="https://data.colorado.gov/Demographics/Population-Projections-in-Colorado/q5vp-adf3">Colorado Population Projections</a></h3>
          <h3><a href="https://data.colorado.gov/dataset/OEDIT-Opportunity-Zoning-KMZ/7f2s-r574">Colorado Opportunity Zone Map</a></h3>
        </v-card>
        </v-layout>

      </v-flex>
      <v-flex d-flex xs12 sm6 md12>
        <v-card color="#FAFAFA" class = "elevation-0">
          <v-img
              <img src="http://i68.tinypic.com/14ecbbb.jpg" width=1150 height=500 border="0" alt="Image and video hosting by TinyPic">
        </v-card>
      </v-flex>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "About",
  components: {
  },
}
</script>
