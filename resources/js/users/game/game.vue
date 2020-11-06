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
			<div class="container-fluid">
				<router-link class="btn btn-dark text-uppercase" to="/home">
					Regresar
				</router-link>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-6 col-md-4 col-lg-3 my-3"
					v-for="(game, index) in games" :key="index">
					<router-link :to="game.url">
						<div class="card">
							<div class="card-body p-0">
								<img class="card-img-top img-responsive" :src="`/imagenes/ejercicios/${game.icon}`"width="100%" height="180">
								<div class="text-center text-uppercase pb-2">
									<span class="font-weight-bold text-center">
										{{ game.name }}
									</span>
								</div>
							</div>
						</div>
					</router-link>
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
		},
		data() {
			return {
				usuario:{},
				loading:true,
				games: [
				{name:'schulte numeros',icon:'schulte-numeros.png',url:'/schult',min:0,max:100,background:'color8'},
				{name:'schulte letras',icon:'schulte-letras.png',url:'/schult-letra',min:100,max:500,background:'color8'},
				{name:'buscar palabras',icon:'buscar-palabras.png',url:'/buscar-palabra',min:500,max:1000,background:'color8'},
				{name:'buscar numeros',icon:'buscar-numeros.png',url:'/buscar-numero',min:1000,max:5000,background:'color8'},
				{name:'recordar palabra',icon:'recordar-palabra.png',url:'/encuentra-palabra',min:5000,max:10000,background:'color8'},
				{name:'recordar numeros',icon:'recordar-numero.png',url:'/encuentra-numeros',min:10000,max:10000,background:'color8'},
				{name:'Par o Impar',icon:'par - impar.png',url:'/par-impar',min:10000,max:10000,background:'color8'},
				{name:'Iguales',icon:'campo-visual.png',url:'/iguales',min:10000,max:10000,background:'color8'},
				],
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
		}
	}
</script>
<style>
.color7{
	background: #0078A7;
	color: white;
	text-transform: uppercase;
	font-weight: 800;
	font-size: 12px;
	text-align: center;
}
</style>