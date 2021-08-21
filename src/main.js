// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase/app";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDolVlzfxQppJhWvdZTIpQZF0sa_Uzc44Q",
  authDomain: "vuexslack-3af5d.firebaseapp.com",
  projectId: "vuexslack-3af5d",
  storageBucket: "vuexslack-3af5d.appspot.com",
  messagingSenderId: "150364980979",
  appId: "1:150364980979:web:30231420abc88c272f1986"
};
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
