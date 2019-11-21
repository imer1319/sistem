<template>
	<div class="row">
		<div class="col-lg-6">
			<div class="card card-primary card-outline">
				<div class="card-body box-profile">
					<div class="text-center">
						<img class="profile-user-img img-fluid img-circle img-responsive"
						:src="`/imagenes/examen/${examen.icon}`"
						alt="User profile picture">
					</div>
					<h3 class="profile-username text-center">{{ examen.name }}</h3>
					<div class="btn btn-primary" @click.prevent="loadDoc()">Mostrar</div>
					<hr>
					<p id="test" class="text-justify"></p>
				</div>
			</div>
		</div>

		<div class="col-lg-12">
			<pregunta/>
			<createPregunta/>
		</div>
	</div>
</template>
<script>
	import EventBus from '../../event-bus';
	import pregunta from '../examens/preguntaComponent.vue';
	import createPregunta from '../examens/createPreguntaComponent.vue';
	export default{
		components:{
			createPregunta:createPregunta,
			pregunta:pregunta,
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
			loadDoc() {
				var url ="/examenes/"+this.examen.content;;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById("test").innerHTML = this.responseText;
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			},
		}
	}
</script>
