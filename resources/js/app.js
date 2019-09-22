

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('examen', require('./components/ExamenComponent.vue').default);
Vue.component('insignia', require('./components/InsigniaComponent.vue').default);
const app = new Vue({
    el: '#app',
});
