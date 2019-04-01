<template>
    <v-flex xs12>
        <v-card max-width="400" class="mx-auto">
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
                    <v-list-tile-content>
                      <div class="google-map elevation-6" id="mapName">
                        {{ this.map }}
                      </div>
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
    mapName: this.name + "-map",
    coordinates: {},
    markerCoordinates: [{
      latitude: 51.501527,
      longitude: -0.1921837
    }, {
      latitude: 51.505874,
      longitude: -0.1838486
    }, {
      latitude: 51.4998973,
      longitude: -0.202432
    }],
    map: null,
    bounds: null,
    markers: [],
    geocoder: new google.maps.Geocoder(),
    styleEZ: {
        fillColor: 'rgba(0,0,255,0.25)',
        fillOpacity: 1.0,
        strokeColor: 'darkgrey',
        strokeOpacity: 1.0,
        strokeWeight: 1,
        visible: true
      },
    styleEZOZ: {
        fillColor: 'rgb(214, 194, 118)',
        fillOpacity: 0.62,
        strokeColor: 'darkgrey',
        strokeOpacity: 1.0,
        strokeWeight: 1,
        visible: true
      },
    styleOZ: {
        fillColor: 'rgba(255,215,0,0.5)',
        fillOpacity: 1.0,
        strokeColor: 'darkslategrey',
        strokeOpacity: 1.0,
        strokeWeight: 1,
        visible: true
      }
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
    createMarker(map, coords) {
      centerMapAt(map, coords);
      setMapZoom(map, 13);

      return new google.maps.Marker({
        position: coords,
        map: map
      });
    },

    // Move the center of the map
    centerMapAt(map, coords) {
      this.map.setCenter(coords);
    },

    // Set map zoom
    setMapZoom(map, zoom) {
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
    // Use Google Geocoder API to translate
    // an address to GPS coordinates
    const mapHtmlElement = document.getElementById(this.mapName)

    this.geocoder.geocode({ address: this.response.match }, function (array, status) {
      if (status === 'OK') {
        this.coordinates = array[0].geometry.location;
        this.coordinates.lat = (array[0].geometry.bounds.ma.j + array[0].geometry.bounds.ma.l) / 2.0;
        this.coordinates.lng = (array[0].geometry.bounds.ga.j + array[0].geometry.bounds.ga.l) / 2.0;
        console.log(this.coordinates);
        if (this.map) {
          if (this.coordinates) {
            this.markers.Add(this.createMarker(map, coordinates));
          }
        }
        else {
          this.map = new google.maps.Map(mapHtmlElement, {
            zoom: 7,
            center: this.coordinates,
            gestureHandling: 'cooperative'
          });

          // Create Data Layer for EZs
          var dataLayerEZ = new google.maps.Data({ map: this.map, style: this.styleEZ });

          // Create Data Layer for OZs
          var dataLayerOZ = new google.maps.Data({ map: this.map, style: this.styleOZ });

          // 1st) Add Enterprise Zone (EZ) data to visible layer
          dataLayerEZ.loadGeoJson('https://data.colorado.gov/api/geospatial/k6js-8yuk?method=export&format=GeoJSON', null, function () {

            // 2nd) Add Opportunity Zone (OZ) data to visible layer
            //dataLayerOZ.loadGeoJson('https://gocodecolorado.github.io/BusinessIncentives/certoppzones.geojson', null, function () {

              // 3rd) Add Legend to map
              // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(element("#legend")[0]);

              if (this.coordinates) {
                this.markers.Add(this.createMarker(this.map, this.coordinates));
              }
            //});
          });
        }
      }
    });
  }
};
</script>
