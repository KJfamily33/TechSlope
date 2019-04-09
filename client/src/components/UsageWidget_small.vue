<template>
  <v-container>
    <v-flex xs12>
      <v-card width="80%" class="mx-auto">
        <div id="neighborhood-map-content">
          <v-card v-bind:width="widgetDimensions.width" v-bind:height="widgetDimensions.height" class="mx-auto">
            <div id="card-wrapper">
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
                  {{ (widgetSize=='Tiny'?'':response.usages[0].name + ": ") + response.usages[0].score*100 }}
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
              <div v-if="showMap">
                <gmap-map :center="center" :zoom="18" ref="mapRef" :style="'width:100%;height:'+(showMap?this.widgetDimensions.height-188:0)+'px'">
                  <gmap-marker ref="'marker' + index" :key="index" v-for="(m, index) in markers"
                  :position="m.position" @click="center=m.position" ></gmap-marker>
                  <gmap-polygon :paths="paths" :editable="true" @paths_changed="updateEdited($event)">
                  </gmap-polygon>
                </gmap-map>
              </div>
            </div>
          </v-card>
          <v-container>
            <h3>Customize The Widget</h3>
            <v-form name="tile-form" id="tile-form" onsubmit="return false">
              <v-container>
                <v-layout row wrap>
                  <v-flex>
                    <v-toolbar>
                      <v-text-field label="Address:" clearable full-width v-model="response.match"></v-text-field>
                      <v-divider class="mr-3" vertical></v-divider>
                      <v-btn v-on:click="showMap=!showMap">{{showMap ? 'Hide' : 'Show'}} Map</v-btn>
                    </v-toolbar>
                    <v-toolbar>
                      <v-btn-toggle v-model="widgetFormat" mandatory><v-btn flat v-for="n in widgetFormats" v-on:click="setWidgetFormat(n)" :value="n">{{n}}</v-btn></v-btn-toggle>
                      <v-divider class="mr-3" vertical></v-divider>
                      <v-btn-toggle v-model="widgetSize" mandatory><v-btn flat v-for="n in widgetSizes" v-on:click="setWidgetSize(n)" :value="n">{{n}}</v-btn></v-btn-toggle>
                    </v-toolbar>
                    <v-toolbar v-show="widgetSize==='Custom'">
                      <v-text-field label="Width:" clearable v-model="widgetDimensions.width"></v-text-field>
                      <v-divider class="mr-3" vertical></v-divider>
                      <v-text-field label="Height:" clearable v-model="widgetDimensions.height"></v-text-field>
                    </v-toolbar>
                    <v-textarea outline disabled auto-grow label="Embeded code: Paste this code into your website to use our widget"
                    value="<div>COMING SOON!</div>">
                  </v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <br clear="all">
          <div id="next-steps-box">
            <div class="left-half">
              <h5>Next Steps</h5>
              <div class="small-bullets">
                <a class="sign-up-small" href="/login"></a>
                <div class="bullet-mail">
                  <div>
                  </div>
                  <a href="/professional/contact.php">Get more info</a>
                </div>
              </div>
            </div>
            <div class="right-half">
              <h5>Learn More</h5>
              <div class="small-bullets" style=" margin-left: 25px;">
                <div class="bulletless"><a href="../Documentation">Why usage Score?</a></div>
                <div class="bulletless"><a href="../pricing">Features &amp; Pricing</a></div>
                <div class="bulletless"><a href="">See usage Score customers</a></div>
                <div class="bulletless"><a href="">For Real Estate Professionals</a></div>
              </div>
            </div>
            <br class="clear-all">
          </div>
        </v-container>
      </div>
    </v-card>
  </v-flex>
</v-container>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js"></script>
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
      geojson: null,
      geocoder: null,
      paths: [],
      widgetDimensions: {width: 600, height: 400},
      showMap: true,
      widgetFormat: 'Square',
      widgetSize: 'Med',
      widgetFormats: ['Tall','Square','Wide'],
      widgetSizes: ['Large','Med','Small','Tiny','Custom']
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
    loadControls() {
      this.$refs.mapRef.$mapObject.data.setControls(['Polygon']);
    },
    displayGeoJson() {
      let results;
      this.$refs.mymap.$mapObject.data.toGeoJson((geojson) => {
        results = JSON.stringify(geojson, null, 2);
      });
      this.geojson = results;
    },
    updateEdited(mvcArray) {
      let paths = [];
      for (let i=0; i<mvcArray.getLength(); i++) {
        let path = [];
        for (let j=0; j<mvcArray.getAt(i).getLength(); j++) {
          let point = mvcArray.getAt(i).getAt(j);
          path.push({lat: point.lat(), lng: point.lng()});
        }
        paths.push(path);
      }
      this.edited = paths;
    },
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
          this.coordinates = {lat: result[0].geometry.location.lat(), lng: result[0].geometry.location.lng()}
          this.center = this.coordinates;
          this.bounds = result[0].geometry.bounds;
          console.log(this.bounds);
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
    setWidgetSize(size) {
      this.widgetSize = size;
      switch (size) {
        case 'Large': {
          this.widgetDimensions.width = 800;
          this.widgetDimensions.height = 600;
          this.setWidgetFormat(this.widgetFormat);
          break;
        }
        case 'Med': {
          this.widgetDimensions.width = 600;
          this.widgetDimensions.height = 450;
          this.setWidgetFormat(this.widgetFormat);
          break;
        }
        case 'Small': {
          this.widgetDimensions.width = 400;
          this.widgetDimensions.height = 300;
          this.setWidgetFormat(this.widgetFormat);
          break;
        }
        case 'Tiny': {
          this.widgetDimensions.width = 200;
          this.widgetDimensions.height = 150;
          this.setWidgetFormat(this.widgetFormat);
          break;
        }
      }
      console.log(this.widgetDimensions);
    },
    setWidgetFormat(format) {
      this.widgetFormat = format;
      switch (this.widgetFormat) {
        case 'Tall': {
          this.widgetDimensions = { width: Math.min(this.widgetDimensions.height, this.widgetDimensions.width),
            height: Math.min(this.widgetDimensions.height, this.widgetDimensions.width) * 4/3};
            break;
          }
          case 'Square': {
            this.widgetDimensions = { width: Math.min(this.widgetDimensions.height, this.widgetDimensions.width),
              height: Math.min(this.widgetDimensions.height, this.widgetDimensions.width) };
              break;
            }
            case 'Wide': {
              this.widgetDimensions = { width: Math.min(this.widgetDimensions.height, this.widgetDimensions.width) * 4/3,
                height: Math.min(this.widgetDimensions.height, this.widgetDimensions.width) };
                break;
              }
            }
            console.log(this.widgetFormat);
          },
          // Degug fxn
          LogToConsole(value) {
            console.log(value);
          }
        },
        mounted: function() {
          this.setWidgetSize(this.widgetSize);
          this.geolocate();
          this.addMarker();
        }
      };
      </script>
