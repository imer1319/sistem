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
					if (this.usuario.avance_curso == 26){
						this.aumento_avance = this.usuario.avance_curso+1
						this.usuario.puntos += 500
						this.aumento_puntos = '+500 Pts'
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
				this.requierePuntuacion = 40
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
</style>