<template>
	<spinner v-if="loading"></spinner>
	<div class="container-fluid" v-else>
		<div class="col-12 container-fluid">
			<button type="button" class="btn btn-dark text-uppercase" onClick="history.back()">Regresar</button>
		</div>
		<div class="row">
			<div class="col-md-5 col-sm-12 mb-3 mt-2">
				<div v-for="(ran, index) in rankings" 
				v-if="ran.id == miIdentificador" 
				class="text-center mb-3">
				<div class="card">
					<div class="card-body contenedor">
						<h2 class="text-center text-white">{{ ran.name }}</h2>
						<div class="imagen">
							<img class="rounded-circle" :src="`/imagenes/usuario/${ran.avatar}`">
						</div>
					</div>
					<div class="card-footer pt-5">
						<div class="row">
							<div class="col-6 border-right">
								<div class="description-block">
									<h5 class="description-header">
										# {{ index+1 }}
									</h5>
									<span class="description-text">Ranking</span>
								</div>
							</div>
							<div class="col-6">
								<div class="description-block">
									<h5 class="description-header">{{ ran.puntos }}</h5>
									<span class="description-text">Puntos</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-7 col-12 mt-2">
			<div class="card">
				<h3 class="text-center pt-4">Los mejores 10</h3>
				<div class="card-body">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>nombre</th>
								<th>curso</th>
								<th>Puntos</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(ran, index) in rankings" v-if="index < 10">
								<td>{{ index+1 }}</td>
								<td><img :src="`/imagenes/usuario/${ran.avatar}`" width="50" height="50" class="img-responsive rounded-circle"> {{ ran.name }}</td>
								<td>{{ ran.curso }}</td>
								<td>{{ ran.puntos }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		created(){
			this.mostrarPuntuaciones()
			this.mostrarMiPosicion()
		},
		data() {
			return {
				rankings:[],
				miIdentificador:null,
				loading:true,
			}
		},
		methods:{
			mostrarPuntuaciones(){
				axios.get("/ranking").then(res =>{
					this.rankings = res.data
					this.loading = false
				})
			},
			mostrarMiPosicion(){
				axios.get("/miID").then(res =>{
					this.miIdentificador = res.data
					this.loading = false
				})
			},
		}
	}
</script>
<style>
.contenedor{
	background-color: #2B6A88;
	height: 120px;
	width: 100%;
	z-index: 100;
}
.contenedor .imagen{
	left: 50%;
}
.contenedor .imagen img{
	height:100px; 
	width:100px;
	border: 3px solid #fff;
}
</style>