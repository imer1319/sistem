<template>
	<div class="row">
		<spinner v-if="loading"></spinner>
		<div class="col-12" v-else>
			<div class="card card-primary card-outline">
				<div class="card-body box-profile">
					<h3 class="profile-username text-center">{{ examen.name }}</h3>
					<hr>
					<p class="text-justify">{{ examen.content }}</p>
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
				})
			},
		}
	}
</script>
<style>
.profile-user-img {
	height: 100px;
}
</style>
