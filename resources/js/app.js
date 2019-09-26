

require('./bootstrap');

window.Vue = require('vue');

Vue.component('spinner', require('./components/Spinner.vue').default);
Vue.component('examen', require('./components/ExamenComponent.vue').default);
Vue.component('insignia', require('./components/InsigniaComponent.vue').default);
Vue.component('ejercicios', require('./components/EjercicioComponent.vue').default);
Vue.component('create-categoria', require('./components/categorias/createComponent.vue').default);
Vue.component('categorias', require('./components/categorias/categoriasComponent.vue').default);
const app = new Vue({
    el: '#app',
});
