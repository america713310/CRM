import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency-filter'
import localizeFilter from '@/filters/localize.filter'
import messagePlugin from '@/utils/message.plagin'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'
import tooltipDirective from '@/directives/tooltip.directive'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.directive('tooltip', tooltipDirective)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBVVpFMkr-zSyNy0no7CVoWjWhp-2SmbgA",
  authDomain: "dauren-vue-crm.firebaseapp.com",
  databaseURL: "https://dauren-vue-crm.firebaseio.com",
  projectId: "dauren-vue-crm",
  storageBucket: "dauren-vue-crm.appspot.com",
  messagingSenderId: "949507783603",
  appId: "1:949507783603:web:54629dffdc2b0fd929a9c6"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


