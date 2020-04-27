import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueToast);

Vue.use(VModal, { dialog: true })

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
