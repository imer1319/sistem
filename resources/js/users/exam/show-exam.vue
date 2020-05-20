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
			<div v-if="vista == 1">
				<div class="container-fluid">
					<router-link class="btn btn-dark text-uppercase" to="/curso">
						Regresar
					</router-link>
				</div>
				<div class="card col-12 col-md-7 m-auto">
					<div class="card-body">
						<h3 class="text-center text-danger">Este examen ya fue dado</h3>
						<div class="row">
							<h5 class="col-8 col-md-6 text-success"><i class="fab fa-accessible-icon"></i> PPM</h5>
							<h5 class="col-4 col-md-6">{{ examen_dado.ppm }}</h5>
							<hr>
							<h5 class="col-8 col-md-6 text-info"><i class="fas fa-brain"></i> Comprension</h5>
							<h5 class="col-4 col-md-6">{{ examen_dado.comprension }}<b class="h5"> %</b></h5>
							<hr>
							<h5 class="col-8 col-md-6 text-warning"><i class="far fa-clock"></i> Tiempo</h5>
							<h5 class="col-4 col-md-6">{{ examen_dado.tiempo }}<b class="h5"> s</b></h5>
							<hr>
							<h5 class="col-8 col-md-6 text-gray-dark"><i class="far fa-sun"></i> Fecha</h5>
							<h5 class="col-4 col-md-6">{{ obtenerFecha(examen_dado.created_at) }}</h5>
						</div>
					</div>
				</div>
			</div>
			<div v-if="vista == null">
				<div class="container-fluid">
					<router-link class="btn btn-dark text-uppercase" to="/curso">
						Regresar
					</router-link>
				</div>
				<div v-show="muestra_exam==0" >
					<div id="progressbar">
						<li id="paso1" class="active">Consejo 1</li>
						<li id="paso2">Consejo 2</li>
						<li id="paso3">Consejo 3</li>
					</div>
					<div id="pass1" v-show="step==1" class="animated bounceInRight fast">
						<div class="row">
							<div class="card col-md-9 m-auto shadow">
								<div class="card-body text-center">
									<div class="m-auto col-md-5">
										<img :src="imagenes.imagen1" height="180" width="100%">
									</div>
									<h4>Hola, ¿Estas preparado para el examen?</h4>
									<div class="row my-4">
										<div class="btn btn-primary m-auto" @click.prevent="next()">Siguiente</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="pass2" v-show="step==2">
						<div class="row">
							<div class="card col-md-9 m-auto shadow">
								<div class="card-body text-center">
									<div class="m-auto col-md-5">
										<img :src="imagenes.imagen2" height="180"width="100%">
									</div>
									<h4>Te haremos preguntas cuando termines</h4>
									<div class="row my-4">
										<div class="btn btn-primary m-auto" @click.prevent="next()">Siguiente</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="pass3" v-show="step==3" >
						<div class="row">
							<div class="card col-md-9 m-auto shadow">
								<div class="card-body text-center">
									<div class="m-auto col-md-5">
										<img :src="imagenes.imagen3" height="180"width="100%">
									</div>
									<h4>Estaremos cronometrando tu avance</h4>
									<div class="row my-4">
										<div class="btn btn-primary m-auto" @click.prevent="next()" >Empezar
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-show="muestra_exam==1">
				<div class="card card-primary col-md-10 m-auto pt-2">
					<div class="card-body">
						<h3 class="text-center"><b>{{ examen.name }}</b></h3>
						<hr>
						<p id="test" class="text-justify"></p>
						<textarea id="area" COLS=40 ROWS=10 style="display: none;"></textarea>
					</div>
					<div class="row my-3">
						<div class="btn btn-primary m-auto" @click.prevent="mostrarPreguntas()">Terminar</div>	
					</div>
				</div>
			</div>
			<div v-show="muestra_exam==2">
				<div class="card card-primary col-md-10 m-auto shadow">
					<div class="card-body">
						<h3 class="text-center text-danger">Las preguntas</h3>
						<hr>
						<div v-for="(pregunta, index) in preguntas" :key="index">
							<div v-show="index == contador">
								<h2 class="text-warning pl-md-5">{{pregunta.enunciado}}</h2>
								<div class="ml-md-5">
									<label class="radioContainer">{{ pregunta.respuestaA }}
										<input type="radio" name="radio" v-model="picked" :value="pregunta.respuestaA">
										<span class="circle"></span>
									</label><br><br>
									<label class="radioContainer">{{ pregunta.respuestaB }}
										<input type="radio" name="radio" v-model="picked" :value="pregunta.respuestaB">
										<span class="circle"></span>
									</label><br><br>
									<label class="radioContainer">{{ pregunta.respuestaC }}
										<input type="radio" name="radio" v-model="picked" :value="pregunta.respuestaC">
										<span class="circle"></span>
									</label><br><br>
									<label class="radioContainer">{{ pregunta.respuestaD }}
										<input type="radio" name="radio" v-model="picked" :value="pregunta.respuestaD">
										<span class="circle"></span>
									</label><br><br>
									<div class="row" v-if="picked != ''">
										<div class="btn btn-primary" @click.prevent="siguiente(pregunta)">Siguiente</div>
									</div>
									<div v-else>
										<span class="bg-primary text-white p-1 m-1">{{ mensaje }}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-show="muestra_exam == 3">
				<div class="card col-md-10 shadow m-auto">
					<div class="card-body">
						<div class="m-auto col-8 text-center">
							<form v-on:submit.prevent="guardarExam">
								<h3 class="text-uppercase">Ver puntuaciones</h3>
								<div class="m-auto col-md-7">
									<img :src="imagenes.imagen4" height="200"width="80%">
								</div>
								<input type="submit"value="Mostrar Resultados" class="btn btn-primary">
							</form>
						</div>
					</div>
				</div>
			</div>
			<div v-show="muestra_exam == 4">
				<div class="card card-primary col-md-8 col-sm-12 m-auto" style="box-shadow: 2px 2px 10px #666;">
					<div class="card-body">
						<h3 class="text-center">Resultados</h3>
						<hr>
						<div class="card border-primary">
							<div class="card-body">
								<h4 class="text-center" :class="[(comprension * 10) >= requiere_comprension ? 'text-primary':'text-danger']">
									{{ mensaje_comprension }} <br>
								</h4>
							</div>
						</div>
						<h5 class="text-center" v-if="(comprension * 10) < requiere_comprension">
							<span >
								<i>Se requiere una comprension mayor o igual a : </i>
								<b>{{ requiere_comprension }} %</b>
							</span>
						</h5>
						<h4>Correctas : {{ comprension }}</h4>
						<h4>Incorrectas : {{ 10-comprension }}</h4>
						<h4>Numero de palabras : {{ palabras }}</h4>
						<h4>Palabras por minuto : {{ palabras_x_minuto }}</h4>
						<h4>Tiempo : {{ result }}</h4>
						<h2 class="text-center" :class="[(comprension * 10) >= requiere_comprension ? 'text-warning':'text-danger']">
							{{ mensaje_puntos }} Pts.<br>
						</h2>
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
</template>
<script type="text/javascript">
	import moment from 'moment'
	moment.locale('es')
	export default{
		created:function() {
			this.showExamen()
			this.showUser()
			this.mostrarPregunta()
			this.examen_dado_resp()
		},
		data(){
			return{
				usuario:{},
				imagenes:{
					imagen1:'../imagenes/logo.png',
					imagen2:'../imagenes/imagen2.png',
					imagen3:'../imagenes/cronometer.png',
					imagen4:'../imagenes/relogarena.png'
				},
				step : 1,
				muestra_exam:0,
				examen :{},
				preguntas:[],
				pregunta:{
					enunciado:'',examen_id:'',respuestaA:'',respuestaB:'',
					respuestaC:'',respuestaD:'',esCorrecto:''
				},
				contador : 0,
				comprension:0,
				velocidad:0,
				picked:'',
				palabras:'',
				palabras_x_minuto:0,
				saveExam:{exam_id: '',user_id:'',ppm:'',comprension:'',tiempo:'',estado:''},
				myTime: 0,
				cronometro:0,
				result:'',
				mensaje:'Selecciona un inciso',
				examen_dado:{},
				loading:true,
				vista:0,
				aumento_curso:0,
				aumento_puntos:0,
				disminucion_puntos:0,
				requiere_comprension:0,
				requiere_velocidad:0,
				mensaje_comprension:'',
				mensaje_puntos:'',
				url_examen:0,
				examen_preview:{},
			}
		},
		methods:{
			obtenerFecha(fecha){
				return moment(fecha).fromNow()
			},
			showUser(){
				var url ="/profile"
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false;
					if (this.usuario.avance_curso == 12 || this.usuario.avance_curso == 25 || this.usuario.avance_curso == 28) {
						this.examen_anterior();
					}
				})
			},
			examen_anterior(){
				if (this.usuario.avance_curso == 12) {
					this.url_examen = 1
				}
				if (this.usuario.avance_curso == 25) {
					this.url_examen = 12
				}
				if (this.usuario.avance_curso == 28) {
					this.url_examen = 25
				}
				var url = '/examendado/'+this.url_examen;
				axios.get(url).then(res =>{
					this.examen_preview = res.data
				})
			},
			examen_dado_resp(){
				var url = '/examendado/'+this.$route.params.id;
				axios.get(url).then(res =>{
					this.examen_dado = res.data
					this.loading = false
					this.vista = this.examen_dado.estado
				})
			},
			myTimer(){
				this.cronometro++;
			},
			stopTiempo(){
				clearInterval(this.myTime);
				this.palabras_x_minuto = Math.round(this.palabras/(this.cronometro/60));
				this.muestraCronometro();
			},
			muestraCronometro(){
				var time = this.cronometro;
				var minutes = Math.floor( time / 60 );
				var seconds = time % 60;
				minutes = minutes < 10 ? '0' + minutes : minutes;
				seconds = seconds < 10 ? '0' + seconds : seconds;
				this.result = minutes + ":" + seconds; 
			},
			actualizar_usuario(){
				this.saveExam.exam_id = this.$route.params.id;
				this.saveExam.user_id = this.usuario.id;
				this.saveExam.ppm = this.palabras/(this.cronometro/60);
				this.saveExam.comprension = (this.comprension)*10;
				this.saveExam.tiempo = this.cronometro;
				this.saveExam.estado = 1;

				if (this.usuario.avance_curso == 1) {
					this.aumento_puntos = 50
					this.requiere_comprension = 30
					this.disminucion_puntos = 10
					this.requiere_velocidad = 0
				}
				if (this.usuario.avance_curso == 12) {
					this.aumento_puntos = 200
					this.requiere_comprension = 50
					this.disminucion_puntos = 80
					this.requiere_velocidad = this.examen_preview.ppm
				}
				if (this.usuario.avance_curso == 25) {
					this.aumento_puntos = 400
					this.requiere_comprension = 70
					this.requiere_velocidad = this.examen_preview.ppm
				}
				if (this.usuario.avance_curso == 28) {
					this.aumento_puntos = 700
					this.requiere_comprension = 85
					this.disminucion_puntos = 400
					this.requiere_velocidad = this.examen_preview.ppm
				}
				this.velocidad = this.palabras/(this.cronometro/60);
				if ((this.comprension * 10) >= this.requiere_comprension && this.velocidad >= this.requiere_velocidad) {
					this.usuario.puntos += this.aumento_puntos
					this.usuario.avance_curso += 1
					let data = new FormData();
					if (this.$route.params.id == 1) {
						data.append('ppm_inicial',this.saveExam.ppm)
						data.append('comprension_inicial',this.saveExam.comprension)
					}
					data.append('avance_curso', this.usuario.avance_curso)
					data.append('puntos', this.usuario.puntos)
					data.append('_method','PUT');
					var url = `/profile/${this.usuario.id}`;
					axios.post(url, data).then(res=>{

					})
				}else{
					this.usuario.puntos -= this.disminucion_puntos
					let data = new FormData();
					data.append('puntos', this.usuario.puntos)
					data.append('_method','PUT');
					var url = `/profile/${this.usuario.id}`;
					axios.post(url, data).then(res=>{

					})
				}
			},
			guardarExam(){
				if (this.saveExam.comprension >= this.requiere_comprension && this.velocidad >= this.requiere_velocidad) {
					let formData = new FormData();
					formData.append('exam_id', this.saveExam.exam_id);
					formData.append('user_id', this.saveExam.user_id);
					formData.append('ppm', this.saveExam.ppm);
					formData.append('comprension', this.saveExam.comprension);
					formData.append('tiempo', this.saveExam.tiempo);
					formData.append('estado', this.saveExam.estado);
					axios.post('/exam',formData)
					.then(res=>{
						this.muestra_exam = 4
						this.mensaje_comprension = 'Aprobaste el examen'
						this.mensaje_puntos = '+ '+this.aumento_puntos
					})
				}else{
					this.muestra_exam = 4
					this.mensaje_comprension = 'No aprobaste el examen'
					this.mensaje_puntos = '- '+this.disminucion_puntos
				}
			},
			siguiente(pregunta){
				if (pregunta.esCorrecto == this.picked) {
					this.comprension++;
				}
				this.picked ="";
				this.contador++;
				if (this.contador == 10) {
					this.muestra_exam = 3;
					this.actualizar_usuario()
				}
			},
			next:function() {
				this.step++;
				if (this.step==2) {
					document.getElementById('pass2').classList.add("animated","bounceInRight","fast")
					document.getElementById('paso2').classList.add("active");
				}
				if (this.step==3) {
					document.getElementById('pass3').classList.add("animated","bounceInRight","fast")
					document.getElementById('paso3').classList.add("active");
				}
				if (this.step==4) {
					this.myTime = setInterval(this.myTimer,1000);
					this.muestra_exam=1;
				}
			},
			mostrarPregunta (){
				var url = '/pregunta/'+this.$route.params.id;
				axios.get(url).then(res =>{
					this.preguntas = res.data
					this.loading = false;
				})
			},
			showExamen(){
				var url = this.$route.params.id;
				axios.get(url).then(res =>{
					this.examen = res.data
					this.leerDocumento();
				})
			},
			leerDocumento() {
				var url = "/examenes/"+this.examen.content;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById("test").innerHTML = this.responseText;
						document.getElementById("area").innerHTML = this.responseText;
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			},
			mostrarPreguntas(){
				this.muestra_exam=2;
				this.contarPalabras();
				this.stopTiempo();
			},
			contarPalabras(){
				var textArea = document.getElementById("area").value;
				this.palabras = textArea.match(/[^\s]+/g).length;
			}
		},

	}
