<template>
	<spinner v-if="loading"></spinner>
	<div class="container" v-else>
		<div v-if="vista == 1">
			<div class="card col-12 col-md-8 m-auto">
				<div class="card-body">
					<h5 class="text-center">Este examen ya fue dado</h5>
					<div class="row">
						<div class="col-6">ppm</div>
						<div class="col-6">{{ examen_dado.ppm }}</div>
						<hr>
						<div class="col-6">Comprension</div>
						<div class="col-6">{{ examen_dado.comprension }}<b class="h5"> %</b></div>
						<hr>
						<div class="col-6">tiempo</div>
						<div class="col-6">{{ examen_dado.tiempo }}<b class="h5"> segundos</b></div>
						<hr>
						<div class="col-6">fecha</div>
						<div class="col-6">{{ examen_dado.created_at }}</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="vista == null">
			<div v-show="muestra_exam==0" >
				<div id="progressbar">
					<li id="paso1" class="active">Consejo 1</li>
					<li id="paso2">Consejo 2</li>
					<li id="paso3">Consejo 3</li>
				</div>
				<div id="pass1" v-show="step==1" class="animated bounceInRight fast">
					<div class="card">
						<div class="card-body text-center">
							<div class="m-auto col-md-5">
								<img :src="imagenes.imagen1" height="150" width="100%">
							</div>
							<h4>Hola, ¿Estas preparado para el examen?</h4>
							<div class="row">
								<div class="btn btn-success m-auto" @click.prevent="next()">Siguiente</div>
							</div>
						</div>
					</div>
				</div>
				<div id="pass2" v-show="step==2">
					<div class="card">
						<div class="card-body text-center">
							<div class="m-auto col-md-5">
								<img :src="imagenes.imagen2" height="150"width="100%">
							</div>
							<h4>Te haremos preguntas cuando termines</h4>
							<div class="row">
								<div class="btn btn-success m-auto" @click.prevent="next()">Siguiente</div>
							</div>
						</div>
					</div>
				</div>

				<div id="pass3" v-show="step==3" >
					<div>
						<div class="card">
							<div class="card-body text-center">
								<div class="m-auto col-md-5">
									<img :src="imagenes.imagen3" height="150"width="100%">
								</div>
								<h4>Estaremos cronometrando tu avance</h4>
								<div class="row">
									<div class="btn btn-success m-auto" @click.prevent="next()" >Empezar
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-show="muestra_exam==1">
			<div class="card card-primary col-lg-12 col-12 col-sm-12 col-xl-10 m-auto pt-2" style="box-shadow: 2px 2px 10px #666;">
				<div class="card-body">
					<h3 class="text-center">{{ examen.name }}</h3>
					<hr>
					<p id="test" class="text-justify"></p>
					<textarea id="area" COLS=40 ROWS=10 style="display: none;"></textarea>
				</div>
			</div>
			<div class="row mt-4">
				<div class="btn btn-success m-auto" @click.prevent="mostrarPreguntas()">Terminar</div>	
			</div>
		</div>
		<div v-show="muestra_exam==2">
			<div class="card card-primary col-lg-12 col-12 col-sm-12 col-xl-10 m-auto" style="box-shadow: 2px 2px 10px #666;">
				<div class="card-body">
					<h3 class="text-center">Las preguntas</h3>
					<hr>
					<div v-for="(pregunta, index) in preguntas" :key="index">
						<div v-show="index == contador">
							<h2>{{pregunta.enunciado}}</h2>
							<div>
								<label>
									<input type="radio" name="radio" :value="pregunta.respuestaA" v-model="picked">{{ pregunta.respuestaA }}
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="radio" :value="pregunta.respuestaB" v-model="picked">{{ pregunta.respuestaB }}
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="radio" :value="pregunta.respuestaC" v-model="picked">{{ pregunta.respuestaC }}
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="radio" :value="pregunta.respuestaD" v-model="picked">{{ pregunta.respuestaD }}
								</label>
							</div>
							<div>
								<span v-model="pregunta.esCorrecto" style="display: none;"></span>
							</div>
							<div class="row" v-if="picked!=''">
								<div class="btn btn-success" @click.prevent="siguiente(pregunta)">Siguiente</div>
							</div>
							<div v-else>
								<span class="bg-success text-white p-1 m-1">{{ mensaje }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-show="muestra_exam == 3">
			<div class="card card-primary col-lg-12 col-12 col-sm-12 col-xl-10 m-auto" style="box-shadow: 2px 2px 10px #666;">
				<div class="card-body">
					<div class="m-auto col-8 text-center">
						<form v-on:submit.prevent="guardarExam">
							<h3 class="text-uppercase">Se acabo el tiempo</h3>
							<div class="m-auto col-md-7">
								<img :src="imagenes.imagen4" height="200"width="100%">
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
					<h4>Respondidas Correctamente : {{ cp }}</h4>
					<h4>Respondidas Erroneamente : {{ 10-cp }}</h4>
					<h4>Numero de palabras : {{ palabras }}</h4>
					<h4>Palabras por minuto : {{ ppmR }}</h4>
					<h4>Tiempo en dar el examen : {{ result }}</h4>
					<div class="row">
						<router-link :to="{name:'home'}" class="btn btn-info m-auto"> Ir al Inicio</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		created:function() {
			this.showExamen()
			this.mostrarPregunta()
			this.obtenerID()
			this.examen_dado_resp()
		},
		data(){
			return{
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
				pregunta:{enunciado:'',examen_id:'',respuestaA:'',respuestaB:'',respuestaC:'',respuestaD:'',esCorrecto:''},
				contador : 0,
				cp:0,
				picked:'',
				palabras:'',
				ppmR:0,
				saveExam:{exam_id: '',user_id:'',ppm:'',comprension:'',tiempo:'',estado:''},
				users:{},
				myTime: 0,
				cronometro:0,
				result:'',
				mensaje:'Selecciona un inciso',
				examen_dado:{},
				loading:true,
				vista:0,
			}
		},
		methods:{
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
			stopTimer(){
				clearInterval(this.myTime);
				this.ppmR = Math.round(this.palabras/(this.cronometro/60));
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
			guardarExam(){
				this.saveExam.exam_id = this.$route.params.id;
				this.saveExam.user_id = this.users.id;
				this.saveExam.ppm = this.palabras/(this.cronometro/60);
				this.saveExam.comprension = (this.cp)*10;
				this.saveExam.tiempo = this.cronometro;
				this.saveExam.estado = 1;

				let formData = new FormData();
				formData.append('exam_id', this.saveExam.exam_id);
				formData.append('user_id', this.saveExam.user_id);
				formData.append('ppm', this.saveExam.ppm);
				formData.append('comprension', this.saveExam.comprension);
				formData.append('tiempo', this.saveExam.tiempo);
				formData.append('estado', this.saveExam.estado);

				axios.post('/exam',formData)
				.then(res=>{
					this.saveExam.exam_id = "";
					this.saveExam.user_id = "";
					this.saveExam.ppm = "";
					this.saveExam.comprension = "";
					this.saveExam.tiempo = "";
					this.saveExam.estado = "";
					this.muestra_exam=4;
				})
			},
			siguiente(pregunta){
				if (pregunta.esCorrecto == this.picked) {
					this.cp++;
				}
				this.picked ="";
				this.contador++;
				if (this.contador == 10) {
					this.muestra_exam=3;
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
			obtenerID(){
				axios.get("/profile").then(res =>{
					this.users = res.data
				})
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
				this.stopTimer();
			},
			contarPalabras(){
				var textArea = document.getElementById("area").value;
				this.palabras = textArea.match(/[^\s]+/g).length;
			}
		}
	}
</script>
<style>
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
	background: #27AE60;
	color: white;
}
/* para el radio button*/

</style>