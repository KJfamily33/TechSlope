import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import APIs from "./views/APIs.vue";
import Documentation from "./views/Documentation.vue";
import Pricing from "./views/Pricing.vue";
import About from "./views/About.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/apis",
      name: "apis",
      component: APIs
    },
    {
      path: "/documentation",
      alias: "/docs",
      name: "documentation",
      component: Documentation
    },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
