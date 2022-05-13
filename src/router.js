import Vue from "vue";
import Router from "vue-router";
import main from "@/pages/main.vue";
import detail from "@/pages/detail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: main
    },

    {
      path: "/device",
      name: "device",
      component: detail,
      props: (route) => ({ id: route.query.id })
    }
  ]
});
