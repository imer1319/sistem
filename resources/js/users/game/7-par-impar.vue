<template>
	<div>
		<spinner v-if="loading"></spinner>
		<div v-else>
			<div class="container-fluid">
				<div class="col-12 container-fluid">
					<button type="button" class="btn btn-dark text-uppercase" onClick="history.back()">Regresar</button>
				</div>
				<div class="row" id="primera-vista">
					<div class="col-12 col-md-8">
						<div class="card mb-3">
							<div class="card-body">
								<div class="row">
									<div class="col-5">
										<h4 class="text-center">Par e Impar</h4>
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
									<h5 class="col-6">{{ obtenerFecha(punt.created_at) }}</h5>
									<div class="col-4">{{ punt.puntuacion }}</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4">
						<div class="card">
							<div class="card-body">
								<div class="text-center">
									<img src="/imagenes/consejos-juegos/consejo-par-impar.png" class="card-img-top mx-auto my-3" 
									style="width: 60%;">
									<div class="card-body">
										<h4 class="card-text">Encuentra lo antes posible el numero, siempre saldra uno par y el siguiente impar, antes de que se termine el tiempo</h4>
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
									<span class="col-4">Puntos: {{ puntuacion }}</span>
									<div class="col-8">
										<ul id="skill">
											<li>
												<span class="bar graphic-design" id="progressBar"></span>
											</li>
										</ul>
									</div>
								</div>
								<h4 class="text-center">{{ buscar }}</h4>
								<table class="table table-bordered m-auto text-center col-md-8 pt-1">
									<tbody>
										<tr>
											<td @click="precionar($event)" id="a"></td>
											<td @click="precionar($event)" id="b"></td>
											<td @click="precionar($event)" id="c"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="d"></td>
											<td @click="precionar($event)" id="e"></td>
											<td @click="precionar($event)" id="f"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="g"></td>
											<td @click="precionar($event)" id="h"></td>
											<td @click="precionar($event)" id="i"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="j"></td>
											<td @click="precionar($event)" id="k"></td>
											<td @click="precionar($event)" id="l"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="m"></td>
											<td @click="precionar($event)" id="n"></td>
											<td @click="precionar($event)" id="o"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="p"></td>
											<td @click="precionar($event)" id="q"></td>
											<td @click="precionar($event)" id="r"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="s"></td>
											<td @click="precionar($event)" id="t"></td>
											<td @click="precionar($event)" id="u"></td>
										</tr>
										<tr>
											<td @click="precionar($event)" id="v"></td>
											<td @click="precionar($event)" id="w"></td>
											<td @click="precionar($event)" id="x"></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div id="tercera-vista"class="col-md-8 col-sm-12 m-auto">
					<div class="card">
						<div class="card-body">
							<div class="col-8 m-auto text-center">
								<h3 class="text-uppercase">Se acabo el tiempo</h3>
								<img src="imagenes/relogarena.png" alt="" width="60%">
								<div v-if="puntuacion > 0" @click.prevent="guardarJuego()" class="btn btn-primary btn-block btn-lg">Se acabó el tiempo</div>
								<router-link v-else to="/game" class="btn btn-primary btn-block"> Volver al curso</router-link>
							</div>
						</div>
					</div>
				</div>
				<div id="cuarta-vista"class="col-md-8 col-sm-12 m-auto">
					<div class="card animated bounceInRight">
						<div class="card-body">
							<h3 class="text-center">estos son los resultados</h3>
							<h4>Calificacion : <span id="estrellas"></span></h4><hr>
							<h4>Puntuacion: {{ puntuacion }}</h4><hr>
							<h4 class="text-warning">Aumento: <b>+</b> {{ Math.floor(puntuacion/5) }}</h4><hr>
							<router-link to="/game" class="btn btn-primary btn-block"> Volver a los ejercicios</router-link>
							<router-link to="/home" class="btn btn-primary btn-block"> Volver al inicio</router-link>
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
			this.maximaPuntuacion()
			this.misPuntuaciones()
			this.showUser()
		},
		data(){
			return{
				usuario:{},
				maximoPunto:[],
				misRecords:[],
				desordenar:[],
				numeros:['2336','2077','1985','3797','9693','3566','7852','6802','4740',' 9952','5495','5342','7736','5800','3320','9344','9658','3094','5166','2638','1084','6328','8944','9734'],
				ids:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'],
				buscar:'IMPARES',
				puntuacion:0,
				tiempo:100,
				tres_segundos:null,
				contador:3,
				temporizador_juego:null,
				incrementador:0,
				resultado_mod:1,
				contador_par_impar:0,
				loading:true,
			}
		},
		methods:{
			obtenerFecha(fecha){
				return moment(fecha).fromNow()
			},
			maximaPuntuacion(){
				axios.get("maxGame/"+7).then(res =>{
					this.maximoPunto = res.data
				})
			},
			misPuntuaciones(){
				axios.get("/puntuacion/"+7).then(res =>{
					this.misRecords = res.data
				})
			},
			showUser(){
				var url ="/profile"
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false
				})
			},
			guardarJuego(){
				let formData = new FormData()
				formData.append('ejercicio_id', 7)
				formData.append('user_id', this.usuario.id)
				formData.append('puntuacion', this.puntuacion)

				axios.post('/game',formData)
				.then(res=>{
					this.actualizarDatosUsuario()
					document.getElementById("tercera-vista").style.display='none'
					document.getElementById("cuarta-vista").style.display='block'
				})
			},
			dibujarEstrellas(numero , titulo){
				var stars = "";
				for (var i = 0; i < 5; i++) {
					if (i < numero) {
						stars += "<span><i class='fas fa-star'></i></span>";
					}else{
						stars += "<span><i class='far fa-star'></i></span>";
					}
				}
				var astro = document.getElementById("estrellas");
				astro.innerHTML=stars;
				astro.innerHTML+=titulo;
			},
			actualizarDatosUsuario(){
				var stars = 0 
				var minimo = 14
				var titulo = ''
				for(var i = 1; i <= 5; i++){
					if (this.puntuacion >= (minimo*i)) {
						stars = i
						titulo = ' '+i+' / '+5
					}else{
						stars = i-1
						titulo = ' '+(i-1)+' / '+5
						break;
					}
				}
				this.dibujarEstrellas(stars, titulo)
				var point = Math.floor(this.puntuacion/5)
				let data = new FormData()
				data.append('puntos', this.usuario.puntos + point)
				if (this.usuario.puntos<100) {
					data.append('rango_id', 1);
				}else if (this.usuario.puntos >= 100 && this.usuario.puntos < 300) {
					data.append('rango_id', 2);
				}else if (this.usuario.puntos >= 300 && this.usuario.puntos < 700) {
					data.append('rango_id', 3);
				}else if (this.usuario.puntos >= 700&& this.usuario.puntos < 1000) {
					data.append('rango_id', 4);
				}else if (this.usuario.puntos >= 1000&& this.usuario.puntos < 2000) {
					data.append('rango_id', 5);
				}else if (this.usuario.puntos >= 2000) {
					data.append('rango_id', 6);
				}
				data.append('_method','PUT')
				var url = `/profile/${this.usuario.id}`
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
				this.desordenar = this.numeros.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.desordenar.length; i++) {
					var dist = document.getElementById(this.ids[i])
					var suma = parseInt(this.desordenar[i]-this.incrementador)
					dist.innerHTML=suma
				}
			},
			error_Encontrado(encontrado){
				encontrado.classList.add('rubberBand');
				setTimeout(function(){
					encontrado.classList.remove('rubberBand')
				},1000)
				this.puntuacion-=2
			},
			precionar(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a":
					var a = document.getElementById("a");
					if((this.desordenar[0]-this.incrementador) % 2 == this.resultado_mod){a.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(a)}
					break;
					case "b":
					var b = document.getElementById("b");
					if((this.desordenar[1]-this.incrementador) % 2 == this.resultado_mod){b.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(b)}
					break;
					case "c":
					var c = document.getElementById("c");
					if((this.desordenar[2]-this.incrementador) % 2 == this.resultado_mod){c.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(c)}
					break;
					case "d":
					var d = document.getElementById("d");
					if ((this.desordenar[3]-this.incrementador) % 2 == this.resultado_mod){d.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(d)}
					break;
					case "e":
					var e = document.getElementById("e");
					if ((this.desordenar[4]-this.incrementador) % 2 == this.resultado_mod){e.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(e)}
					break;
					case "f":
					var f = document.getElementById("f");
					if ((this.desordenar[5]-this.incrementador) % 2 == this.resultado_mod){f.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(f)}
					break;
					case "g":
					var g = document.getElementById("g");
					if ((this.desordenar[6]-this.incrementador) % 2 == this.resultado_mod){g.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(g)}
					break;
					case "h":
					var h = document.getElementById("h");
					if ((this.desordenar[7]-this.incrementador) % 2 == this.resultado_mod){h.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(h)}
					break;
					case "i":
					var i = document.getElementById("i");
					if ((this.desordenar[8]-this.incrementador) % 2 == this.resultado_mod){i.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(i)}
					break;
					case "j":
					var j = document.getElementById("j");
					if ((this.desordenar[9]-this.incrementador) % 2 == this.resultado_mod){j.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(j)}
					break;
					case "k":
					var k = document.getElementById("k");
					if ((this.desordenar[10]-this.incrementador) % 2 == this.resultado_mod){k.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(k)}
					break;
					case "l":
					var l = document.getElementById("l");
					if ((this.desordenar[11]-this.incrementador) % 2 == this.resultado_mod){l.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(l)}
					break;
					case "m":
					var m = document.getElementById("m");
					if ((this.desordenar[12]-this.incrementador) % 2 == this.resultado_mod){m.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(m)}
					break;
					case "n":
					var n = document.getElementById("n");
					if ((this.desordenar[13]-this.incrementador) % 2 == this.resultado_mod){n.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(n)}
					break;
					case "o":
					var o = document.getElementById("o");
					if ((this.desordenar[14]-this.incrementador) % 2 == this.resultado_mod){o.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(o)}
					break;
					case "p":
					var p = document.getElementById("p");
					if ((this.desordenar[15]-this.incrementador) % 2 == this.resultado_mod){p.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(p)}
					break;
					case "q":
					var q = document.getElementById("q");
					if ((this.desordenar[16]-this.incrementador) % 2 == this.resultado_mod){q.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(q)}
					break;
					case "r":
					var r = document.getElementById("r");
					if ((this.desordenar[17]-this.incrementador) % 2 == this.resultado_mod){r.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(r)}
					break;
					case "s":
					var s = document.getElementById("s");
					if ((this.desordenar[18]-this.incrementador) % 2 == this.resultado_mod){s.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(s)}
					break;
					case "t":
					var t = document.getElementById("t");
					if ((this.desordenar[19]-this.incrementador) % 2 == this.resultado_mod){t.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(t)}
					break;
					case "u":
					var u = document.getElementById("u");
					if ((this.desordenar[20]-this.incrementador) % 2 == this.resultado_mod){u.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(u)}
					break;
					case "v":
					var v = document.getElementById("v");
					if ((this.desordenar[21]-this.incrementador) % 2 == this.resultado_mod){v.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(v)}
					break;
					case "w":
					var w = document.getElementById("w");
					if ((this.desordenar[22]-this.incrementador) % 2 == this.resultado_mod){w.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(w)}
					break;
					case "x":
					var x = document.getElementById("x");
					if ((this.desordenar[23]-this.incrementador) % 2 == this.resultado_mod){x.innerHTML=" "; this.puntuacion+=3; this.contador_par_impar++; this.cambiar_numeros()}else{this.error_Encontrado(x)}
					break;
				}
			},
			cambiar_numeros(){
				if (this.resultado_mod == 1) {
					if (this.contador_par_impar == 5) {
						this.resultado_mod = 0
						this.contador_par_impar = 0
						this.incrementador += 1
						this.empezarJuego()
						this.buscar = 'PARES'
					}
				}else if (this.resultado_mod == 0) {
					if (this.contador_par_impar == 5) {
						this.resultado_mod = 1
						this.contador_par_impar = 0
						this.incrementador += 1
						this.empezarJuego()
						this.buscar = 'IMPARES'
					}
				}
			}
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
</style>