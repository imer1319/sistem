require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)
Vue.use(VueRouter);

Vue.component('App',require('./components/App.vue').default);
Vue.component('spinner', require('./components/Spinner.vue').default);


const router = new VueRouter({
	routes,
	mode:'history'
});

const app = new Vue({
	router,
}).$mount('#app')
