require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import VuePaginate from 'vue-paginate'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.use(VuePaginate)
Vue.use(VueRouter)

Vue.component('App',require('./components/App.vue').default);
Vue.component('spinner', require('./components/Spinner.vue').default);


const router = new VueRouter({
	routes,
	mode:'history'
});

const app = new Vue({
	router,
}).$mount('#app')
