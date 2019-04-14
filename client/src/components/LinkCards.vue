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
        :style="{ color: card.theme }" class="mr-1"
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
    cards: [{title: "Explore Our API", icon: "Database", link: "about", theme: "#114fa5", content: "Our API can return valuable data in making investment desicision. Check out the about page to see exactly where we compile our data from."},
    {title: "Documentation", icon: "book", link: "docs", theme: "#12a365", content: "Our docmentation strives to be easy to understand with live examples, and several language options. Integrate PropertyUsage into your application today!"},
    {title: "Support", icon: "help", link: "support", theme: "#e1781c", content: "Need help with using PropertyUsage or an indepth analysis on a property? We offer 24/7 email support, with replies in less than 24 hours."}]
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
