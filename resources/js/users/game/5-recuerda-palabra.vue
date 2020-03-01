<template>
	<div class="container-fluid">
		<div class="row" id="primera-vista">
			<div class="col-12 col-md-8">
				<div class="card mb-3">
					<div class="card-body">
						<div class="row">
							<div class="col-5">
								<h4 class="text-center">Busca la palabra</h4>
								<input type="button" value="Iniciar" class="btn btn-primary btn-block pb-0" @click="tres_segundos_pantalla()">
							</div>
							<div class="col-7">
								<div class="text-center"><h5>Record</h5></div>
								<div v-for="(max, index) in maximoPunto">
									<div class="card-footer row text-left">
										<h5 class="col-md-6 col-12">{{ max.name }}</h5>
										<h5 class="col-md-6 col-12">{{ max.pivot.puntuacion }}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card mb-3">
					<div class="card-body">
						<h4 class="text-center text-uppercase">Tus records</h4>
						<div class="row font-weight-bold text-center">
							<div class="col-2">#</div>
							<div class="col-6">Fecha</div>
							<div class="col-4">Puntos</div>
						</div>
						<hr>
						<div class="row text-center" v-for="(punt, index) in misRecords">
							<div class="col-2">{{ index+1 }}</div>
							<div class="col-6">{{ punt.created_at }}</div>
							<div class="col-4">{{ punt.puntuacion }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card">
					<div class="card-body">
						<div class="text-center">
							<img src="/imagenes/consejos-juegos/consejo-memorizar-palabra.png" class="card-img-top mx-auto my-3" 
							style="width: 60%;">
							<div class="card-body">
								<h4 class="card-text">Memoriza la palabra que aparecera y luego selecciona la correcta, antes de que se termine el tiempo</h4>
								<div class="text-left">
									<p><b>Tiempo: </b>60 segundos</p>
									<p><b>Correcta: </b>+3 puntos</p>
									<p><b>Incorrecta: </b>-2 puntos</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="pantalla_3_seg">
			<div id="numero_3_seg">{{ contador }}</div>
		</div>
		<div class="row" id="segunda-vista">
			<div class="col-12">
				<div class="card">
					<div class="card-body ">
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
						<form v-on:submit.prevent="guardarJuego">
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
					<h3 class="text-center">estos son los resultados</h3>
					<h4>tiempo : 00:00</h4><hr>
					<h4>Puntuacion: {{ puntuacion }}</h4><hr>
					<h4>Aumento: <b>+</b> {{ Math.floor(puntuacion/3) }}</h4><hr>
					<router-link :to="{name:'home'}" class="btn btn-primary m-auto btn-block">
						Ir al Inicio
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		created:function() {
			this.maximaPuntuacion()
			this.misPuntuaciones()
			this.obtener_datos_usuario()
		},
		data(){
			return{
				perfil_usuario:{},
				maximoPunto:[],
				misRecords:[],
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
			}
		},
		methods:{
			maximaPuntuacion(){
				axios.get("maxGame/"+5).then(res =>{
					this.maximoPunto = res.data
				})
			},
			misPuntuaciones(){
				axios.get("/puntuacion/"+5).then(res =>{
					this.misRecords = res.data
				})
			},
			obtener_datos_usuario(){
				axios.get("/profile").then(res =>{
					this.perfil_usuario = res.data
				})
			},
			guardarJuego(){
				let formData = new FormData()
				formData.append('ejercicio_id', 5)
				formData.append('user_id', this.perfil_usuario.id)
				formData.append('puntuacion', this.puntuacion)

				axios.post('/game',formData)
				.then(res=>{
					this.actualizar_datos_usuario()
					document.getElementById("tercera-vista").style.display='none'
					document.getElementById("cuarta-vista").style.display='block'
				})
			},
			actualizar_datos_usuario(){
				var point = Math.floor(this.puntuacion/3)
				let data = new FormData();
				data.append('puntos', this.perfil_usuario.puntos + point);
				if (this.perfil_usuario.puntos<100) {
					data.append('rango_id', 1);
				}else if (this.perfil_usuario.puntos >= 100 && this.perfil_usuario.puntos < 500) {
					data.append('rango_id', 2);
				}else if (this.perfil_usuario.puntos >= 500 && this.perfil_usuario.puntos < 1000) {
					data.append('rango_id', 3);
				}else if (this.perfil_usuario.puntos >= 1000&& this.perfil_usuario.puntos < 5000) {
					data.append('rango_id', 4);
				}else if (this.perfil_usuario.puntos >= 5000&& this.perfil_usuario.puntos < 10000) {
					data.append('rango_id', 5);
				}else if (this.perfil_usuario.puntos > 10000) {
					data.append('rango_id', 6);
				}
				data.append('_method','PUT');
				var url = `/profile/${this.perfil_usuario.id}`
				axios.post(url, data).then(res=>{

				})
			},
			tres_segundos_pantalla(){
				document.getElementById("primera-vista").style.display='none'
				document.getElementById("pantalla_3_seg").style.display='block'
				document.getElementById("numero_3_seg").style.display='block'
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
	display: none;
	min-height: 100vh;
	position: relative;
}
#numero_3_seg{
	display: none;
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