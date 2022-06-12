<template>
    <div>
        <spinner v-if="loading"></spinner>
        <div v-else>
			<div class="container-fluid">
				<div class="container-fluid">
					<router-link class="btn btn-dark text-uppercase" to="/curso">
						Regresar
					</router-link>
				</div>
				<div id="pantalla_3_seg">
					<div id="numero_3_seg">{{ contador }}</div>
				</div>
				<div class="row" id="segunda-vista">
					<div class="col-12">
						<div class="card">
							<div class="card-body ">
								<div class="text-center">
									<h5>Req : <strong>{{ requierePuntuacion }}</strong></h5>
								</div>
								<div class="row">
									<span class="col-4">Pts: {{ puntuacion }}</span>
									<div class="col-8">
										<ul id="skill">
											<li>
												<span class="bar graphic-design" id="progressBar"></span>
											</li>
										</ul>
									</div>
								</div>
								<h4 class="text-center my-5">{{ muestrame_buscando }}</h4>
								<div class="container-fluid row text-center">
									<div class="contenedor-card col-6"@click="precionar($event)" id="a"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="b"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="c"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="d"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="e"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="f"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="g"></div>
									<div class="contenedor-card col-6"@click="precionar($event)" id="h"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="tercera-vista"class="col-md-8  m-auto">
					<div class="card">
						<div class="card-body">
							<div class="col-8 m-auto text-center">
								<form v-on:submit.prevent="actualizar_datos_usuario">
									<h3 class="text-uppercase">Se acabo el tiempo</h3>
									<img src="imagenes/relogarena.png" alt="" width="60%">
									<input type="submit"value="Ver resultados" class="btn btn-primary btn-block">
								</form>
							</div>
						</div>
					</div>
				</div>
				<div id="cuarta-vista"class="col-md-8 m-auto">
					<div class="card animated bounceInRight">
						<div class="card-body">
							<h3 class="text-center">Estos son los resultados</h3><hr>
							<div v-if="this.puntuacion >= requierePuntuacion">
								<h3 class="text-center text-success">
									<span>Felicidades Aprobaste la lección</span>
								</h3>
							</div>
							<div v-else>
								<h3 class="text-center text-danger">
									<span>No aprobaste la lección</span>
								</h3>
							</div>
							<h4>Calificacion: {{ calificacion }} de 3</h4><hr>
							<h4>Puntuacion: {{ puntuacion }}</h4><hr>
							<h3 class="text-warning text-center">
								<b>{{ aumento_puntos }}</b>
							</h3>
							<router-link to="/curso" class="btn btn-primary m-auto btn-block">
								Ir al Curso
							</router-link>
							<router-link :to="{name:'home'}" class="btn btn-primary m-auto btn-block">
								Ir al Inicio
							</router-link>
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
			this.tres_segundos_pantalla()
		},
		data(){
			return{
				usuario:{},
				desordenar:[],
				palabras:['Senso','Ganado','Socorro','Lobo','Corazón','Cadera','Red','Patinar','Vegetal','Negativo','Arreglo','Erosión','Elástico','Campera','Preciosa','Pantera','Grabador','Galleta','Olvidar','Actor','Hormonas','Pozo','Naranja','Derecha'],
				ids:['a','b','c','d','e','f','g','h'],
				buscar:null,
				puntuacion:0,
				tiempo:100,
				tres_segundos:null,
				temporizador_juego:null,
				contador:3,
				muestrame_buscando:'',
				bono:0,
				interval:null,
				loading:true,
				aumento_avance:0,
				aumento_curso:0,
				calificacion:0,
				requierePuntuacion:0,
				aumento_puntos:'',
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
			actualizar_datos_usuario(){
				if (this.puntuacion <= (this.requierePuntuacion / 2)) {
					this.calificacion = 1
				}
				if (this.puntuacion > (this.requierePuntuacion / 2) && this.puntuacion < this.requierePuntuacion) {
					this.calificacion = 2
				}
				if (this.puntuacion >= this.requierePuntuacion) {
					this.calificacion = 3
				}
				if (this.puntuacion >= this.requierePuntuacion){
					if ((this.usuario.avance_curso == 14 || this.usuario.avance_curso == 15)){
						if (this.usuario.avance_curso == 14) {
							this.usuario.puntos += 75
							this.aumento_puntos = '+75 Pts'
						}else if (this.usuario.avance_curso == 15) {
							this.usuario.puntos += 80
							this.aumento_puntos = '+80 Pts'
						}
						this.aumento_avance = this.usuario.avance_curso+1
						let data = new FormData();
						data.append('avance_curso',this.aumento_avance);
						data.append('puntos',this.usuario.puntos);
						data.append('_method','PUT');
						var url = `/profile/${this.usuario.id}`
						axios.post(url, data).then(res=>{

						})
					}
				}
				document.getElementById("tercera-vista").style.display='none'
				document.getElementById("cuarta-vista").style.display='block'
			},
			tres_segundos_pantalla(){
				this.tres_segundos = setInterval(this.pantalla_3_segundos,1000)
			},
			pantalla_3_segundos(){
				this.contador--
				if (this.contador <= 0) {
					clearInterval(this.tres_segundos)
					document.getElementById("pantalla_3_seg").style.display='none'
					document.getElementById("numero_3_seg").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
					this.empezarJuego()
					this.temporizador_juego = setInterval(this.cronometro,1000)
				}
			},
			fin_cronometro(){
				clearInterval(this.temporizador_juego)
				document.getElementById("segunda-vista").style.display='none'
				document.getElementById("tercera-vista").style.display='flex'
			},
			cronometro(){
				var elem = document.getElementById("progressBar")
				elem.style.width = this.tiempo + "%"
				this.tiempo-=1.666667
				if (this.tiempo > 30 && this.tiempo < 60) {
					elem.style.background = "#6699CC"
				}else if (this.tiempo < 30 && this.tiempo >10) {
					elem.style.background = "#CC9933"
				}else if (this.tiempo<10) {
					elem.style.background = "#FF6666"
				}
				if(this.tiempo <= 0){
					this.fin_cronometro()
				}
			},
			empezarJuego(){
				if (this.usuario.avance_curso < 23) {
					this.requierePuntuacion = 55
				}
				if (this.usuario.avance_curso >= 23)  {
					this.requierePuntuacion = 70
				}
				this.desordenar = this.palabras.sort(function(){return Math.random()-0.5})
				this.interval = setInterval(this.ocultar_buscando,500)
				this.buscar = Math.floor(Math.random()*7)
				this.muestrame_buscando = this.desordenar[this.buscar]
				for (var i = 0; i <8; i++) {
					var dist = document.getElementById(this.ids[i])
					dist.innerHTML = this.palabras[i]
				}
			},
			ocultar_buscando(){
				this.bono+=5
				if (this.bono == 10) {
					this.muestrame_buscando = "_ _ _ _"
					clearInterval(this.interval)
					this.bono = 0
				}
			},
			error_Encontrado(encontrado){
				encontrado.classList.add('rubberBand');
				setTimeout(function(){
					encontrado.classList.remove('rubberBand')
				},1000)
				this.puntuacion-=2
			},
			solucion_encontrado(encontrado){
				encontrado.innerHTML = " "
				encontrado.classList.add('solucion');
				setTimeout(function(){
					encontrado.classList.remove('solucion')
				},1000)
				this.puntuacion+=3
			},
			precionar(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a":
					var a = document.getElementById("a");
					if(this.desordenar[this.buscar]==this.desordenar[0]){this.solucion_encontrado(a);this.empezarJuego();}else{this.error_Encontrado(a)}
					break;
					case "b":
					var b = document.getElementById("b");
					if(this.desordenar[this.buscar]==this.desordenar[1]){this.solucion_encontrado(b);this.empezarJuego();}else{this.error_Encontrado(b)}
					break;
					case "c":
					var c = document.getElementById("c");
					if(this.desordenar[this.buscar]==this.desordenar[2]){this.solucion_encontrado(c);this.empezarJuego();}else{this.error_Encontrado(c)}
					break;
					case "d":
					var d = document.getElementById("d");
					if (this.desordenar[this.buscar]==this.desordenar[3]){this.solucion_encontrado(d);this.empezarJuego();}else{this.error_Encontrado(d)}
					break;
					case "e":
					var e = document.getElementById("e");
					if (this.desordenar[this.buscar]==this.desordenar[4]){this.solucion_encontrado(e);this.empezarJuego();}else{this.error_Encontrado(e)}
					break;
					case "f":
					var f = document.getElementById("f");
					if (this.desordenar[this.buscar]==this.desordenar[5]){this.solucion_encontrado(f);this.empezarJuego();}else{this.error_Encontrado(f)}
					break;
					case "g":
					var g = document.getElementById("g");
					if (this.desordenar[this.buscar]==this.desordenar[6]){this.solucion_encontrado(g);this.empezarJuego();}else{this.error_Encontrado(g)}
					break;
					case "h":
					var h = document.getElementById("h");
					if (this.desordenar[this.buscar]==this.desordenar[7]){this.solucion_encontrado(h);this.empezarJuego();}else{this.error_Encontrado(h)}
					break;
				}
			},
		},
		beforeDestroy: function () {
			clearInterval(this.temporizador_juego)
		}
	}
</script>
<style>
#primera-vista{
	display: flex;
}
#segunda-vista,#tercera-vista,#cuarta-vista{
	display: none;
}
#pantalla_3_seg{
	display: block;
	min-height: 100vh;
	position: relative;
}
#numero_3_seg{
	display: block;
	top: 40%;
	left: 50%;
	position: absolute;
	font-size:45px;
}
.contenedor-card{
	cursor: pointer;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	padding: 1.25rem;
}
.solucion{
	background: #36edc8;
}
</style>