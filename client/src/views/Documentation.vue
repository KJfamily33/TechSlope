<template>
  <div id="docs">
    <div class="homeGradient" style="margin-top: -64px;">
      <v-container style="padding-top: 2.8em;">
    </v-container>
  </div>
  <v-container>
    <v-layout>
    </v-layout>
  </v-container>
  <v-navigation-drawer clipped absolute width="260">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            API Documentation
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>

export default {
  name: "Docs",
  components: {

  },
  data () {
    return {
      items: [
          { title: 'Overview', icon: 'mdi-file-document-box-outline' },
          { title: 'Authentication', icon: 'mdi-lock' },
          { title: '/Usage', icon: 'mdi-office-building' },
          { title: '/Zoning', icon: 'mdi-select-inverse' },
          { title: 'Snippets', icon: 'mdi-code-braces' },
          { title: 'Errors', icon: 'mdi-exclamation' },
        ],
    }
  }
}
</script>
