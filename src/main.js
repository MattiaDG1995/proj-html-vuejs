import Vue from 'vue'
import App from './App.vue'
  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faUserSecret, faClock, faPhone, faEnvelope, faAngleDown, faLocationDot, faChevronRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
  /*Import icone regular */
  import {  } from '@fortawesome/free-regular-svg-icons'

  import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

  /* add icons to the library */
  library.add(faUserSecret, faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faAngleDown, faLocationDot, faChevronRight, faArrowUp)

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
