<template>
	<div class="row">
		<div class="col-md-3">
			<h2>titulo : {{ examen.name }}</h2>
			<h2>contenido : {{ examen.content }}</h2>
			<h2>
				Imagen :  <figure><img :src="`/imagenes/examen/${examen.icon}`" class="img-responsive" height="40" width="40"></figure>
			</h2>
		</div>

		<div class="col-md-5">
			<respuesta/>
			<createRespuesta/>
		</div>

		<div class="col-md-4">
			<pregunta/>
			<createPregunta/>
		</div>
	</div>
</template>
<script>
	import EventBus from '../../event-bus';
	import respuesta from '../examens/respuestaComponent.vue';
	import createRespuesta from '../examens/createRespuesta.vue';
	import pregunta from '../examens/preguntaComponent.vue';
	import createPregunta from '../examens/createPreguntaComponent.vue';
	export default{
		components:{
			createPregunta:createPregunta,
			pregunta:pregunta,
			createRespuesta:createRespuesta,
			respuesta:respuesta,
		},
		created:function() {
			this.showExamen();
		},
		data(){
			return{
				examen :{},
			}
		},
		methods:{
			showExamen(){
				var url = this.$route.params.id;
				axios.get(url).then(res =>{
					this.examen = res.data
				})
			},
		}
	}
</script>
