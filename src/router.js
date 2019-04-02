import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import VueRouter from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "*",
      redirect: '/'
    },
    {
      path: "/",
      name: "Signin",
      component: () =>
        import ("./views/Signin.vue")
    },
    {
      path: "/signup",
      name: "Signup",
      component: () =>
        import("./views/Signup.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => 
        import("./views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
