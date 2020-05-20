<template>
	<div class="row">
		<spinner v-if="loading"></spinner>
		<div class="col-12" v-else>
			<div class="card card-primary card-outline">
				<div class="card-body box-profile">
					<div class="text-center">
						<img class="profile-user-img img-fluid img-circle img-responsive"
						:src="`/imagenes/examen/${examen.icon}`">
					</div>
					<h3 class="profile-username text-center">{{ examen.name }}</h3>
					<hr>
					<p id="test" class="text-justify"></p>
				</div>
			</div>

			<div class="col-12">
				<pregunta/>
			</div>
			
		</div>
	</div>
</template>
<script>
	import EventBus from '../../event-bus';
	import pregunta from '../examens/preguntaComponent.vue';
	export default{
		components:{
			pregunta:pregunta,
		},
		created() {
			this.showExamen();
		},
		data(){
			return{
				examen :{},
				loading:true,
				palabras:'',
			}
		},
		methods:{
			showExamen(){
				var url = this.$route.params.id;
				axios.get(url).then(res =>{
					this.examen = res.data
					this.loading = false;
					this.loadDoc();
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
			contarPalabras(){
				var textArea = document.getElementById("test").value;
				this.palabras = textArea.match(/[^\s]+/g).length;
			}
		}
	}
</script>
<style>
.profile-user-img {
	height: 100px;
}
</style>
