import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'vuesax/dist/vuesax.css' //Vuesax styles



Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'rgb(5, 173, 88)',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  }
})

console.log(process.env.VUE_APP_API_KEY)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_API_KEY,
    libraries: 'places',
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