</script>
<style>
/*************----RADIO BUTON----***********/
.radioContainer{
	display: inline-block;
	position: relative;
	cursor: pointer;
	font-family: sans-serif;
	font-size: 22px;
	padding-left: 30px;
}
.radioContainer input{
	display: none;
}
.radioContainer .circle{
	display: inline-block;
	width: 25px;
	height: 25px;
	background-color: #eee;
	position: absolute;
	left: 0; top: 0;
	border-radius: 50%;
}
.radioContainer:hover .circle{
	background-color: #ccc;
}
.radioContainer input:checked + .circle{
	background-color: #2196fc;
}
.radioContainer input:checked + .circle:after{
	content: "";
	height: 10px;
	width: 10px;
	background-color: white;
	position: absolute;
	border-radius: 50%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
/***********-- PROGRESS- BAR --**************/
#progressbar {
	margin-bottom: 30px;
	overflow: hidden;
	/*CSS counters to number the steps*/
	counter-reset: step;
}
#progressbar li {
	list-style-type: none;
	color: black;
	text-transform: uppercase;
	font-size: 18px;
	width: 33.33%;
	float: left;
	position: relative;
	text-align: center;
}
#progressbar li:before {
	content: counter(step);
	counter-increment: step;
	width: 40px;
	line-height: 40px;
	display: block;
	font-size: 18px;
	color: #333;
	background: white;
	border-radius: 3px;
	margin: 0 auto 5px auto;
	text-align: center;
}
/*progressbar connectors*/
#progressbar li:after {
	content: '';
	width: 100%;
	height: 2px;
	background: white;
	position: absolute;
	left: -50%;
	top: 20px;
	z-index: -1; /*put it behind the numbers*/
}
#progressbar li:first-child:after {
	/*connector not needed before the first step*/
	content: none; 
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,  #progressbar li.active:after{
	background: #15799e;
	color: white;
}
/* para el radio button*/

</style>