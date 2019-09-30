

require('./bootstrap');

window.Vue = require('vue');

Vue.component('spinner', require('./components/Spinner.vue').default);
Vue.component('ejercicios', require('./components/EjercicioComponent.vue').default);
Vue.component('create-categoria', require('./components/categorias/createCategoriaComponent.vue').default);
Vue.component('categorias', require('./components/categorias/categoriasComponent.vue').default);
Vue.component('create-insignia', require('./components/insignias/createInsigniaComponent.vue').default);
Vue.component('insignias', require('./components/insignias/insigniaComponent.vue').default);
Vue.component('create-examen', require('./components/examens/createExamenComponent.vue').default);
Vue.component('examen', require('./components/examens/examenComponent.vue').default);
const app = new Vue({
    el: '#app',
});
