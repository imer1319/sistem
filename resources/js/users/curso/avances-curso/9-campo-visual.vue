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
					<div class="col-md-4">
						<div class="card">
							<div class="card-body">
								<div class="text-center">
									<img src="/imagenes/consejos-juegos/consejo-campo-visual.png" class="card-img-top mx-auto my-3" 
									style="width: 70%;">
									<div class="card-body">
										<h4 class="card-text">Concéntrese y preciona si son iguales o diferentes las letras que estan coloreadas, antes de que se termine el tiempo</h4>
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
								<div class="row">
									<div class="col-md-8 text-center m-auto">
										<div id="resultado"></div>
									</div>
								</div>
								<div class="row mt-1">
									<div class="d-flex m-auto">
										<span class="col-6 text-md-right">
											<span class="btn btn-primary" @click.prevent="diferentes()">diferentes</span>
										</span>
										<span class="col-6 text-md-left">
											<span class="btn btn-primary" @click.prevent="iguales()">Iguales</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="tercera-vista"class="col-md-8 m-auto">
					<div class="card">
						<div class="card-body">
							<div class="col-8 m-auto text-center">
								<form v-on:submit.prevent="guardarJuego">
									<h3 class="text-uppercase">Se acabo el tiempo</h3>
									<img src="imagenes/relogarena.png" alt="" width="60%">
									<input type="submit"value="Ver resultados" class="btn btn-primary btn-block btn-lg">
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
			this.maximaPuntuacion()
			this.misPuntuaciones()
		},
		data(){
			return{
				maximoPunto:[],
				misRecords:[],
				usuario:{},
				tres_segundos:null,
				temporizador_juego:null,
				contador:3,
				puntuacion:0,
				tiempo:100,
				igualdades:[0,1],
				igual:null,
				letras:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'],
				arriba:{x:3,y:2},
				derecha:{x:4,y:3},
				abajo:{x:3,y:4},
				izquierda:{x:2,y:3},
				loading:true,
				aumento_avance:0,
				aumento_curso:0,
				calificacion:0,
				requierePuntuacion:0,
				aumento_puntos:'',
			}
		},
		methods:{
			maximaPuntuacion(){
				axios.get("maxGame/"+8).then(res =>{
					this.maximoPunto = res.data
				})
			},
			misPuntuaciones(){
				axios.get("/puntuacion/"+8).then(res =>{
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
				formData.append('ejercicio_id', 8)
				formData.append('user_id', this.usuario.id)
				formData.append('puntuacion', this.puntuacion)

				axios.post('/game',formData)
				.then(res=>{
					this.actualizar_datos_usuario()
					document.getElementById("tercera-vista").style.display='none'
					document.getElementById("cuarta-vista").style.display='block'
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
					if ((this.usuario.avance_curso == 26 || this.usuario.avance_curso == 27)){
						if (this.usuario.avance_curso == 26) {
							this.usuario.puntos += 150
							this.aumento_puntos = '+150 Pts'
						}else if (this.usuario.avance_curso == 27) {
							this.usuario.puntos += 200
							this.aumento_puntos = '+200 Pts'
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
			tres_segundos_pantalla(){
				document.getElementById("primera-vista").style.display='none'
				document.getElementById("pantalla_3_seg").style.display='block'
				document.getElementById("numero_3_seg").style.display='block'
				this.tres_segundos = setInterval(this.pantalla_3_segundos,1000)
			},
			empezarJuego(){
				if (this.usuario.avance_curso == 26) {
					this.requierePuntuacion = 75
				}
				if (this.usuario.avance_curso == 27)  {
					this.requierePuntuacion = 100
				}
				let tabla="<table class='tabb m-auto'>"
				var letra_posicion = Math.floor(Math.random()*this.letras.length)
				var rand_cartesiano = Math.floor(Math.random()*4)
				this.igual = Math.floor(Math.random()*this.igualdades.length)
				for(var i=0;i<7;i++){
					tabla+="<tr>"
					for(var j=0;j<7;j++){
						var rand = Math.floor(Math.random()*this.letras.length)
						if (this.igual == 1) {
							if ((i == this.arriba.x && j == this.arriba.y) || (i == this.derecha.x && j == this.derecha.y) || (i == this.abajo.x && j == this.abajo.y) || (i == this.izquierda.x && j == this.izquierda.y)) {
								tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[letra_posicion]+"</div>"+"</td>"
							}else{
								tabla+="<td class='tdd'>"+"<div>"+this.letras[rand]+"</div>"+"</td>"
							}
						}else if(this.igual == 0){
							if (rand_cartesiano == 0) {
								if (i == this.arriba.x && j == this.arriba.y) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[rand]+"</div>"+"</td>"
								}else if ((i == this.derecha.x && j == this.derecha.y) || (i == this.abajo.x && j == this.abajo.y) || (i == this.izquierda.x && j == this.izquierda.y)) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[letra_posicion]+"</div>"+"</td>"
								}else{
									tabla+="<td class='tdd'>"+"<div>"+this.letras[rand]+"</div>"+"</td>"
								}
							}else if (rand_cartesiano == 1) {
								if (i == this.derecha.x && j == this.derecha.y) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[rand]+"</div>"+"</td>"
								}else if ((i == this.arriba.x && j == this.arriba.y) || (i == this.abajo.x && j == this.abajo.y) || (i == this.izquierda.x && j == this.izquierda.y)) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[letra_posicion]+"</div>"+"</td>"
								}else{
									tabla+="<td class='tdd'>"+"<div>"+this.letras[rand]+"</div>"+"</td>"
								}
							}else if (rand_cartesiano == 2) {
								if (i == this.abajo.x && j == this.abajo.y) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[rand]+"</div>"+"</td>"
								}else if ((i == this.arriba.x && j == this.arriba.y) || (i == this.derecha.x && j == this.derecha.y) || (i == this.izquierda.x && j == this.izquierda.y)) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[letra_posicion]+"</div>"+"</td>"
								}else{
									tabla+="<td class='tdd'>"+"<div>"+this.letras[rand]+"</div>"+"</td>"
								}
							}else if (rand_cartesiano == 3) {
								if (i == this.izquierda.x && j == this.izquierda.y) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[rand]+"</div>"+"</td>"
								}else if ((i == this.arriba.x && j == this.arriba.y) || (i == this.derecha.x && j == this.derecha.y) || (i == this.abajo.x && j == this.abajo.y)) {
									tabla+="<td class='tdd'>"+"<div class='color'>"+this.letras[letra_posicion]+"</div>"+"</td>"
								}else{
									tabla+="<td class='tdd'>"+"<div>"+this.letras[rand]+"</div>"+"</td>"
								}
							}
						}
					}
					tabla+="</tr>"
				}
				tabla+="</table>"
				document.getElementById("resultado").innerHTML=tabla
			},
			iguales(){
				if (this.igual == 1) {
					this.puntuacion+=3
				}else{
					this.puntuacion-=2
				}
				this.empezarJuego()
			},
			diferentes(){
				if (this.igual == 0) {
					this.puntuacion+=3
				}else{
					this.puntuacion-=2
				}
				this.empezarJuego()
			},
		},
		beforeDestroy: function () {
			clearInterval(this.temporizador_juego)
		}
	}
</script>
<style>
.color{
	background: #2d2d2d;
	color: white;
	border-radius: 50%;
	width: 100%;height: 100%;
	padding-top: 8px;
}
.tabb{
	table-layout: fixed;
	width: 280px;
}

.tdd {
	width: 40px;
	height: 40px;
	word-wrap: break-word;
	text-align: center;
}


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