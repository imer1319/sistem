require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import VuePaginate from 'vue-paginate'
import VueSweetalert2 from 'vue-sweetalert2';

import auth from './mixins/auth';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.use(VuePaginate)
Vue.use(VueRouter)
Vue.mixin(auth);

Vue.component('preguntas-list', require('./admin/preguntas/PreguntasList').default);
Vue.component('preguntas-create', require('./admin/preguntas/PreguntasCreate').default);
Vue.component('preguntas-edit', require('./admin/preguntas/PreguntasEdit').default);

Vue.component('spinner', require('./utils/Spiner').default);
Vue.component('nav-bar', require('./users/NavBar.vue').default);


const router = new VueRouter({
    routes,
    mode: 'history'
});

const app = new Vue({
    router,
}).$mount('#app')