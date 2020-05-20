<template>
	<div>
		<spinner v-if="loading"></spinner>
		<div v-else>
			<nav class="navbar navbar-expand-md navbar-dark bg-primary">
				<div class="container">
					<a class="navbar-brand text-white">Lectura Veloz</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item px-md-3">
								<h5 class="mb-0">
									<a class="nav-link text-warning">{{ usuario.puntos }} Pts.</a>
								</h5>
							</li>
							<li class="nav-item">
								<img :src="`/imagenes/usuario/${usuario.avatar}`" class="rounded-circle pb-0" height="40" width="40">
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									{{usuario.name}}
								</a>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
									<router-link class="dropdown-item" to="/profile">
										Mi perfil
									</router-link>
									<a class="dropdown-item" href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Cerrar Sesión
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div class="col-12 container-fluid">
				<router-link class="btn btn-dark text-uppercase" to="/home">
					Regresar
				</router-link>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-5 col-sm-12 mb-3 mt-2">
						<div v-for="(ran, index) in rankings" 
						v-if="ran.id == usuario.id" 
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
											<h5 class="description-header text-warning">
												<b># {{ index+1 }}</b>
											</h5>
											<h5 class="description-text text-muted"><b>Ranking</b></h5>
										</div>
									</div>
									<div class="col-6">
										<div class="description-block">
											<h5 class="description-header text-warning">
												<b>{{ ran.puntos }}</b>
											</h5>
											<h5 class="description-text text-muted">
												<b>Puntos</b>
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-7 col-12 mt-2">
					<div class="card">
						<h3 class="text-center pt-4 text-danger">Los mejores 10</h3>
						<div class="card-body">
							<table class="table table-hover text-center">
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
										<td>
											<span v-if="ran.puntos <100">
												<img :src="rangos.rango1" height="50" width="50">
											</span>
											<span v-if="usuario.puntos >= 100 && usuario.puntos <500">
												<img :src="rangos.rango2" height="50" width="50">
											</span>
											<span v-if="usuario.puntos >= 500 && usuario.puntos <1000">
												<img :src="rangos.rango3" height="50" width="50">
											</span>
											<span v-if="usuario.puntos >= 1000 && usuario.puntos < 5000">
												<img :src="rangos.rango4" height="50" width="50">
											</span>
											<span v-if="usuario.puntos >= 5000 && usuario.puntos < 10000">
												<img :src="rangos.rango5" height="50" width="50">
											</span>
											<span v-if="usuario.puntos >=10000">
												<img :src="rangos.rango6" height="50" width="50">
											</span>
										</td>
										<td>{{ ran.puntos }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		created(){
			this.showUser()
			this.mostrarPuntuaciones()
		},
		data() {
			return {
				rankings:[],
				loading:true,
				usuario:{},
				rango_usuario:{},
				rangos:{
					rango1: '/imagenes/rangos/1-bronce.png',
					rango2: '/imagenes/rangos/2-plata.png',
					rango3: '/imagenes/rangos/3-oro.png',
					rango4: '/imagenes/rangos/4-platino.png',
					rango5: '/imagenes/rangos/5-diamante.png',
					rango6: '/imagenes/rangos/6-final.png',
				}
			}
		},
		methods:{
			showUser(){
				var url ="/profile"
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false
				})
			},
			mostrarPuntuaciones(){
				axios.get("/ranking").then(res =>{
					this.rankings = res.data
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