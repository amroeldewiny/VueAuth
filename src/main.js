import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyCqfZKDIMxNk2kFTElo-aMJyQy5l7sk_zw",
  authDomain: "perfumes-16b68.firebaseapp.com",
  databaseURL: "https://perfumes-16b68.firebaseio.com",
  projectId: "perfumes-16b68",
  storageBucket: "perfumes-16b68.appspot.com",
  messagingSenderId: "424413750611"
};
firebase.initializeApp(config);

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount("#app");


