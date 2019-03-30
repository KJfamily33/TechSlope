<template>
  <v-container>
    <v-layout
    text-xs-center
    wrap
    class="white--text"
    >
    <v-flex md12 lg4 mb-4 px-4 v-for="(card, index) in cards" :key="index">
      <v-card
      light
      :style="{ borderLeft: '5px solid' + card.theme }"
      >
      <v-card-title :href="card.link">
        <v-icon
        :style="{ color: card.theme }"
        >
        mdi-{{ card.icon }}
      </v-icon>
      <span class="title font-weight-light" :style="{ color: card.theme }">{{ card.title }}</span>
      <v-icon
      left
      :style="{ color: card.theme }"
      >
      mdi-arrow-right
    </v-icon>
  </v-card-title>

  <v-card-text>
    {{ card.content }}
  </v-card-text>
</v-card>
</v-flex>
</v-layout>
</v-container>
</template>

<script>

export default {
  name: "linkCards",
  data: () => ({
    cards: [{title: "Explore Our API", icon: "API", link: "about", theme: "#114fa5", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "Documentation", icon: "book", link: "docs", theme: "#12a365", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {title: "Support", icon: "help", link: "support", theme: "#e1781c", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]
  }),
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
  }
}
</script>

<style>

</style>
