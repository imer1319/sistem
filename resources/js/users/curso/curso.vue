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
			<h3 class="text-center">Curso</h3>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-6 col-lg-4 mb-3" v-for="(curso, index) in cursos" :key="index">
						<div class="card" :id="[(curso.numero == usuario.avance_curso)  ? 'div1':'']">
							<div class="card-body">
								<div class="row">
									<div class="col-4 text-center">
										<div id="circulo">
											<b class="text-white">{{ curso.numero }}</b>
										</div>
									</div>
									<div class="col-8">
										<div class="text-right">
											<h5 class="text-danger"><b>{{ curso.nombre }}</b></h5>
										</div>
									</div>
								</div>
								<div class="card border-primary">
									<div class="card-body pb-0">
										<div class="row">
											<div class="col-6 text-center">
												<h4 class="text-center text-danger">
													<b>{{ curso.requiere }} pts</b>
												</h4>
												<p>Requiere</p>
											</div>
											<div class="col-6 text-center" v-if="curso.aumento">
												<h4 class="text-warning">
													<b v-if="usuario.avance_curso <= curso.numero">
														{{ curso.aumento }}
													</b>
													<b v-else>Obtenido</b>
												</h4>
												<p>Aumento</p>
											</div>
										</div>
									</div>
								</div>
								<span class="p-0">
									<span>
										<router-link :to="curso.url" class="btn btn-block btn-primary text-white"
										:class="[(curso.numero <= usuario.avance_curso) && (curso.requiere <=usuario.puntos) ? 'actividad':'disabled']">
										<span v-if="curso.numero < usuario.avance_curso">Completado</span>
										<span v-else-if="curso.numero == usuario.avance_curso">Empezar</span>
										<span v-if="curso.numero > usuario.avance_curso">Bloqueado</span>
									</router-link>
								</span>
							</span>
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
		},
		mounted:function(){
			this.bajar_posicion()
		},
		data(){
			return{
				usuario:{},
				loading:true,
				cursos:[
				{numero: 1,nombre:'Examen',url:'exam/1', aumento:'+50', requiere: 10},
				{numero: 2,nombre:'Schulte',url:'/shulte-curso', requiere: 20},
				{numero: 3,nombre:'Schulte',url:'/shulte-curso', requiere: 20},
				{numero: 4,nombre:'Schulte letra',url:'/shultele-curso', requiere: 20},
				{numero: 5,nombre:'Schulte letra',url:'/shultele-curso', requiere: 20},
				{numero: 6,nombre:'Buscar numeros',url:'/search-course-numbers',aumento:'+125', requiere: 500},
				{numero: 7,nombre:'Buscar numeros',url:'/search-course-numbers',aumento:'+125', requiere: 500},
				{numero: 8,nombre:'Buscar palabras',url:'/search-words-course', aumento :'+135', requiere: 500},
				{numero: 9,nombre:'Buscar palabras',url:'/search-words-course', aumento :'+135', requiere: 500},
				{numero: 10,nombre:'Recordar numero',url:'/remember-numbers',aumento:'+100', requiere: 500},
				{numero: 11,nombre:'Recordar palabra',url:'/remember-words',aumento:'+150', requiere: 500},
				{numero: 12,nombre:'Examen',url:'exam/2',aumento:'+200', requiere: 2000},
				{numero: 13,nombre:'Schulte',url:'/shulte-curso', requiere: 2000},
				{numero: 14,nombre:'Schulte',url:'/shulte-curso', requiere: 2000},
				{numero: 15,nombre:'Schulte letra',url:'/shultele-curso', requiere:3000},
				{numero: 16,nombre:'Schulte letra',url:'/shultele-curso',requiere:3000},
				{numero: 17,nombre:'Buscar numeros',url:'/search-course-numbers',aumento:'+125', requiere:3000},
				{numero: 18,nombre:'Buscar numeros',url:'/search-course-numbers',aumento:'+125', requiere:3000},
				{numero: 19,nombre:'Buscar palabras',url:'/search-words-course', aumento :'+135', requiere:3000},
				{numero: 20,nombre:'Buscar palabras',url:'/search-words-course', aumento :'+135', requiere:3000},
				{numero: 21,nombre:'Recordar numero',url:'/remember-numbers',aumento:'+100', requiere:3000},
				{numero: 22,nombre:'Recordar numero',url:'/remember-numbers',aumento:'+100', requiere:3000},
				{numero: 23,nombre:'Recordar palabra',url:'/remember-words',aumento:'+150', requiere:3000},
				{numero: 24,nombre:'Recordar palabra',url:'/remember-words',aumento:'+150', requiere:3000},
				{numero: 25,nombre:'Examen',url:'exam/3',aumento:'+400', requiere:3000},
				{numero: 26,nombre:'Par impar',url:'/odd-even',aumento:'+500', requiere:4500},
				{numero: 27,nombre:'Campo visual',url:'/visual-field',aumento:'+550', requiere:5800},
				{numero: 28,nombre:'Examen Final',url:'exam/4',aumento:'+700', requiere:6500},
				],
				mensaje_boton:'',
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
			bajar_posicion(){
				var contador = 0
				setTimeout(function(){
					$('html,body').animate({
						scrollTop: $("#div1").offset().top
					}, 1500);
				},1000);
			}
		},
	}
</script>
<style>
.actividad{
	cursor: hand;
}
#progreso_1, #progreso_2{
	width: 0%;
}
#circulo{
	background: #FFBC5B;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	line-height: 40px;
	text-align: center;
}
</style>