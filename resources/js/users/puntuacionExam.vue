<template>
    <div>
        <spinner v-if="loading"></spinner>
        <div v-else>
			<div class="container-fluid">
				<router-link class="btn btn-dark text-uppercase" to="/home">
					Regresar
				</router-link>
			</div>
			<h5 class="text-center">Puntuaciones de examen</h5>
			<div v-for="(examen,index) in puntuaciones">
				<div class="card col-12 col-md-8 mx-auto mb-2 shadow">
					<div class="card-body">
						<h4 class="text-center text-danger">{{ examen.name }}</h4>
						<div class="row">
							<h5 class="col-8 col-md-6 text-success"><i class="fab fa-accessible-icon"></i> PPM</h5>
							<h5 class="col-4 col-md-6">{{ examen.pivot.ppm }}</h5>
							<hr>
							<h5 class="col-8 col-md-6 text-info"><i class="fas fa-brain"></i> Comprension</h5>
							<h5 class="col-4 col-md-6">{{ examen.pivot.comprension }}<b class="h5"> %</b></h5>
							<hr>
							<h5 class="col-8 col-md-6 text-warning"><i class="far fa-clock"></i> Tiempo</h5>
							<h5 class="col-4 col-md-6">{{ examen.pivot.tiempo }}<b class="h5"> s</b></h5>
							<hr>
							<h5 class="col-8 col-md-6 text-gray-dark"><i class="far fa-sun"></i> Fecha</h5>
							<h5 class="col-4 col-md-6">{{ obtenerFecha(examen.pivot.created_at) }}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		created:function() {
			this.showUser()
			this.puntuacionExamen()
		},
		data(){
			return{
				puntuaciones:[],
				loading:true,
				usuario:{},
			}
		},
		methods:{
			obtenerFecha(fecha){
				return moment(fecha).fromNow()
			},
			puntuacionExamen(){
				var url = '/puntuacionExamen';
				axios.get(url).then(res =>{
					this.puntuaciones = res.data
				})
			},
			showUser(){
				var url ="/profile"
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false
				})
			},
		},
	}
</script>