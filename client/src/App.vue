<template>
<v-app>
<v-toolbar app color=transparent dark flat class="elevation-0">
<v-toolbar-title class="text-uppercase">
<span>Property</span>
<span class="font-weight-light">Usage</span>
</v-toolbar-title>
<v-spacer></v-spacer>
<router-link to="about"><v-btn flat >APIs</v-btn></router-link>
<router-link to="about"><v-btn flat >Documentation</v-btn></router-link>
<router-link to="about"><v-btn flat >Pricing</v-btn></router-link>
<router-link to="about"><v-btn flat >About</v-btn></router-link>
<v-spacer></v-spacer>
<v-btn outline
href="https://github.com/GoCodeColorado/TechSlope"
target="_blank"
>
<v-icon>mdi-lock-outline</v-icon>
<span class="text-uppercase mr-2">Login</span>
</v-btn>
</v-toolbar>

<v-content class="homeGradient">
<router-view/>
</v-content>
</v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: none;
}

.v-btn {
  font-weight: 300;
  text-transform: none;
}

.homeGradient {
  background: rgb(4,41,76); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgba(4,41,76,1) 0%, rgba(0,35,91,1) 23%, rgba(8,38,119,1) 29%, rgba(7,48,130,1) 36%, rgba(9,78,142,1) 66%, rgba(0,73,142,1) 69%, rgba(33,88,140,1) 84%, rgba(22,84,142,1) 86%, rgba(6,78,147,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(4,41,76,1) 0%,rgba(0,35,91,1) 23%,rgba(8,38,119,1) 29%,rgba(7,48,130,1) 36%,rgba(9,78,142,1) 66%,rgba(0,73,142,1) 69%,rgba(33,88,140,1) 84%,rgba(22,84,142,1) 86%,rgba(6,78,147,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(4,41,76,1) 0%,rgba(0,35,91,1) 23%,rgba(8,38,119,1) 29%,rgba(7,48,130,1) 36%,rgba(9,78,142,1) 66%,rgba(0,73,142,1) 69%,rgba(33,88,140,1) 84%,rgba(22,84,142,1) 86%,rgba(6,78,147,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#04294c', endColorstr='#064e93',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>
