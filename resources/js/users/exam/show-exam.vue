<template>
	<div class="container">
		<div v-show="muestra_exam==0">
			<div id="progressbar">
				<li id="paso1">Consejo 1</li>
				<li id="paso2">Consejo 2</li>
				<li id="paso3">Consejo 3</li>
			</div>
			<div id="pass1" v-show="step==1" >
				<h2>Paso 1</h2>
				<div class="btn btn-success" @click.prevent="next()">Siguiente</div>
			</div>
			<div id="pass2" v-show="step==2">
				<h2>paso2</h2>
				<div class="btn btn-success" @click.prevent="next()">Siguiente</div>
			</div>

			<div id="pass3" v-show="step==3" >
				<h2>paso3</h2>
				<div class="btn btn-success" @click.prevent="next()" >Empezar</div>
			</div>
		</div>
		<div v-show="muestra_exam==1">
			<div class="card card-primary col-lg-12 col-12 col-sm-12 col-xl-10 m-auto pt-2" style="box-shadow: 2px 2px 10px #666;">
				<div class="card-body">
					<h3 class="text-center">{{ examen.name }}</h3>
					<hr>
					<p id="test" class="text-justify"></p>
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
					<div v-for="(pregunta, index) in preguntas" :key="index" v-if="pregunta.examen_id == $route.params.id">
						<div v-show="index == contador">
							<div>{{pregunta.enunciado}}</div>
							<div>
								<input type="radio" name="radio1">
								<label>{{ pregunta.respuestaA }}</label>
							</div>
							<div>
								<input type="radio" name="radio1">
								<label>{{ pregunta.respuestaB }}</label>
							</div>
							<div>
								<input type="radio" name="radio1">
								<label>{{ pregunta.respuestaC }}</label>
							</div>
							<div>
								<input type="radio" name="radio1">
								<label>{{ pregunta.respuestaCorrecta }}</label>
							</div>
							<div class="row">
								<div class="btn btn-success" @click.prevent="contador++">Siguiente</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		created:function() {
			this.showExamen();
			this.mostrarPregunta();
		},
		mounted:function(){
			if (this.step==1){
				document.getElementById('pass1').classList.add("animated","bounceInRight","fast");
				document.getElementById('paso1').classList.add("active");
			}
		},
		data(){
			return{
				step : 1,
				muestra_exam:0,
				examen :{},
				preguntas:[],
				pregunta:{enunciado:'',examen_id:'',},
				contador : 0,
				posicion : [0,1,2,3],
				posicionAleatoria : [],
			}
		},
		methods:{
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
					this.loadDoc();
					this.muestra_exam=1;
				}
			},
			mostrarPregunta (){
				var url = '/pregunta';
				axios.get(url).then(res =>{
					this.preguntas = res.data
					this.loading = false;
				})
			},
			showExamen(){
				var url = this.$route.params.id;
				axios.get(url).then(res =>{
					this.examen = res.data
				})
			},
			loadDoc() {
				var url = "/examenes/"+this.examen.content;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById("test").innerHTML = this.responseText;
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			},
			mostrarPreguntas(){
				this.muestra_exam=2;
				this.mostrarRandom();
			},
			mostrarRandom(){
				this.posicionAleatoria = this.posicion.sort(function(){return Math.random()-0.5});
				console.log('numerosaleatorios '+this.posicionAleatoria);
			},
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

/*radio button para saber las respuestas de examenes.*/
[type="radio"]:checked,
[type="radio"]:not(:checked) {
	position: absolute;
	left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
	position: relative;
	padding-left: 28px;
	cursor: pointer;
	line-height: 20px;
	display: inline-block;
	color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 18px;
	height: 18px;
	border: 1px solid #ddd;
	border-radius: 100%;
	background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
	content: '';
	width: 12px;
	height: 12px;
	background: #F87DA9;
	position: absolute;
	top: 4px;
	left: 4px;
	border-radius: 100%;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0);
}
[type="radio"]:checked + label:after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
</style>