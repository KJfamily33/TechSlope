<template>
    <v-flex xs12>
        <v-card max-width="500" class="mx-auto">
          <div>
            <gmap-map
              :center="center"
              :zoom="18"
              style="width:100%;  height: 400px;"
            >
              <gmap-marker
              ref="'marker' + index"
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
            <v-card-title>
                <span class="title text-uppercase">
                    <span>Property</span>
                    <span class="font-weight-light">Usage</span>
                </span>
            </v-card-title>
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
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  name: "usageWidget_small",
  data: function() {
    return {
    response: { match: "1003 Grand Ave., Grand Junction, CO 81501", usages: [ {name: "Health Care", score: 0.8}, {name: "Office", score: 0.2} ], details: { population: 2045, dailyTraffic: 5000, crimeRate: 1.1, medianIncome: 68.94, unemploymentRate: 5.2, povertyRate: 28.90, competing: { count: 1, business: [ {name: "Paladina Health Clinic", lat: 39.069010, lon: -108.561330}] }, opportunityZone: {name: "Mesa 2", link: "https://www.cdfifund.gov/Pages/Opportunity-Zones.aspx", details: "Low-Income Community: NMTC", censusTract: "08077000200", geoPoly: null } } },
    coordinates: {},
    center: {lat: 39.070031099999994, lng: -108.5556852},
    places: [],
    currentPlace: null,
    markers: [ { position: {
      lat: 39.070031099999994,
      lng: -108.5556852
    }}],
    map: null,
    bounds: null,
    geocoder: null
    };
  },
  computed: {
    usageIcon: function () {
      switch (this.response.usages[0].name) {
        case "Health Care":
          return "mdi-medical-bag";
        case "Restaurant":
          return "mdi-food";
        default:
          return "mdi-help";
      }
    }
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      this.geocoder = new google.maps.Geocoder();
      this.geocoder.geocode({ address: this.response.match }, function (result, status) {
        if (status == 'OK') {
          this.coordinates = {lat: (result[0].geometry.bounds.ma.j + result[0].geometry.bounds.ma.l) / 2.0,
          lng: (result[0].geometry.bounds.ga.j + result[0].geometry.bounds.ga.l) / 2.0}
          this.center = this.coordinates;
        }
      });
    },
    // Move the center of the map
    centerMapAt(coords) {
      this.center = coords;
    },
    // Set map zoom
    setMapZoom(zoom) {
      this.map.setZoom(zoom);
    },
    // Degug fxn
    LogToConsole(value) {
      if (_DEBUG_) {
        console.log(value);
      }
    }
  },
  mounted: function() {
    this.geolocate();
    this.addMarker();
  }
};
</script>
