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
			<h5 class="text-center">Puntuaciones de examen</h5>
			<div v-for="(examen_dado,index) in puntuaciones">
				<div class="card col-12 col-md-8 mx-auto mb-2 shadow">
					<div class="card-body">
						<h4 class="text-center text-danger">{{ examen_dado.name }}</h4>
						<div class="row">
							<h5 class="col-8 col-md-6 text-success"><i class="fab fa-accessible-icon"></i> PPM</h5>
							<h5 class="col-4 col-md-6">{{ examen_dado.pivot.ppm }}</h5>
							<hr>
							<h5 class="col-8 col-md-6 text-info"><i class="fas fa-brain"></i> Comprension</h5>
							<h5 class="col-4 col-md-6">{{ examen_dado.pivot.comprension }}<b class="h5"> %</b></h5>
							<hr>
							<h5 class="col-8 col-md-6 text-warning"><i class="far fa-clock"></i> Tiempo</h5>
							<h5 class="col-4 col-md-6">{{ examen_dado.pivot.tiempo }}<b class="h5"> s</b></h5>
							<hr>
							<h5 class="col-8 col-md-6 text-gray-dark"><i class="far fa-sun"></i> Fecha</h5>
							<h5 class="col-4 col-md-6">{{ obtenerFecha(examen_dado.pivot.created_at) }}</h5>
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
				usuario:{}
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