

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
Vue.component('create-pregunta', require('./components/examens/createPreguntaComponent.vue').default);
Vue.component('pregunta', require('./components/examens/preguntaComponent.vue').default);
Vue.component('respuesta', require('./components/examens/respuestaComponent.vue').default);
Vue.component('show-examen', require('./components/examens/showExamenComponent.vue').default);
const app = new Vue({
    el: '#app',
});
