<template>
	<div>
		<spinner v-if="loading"></spinner>
		<div v-else>
			<div class="container-fluid">
				<router-link class="btn btn-dark text-uppercase" to="/home">Regresar</router-link>
				<div class="btn btn-warning ocultar" @click.prevent="mostrarSidebar()">
					<i class="far fa-arrow-alt-circle-left"></i>
				</div>
			</div>
			<div class="d-flex" id="wrapper">
				<div id="sidebar-wrapper">
					<div class="nav flex-column nav-pills list-group" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
							¿Qué es la lectura veloz?
						</a>
						<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
							Beneficios de la lectura
						</a>
						<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
							¿Como aumentar la velocidad?
						</a>
						<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
							Consejos para el sistema
						</a>
					</div>
				</div>
				<div id="page-content-wrapper">
					<div class="tab-content" id="v-pills-tabContent">
						<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
							<div class="container">
								<h3 class="text-center">Que es la Lectura Veloz</h3> 
								<p class="lead text-justify">Es una técnica de gimnasia mental que permite comprender más rápidamente los textos y mensajes escritos, y a su vez ayuda a incrementar nuestro campo intelectual.
								</p>
								<p class="lead text-justify">Las estrategias de lectura veloz no sólo permiten acelerar el trabajo de lectura, sino que a la vez facilitan el proceso de comprensión e incorporación inmediata de los conocimientos. Por lo tanto, mediante la lectura veloz podemos aprender a leer más rápido pero también comprender mejor lo que estamos leyendo.
								</p>
								<p class="lead text-justify">La lectura veloz es una técnica y para alcanzar sus objetivos se requiere de mucha práctica y de un entrenamiento sistemático. Las rutinas de trabajo deben establecerse en base a los objetivos específicos de cada persona. Generalmente los objetivos suelen ser: incrementar la velocidad lectora, incrementar la capacidad de comprensión o aumentar la capacidad de concentración al leer.		
								</p>
								<div class="text-center">
									<img src="imagenes/lecciones/que es.png" alt="imagen" width="300">
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
							<h3 class="text-center">Beneficios de la Lectura</h3> 
							<p class="lead">
								La lectura ofrece innumerables beneficios, entre ellos:<br>
								<b>+</b> Agudiza la astucia.<br>
								<b>+</b> Estimula el intercambio de información y conocimiento.<br>
								<b>+</b> La costumbre continuada de leer, retarda la aparición de los síntomas de demencia.<br>
								<b>+</b> Estimula la percepción.<br>
								<b>+</b> Estimula la concentración.<br>
								<b>+</b> Estimula la empatía.<br>
							</p>
							<p class="lead">
								Ademas eso no es todo... Fíjate la siguiente imagen
							</p>
							<div class="text-center">
								<img src="imagenes/lecciones/beneficios.png" alt="imagen" width="80%">
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
							<h3 class="text-center">¿Cómo aumentar la velocidad de lectura?</h3> 
							<p class="lead">
								1. Relájate <br>
								2. Buscar un lugar adecuado<br>
								3. Necesitas tener buena postura<br>
								4. Buena iluminación<br>
								5. Evitar distracciones<br>
								6. No leas en voz alta<br>
								7. No repitas lo antes leido<br>
								8. Señala con un material para no perderte<br>
								9. Trata de aumentar el campo visual<br>
								10. Seguir practicando<br>
							</p>
							<div class="text-center">
								<img src="imagenes/lecciones/leer.png" alt="imagen" width="80%">
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
							<h3 class="text-center">Consejos</h3>
							<div class="row">
								<p class="lead col-md-6">
									<b>&#x2764;</b><span class="text-warning">El sistema tiene las siguientes peticiones de los examenes</span>.<br><br>
									*** primer examen : Comprensión :<b>50%</b> ppm : <b>150</b><br><br>
									*** segundo examen : Comprensión :<b>60%</b> ppm : <b>300</b><br><br>
									*** tercer examen : Comprensión :<b>70%</b> ppm : <b>500</b><br><br>
									*** cuarto examen : Comprensión :<b>85%</b> ppm : <b>700</b><br><br>
									*** quinto examen : Comprensión :<b>90%</b> ppm : <b>1000</b><br><br>
									*** sexto examen : Comprensión :<b>100%</b> ppm : <b>1300</b><br><br>
									<b>&#x2764;</b>Realiza el primer examen y gana 50 pts. <br><br>
									<b>&#x2764;</b>Si no puedes avanzar, puedes ganar puntos realizando los ejercicios. <br><br>
									<b>&#x2764;</b>Sigue practicando y no te olvides de la diversión<br><br>
								</p>
								<div class="text-center col-md-6">
									<img src="imagenes/lecciones/fun.png" alt="imagen" width="80%">
								</div>
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
		data(){
			return {
				usuario:{},
				loading:true,
				mostrar:true,
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
			mostrarSidebar(){
				if (this.mostrar == true) {
					document.getElementById("wrapper").classList.add("toggled")
					this.mostrar = false
				}else{
					document.getElementById("wrapper").classList.remove('toggled')
					this.mostrar = true
				}

			}
		}
	}
</script>
<style>
#sidebar-wrapper {
	min-height: 100vh;
	margin-left: -15rem;
	-webkit-transition: margin .25s ease-out;
	-moz-transition: margin .25s ease-out;
	-o-transition: margin .25s ease-out;
	transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
	padding: 0.875rem 1.25rem;
	font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
	width: 15rem;
}

#page-content-wrapper {
	min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
	margin-left: 0;
}

@media (min-width: 768px) {
	#sidebar-wrapper {
		margin-left: 0;
	}

	#page-content-wrapper {
		min-width: 0;
		width: 100%;
	}

	#wrapper.toggled #sidebar-wrapper {
		margin-left: -15rem;
	}
}

</style>