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
				<div class="col-12 container-fluid">
					<button type="button" class="btn btn-dark text-uppercase" onClick="history.back()">Regresar</button>
				</div>
				<div class="row" id="primera-vista">
					<div class="col-12 col-md-8">
						<div class="card mb-3">
							<div class="card-body">
								<div class="row">
									<div class="col-5">
										<h4 class="text-center">Busca numeros</h4>
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
									<img src="/imagenes/consejos-juegos/consejo-buscar-numero.png" class="card-img-top mx-auto my-3" 
									style="width: 70%;">
									<div class="card-body">
										<h4 class="card-text">Concéntrese y busca el numero  que indica, antes de que se termine el tiempo</h4>
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
								<h4 id="buscar" class="text-center"></h4>
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
							<h4 class="text-warning">Aumento: <b>+</b> {{ Math.floor(puntuacion/3) }}</h4><hr>
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
			this.showUser()
			this.maximaPuntuacion()
			this.misPuntuaciones()
		},
		data(){
			return{
				usuario:{},
				maximoPunto:[],
				misRecords:[],
				desordenar:[],
				palabras:['2336','2077','1985','3797','9693','3566','7852','6802','4740',' 9952','5495','5342','7735','5807','3320','9344','9657','3091','5163','2638','1085','6323','8944','9734'],
				ids:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'],
				buscar:null,
				puntuacion:0,
				tiempo:100,
				tres_segundos:null,
				temporizador_juego:null,
				contador:3,
				loading:true,
			}
		},
		methods:{
			maximaPuntuacion(){
				axios.get("maxGame/"+4).then(res =>{
					this.maximoPunto = res.data
				})
			},
			misPuntuaciones(){
				axios.get("/puntuacion/"+4).then(res =>{
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
				formData.append('ejercicio_id', 4)
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
				var minimo = 8
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
				var point = Math.floor(this.puntuacion/3)
				this.usuario.puntos += point;
				let data = new FormData();
				data.append('puntos', this.usuario.puntos);
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
				data.append('_method','PUT');
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
				this.desordenar = this.palabras.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.desordenar.length; i++) {
					var dist = document.getElementById(this.ids[i])
					dist.innerHTML=this.desordenar[i]
				}
				this.buscar = Math.floor(Math.random()*this.palabras.length);
				document.getElementById("buscar").innerHTML=this.palabras[this.buscar];
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
					if(this.desordenar[this.buscar]==this.desordenar[0]){a.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(a)}
					break;
					case "b":
					var b = document.getElementById("b");
					if(this.desordenar[this.buscar]==this.desordenar[1]){b.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(b)}
					break;
					case "c":
					var c = document.getElementById("c");
					if(this.desordenar[this.buscar]==this.desordenar[2]){c.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(c)}
					break;
					case "d":
					var d = document.getElementById("d");
					if (this.desordenar[this.buscar]==this.desordenar[3]){d.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(d)}
					break;
					case "e":
					var e = document.getElementById("e");
					if (this.desordenar[this.buscar]==this.desordenar[4]){e.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(e)}
					break;
					case "f":
					var f = document.getElementById("f");
					if (this.desordenar[this.buscar]==this.desordenar[5]){f.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(f)}
					break;
					case "g":
					var g = document.getElementById("g");
					if (this.desordenar[this.buscar]==this.desordenar[6]){g.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(g)}
					break;
					case "h":
					var h = document.getElementById("h");
					if (this.desordenar[this.buscar]==this.desordenar[7]){h.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(h)}
					break;
					case "i":
					var i = document.getElementById("i");
					if (this.desordenar[this.buscar]==this.desordenar[8]){i.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(i)}
					break;
					case "j":
					var j = document.getElementById("j");
					if (this.desordenar[this.buscar]==this.desordenar[9]){j.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(j)}
					break;
					case "k":
					var k = document.getElementById("k");
					if (this.desordenar[this.buscar]==this.desordenar[10]){k.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(k)}
					break;
					case "l":
					var l = document.getElementById("l");
					if (this.desordenar[this.buscar]==this.desordenar[11]){l.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(l)}
					break;
					case "m":
					var m = document.getElementById("m");
					if (this.desordenar[this.buscar]==this.desordenar[12]){m.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(m)}
					break;
					case "n":
					var n = document.getElementById("n");
					if (this.desordenar[this.buscar]==this.desordenar[13]){n.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(n)}
					break;
					case "o":
					var o = document.getElementById("o");
					if (this.desordenar[this.buscar]==this.desordenar[14]){o.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(o)}
					break;
					case "p":
					var p = document.getElementById("p");
					if (this.desordenar[this.buscar]==this.desordenar[15]){p.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(p)}
					break;
					case "q":
					var q = document.getElementById("q");
					if (this.desordenar[this.buscar]==this.desordenar[16]){q.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(q)}
					break;
					case "r":
					var r = document.getElementById("r");
					if (this.desordenar[this.buscar]==this.desordenar[17]){r.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(r)}
					break;
					case "s":
					var s = document.getElementById("s");
					if (this.desordenar[this.buscar]==this.desordenar[18]){s.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(s)}
					break;
					case "t":
					var t = document.getElementById("t");
					if (this.desordenar[this.buscar]==this.desordenar[19]){t.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(t)}
					break;
					case "u":
					var u = document.getElementById("u");
					if (this.desordenar[this.buscar]==this.desordenar[20]){u.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(u)}
					break;
					case "v":
					var v = document.getElementById("v");
					if (this.desordenar[this.buscar]==this.desordenar[21]){v.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(v)}
					break;
					case "w":
					var w = document.getElementById("w");
					if (this.desordenar[this.buscar]==this.desordenar[22]){w.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(w)}
					break;
					case "x":
					var x = document.getElementById("x");
					if (this.desordenar[this.buscar]==this.desordenar[23]){x.innerHTML=" "; this.puntuacion+=3; this.empezarJuego();}else{this.error_Encontrado(x)}
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
</style>