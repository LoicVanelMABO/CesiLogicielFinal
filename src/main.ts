import './assets/main.css'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap';


import Vue from 'vue';
//https://techsolutionstuff.com/post/how-to-use-sweet-alert-in-vue-js
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Axios
import axioss from 'axios';

//for dataTable
// import jszip from 'jszip';
import 'jszip';
import 'pdfmake';
// import pdfmake from 'pdfmake';
import DataTable from 'datatables.net-bs4';
import 'datatables.net-bs4';
import 'datatables.net-buttons-bs4';
//import 'datatables.net-buttons/css/buttons.bootstrap4.min.css';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';






import { createApp } from 'vue'
import { createPinia } from 'pinia'

//import App from './App3.vue'
import App from './App2.vue'
import router from './router'



//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';
const vuetify = createVuetify({
    components,
    directives,
})

//les icones
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

// Vue.component('font-awesome-icon', FontAwesomeIcon);



library.add(faSearch)


const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)

//pour le paiement en ligne avec stripe
// import { StripeCheckout } from '@vue-stripe/vue-stripe';

// const stripePromise = loadStripe('pk_test_51NQ8OQKp680irPickh4GL1EBzKXkJCJyEZ7RMxEVju8N9q96gxImZrtThZJVv8x4CwyZDFwRKYn905MK6jOSKryG004ln2cpg8');

// app.config.globalProperties.$stripe = stripePromise;

//pour les toast notif
import VueToastify from 'vue-toastify';
import {toast} from 'vue-toastify';
app.use(VueToastify);





// app.use(axioss)
app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)
app.use(vuetify)

app.mount('#app')
