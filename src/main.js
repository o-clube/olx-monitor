import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faChartBar, faLink, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone);
library.add(faChartBar);
library.add(faLink);
library.add(faInfoCircle);

createApp(App)
    .use(router)
    .mount('#app')
