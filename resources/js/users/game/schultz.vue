<template>
	<div class="col-12">
		<div>
			<div class="row" id="vista-primera">
				<div class="col-md-8 col-sm-12">
					<div class="card mb-3">
						<div class="card-body">
							<h3>Schulte</h3>
							<h3>Record</h3>
							<h3>Record Global</h3>
							<div class="btn btn-primary btn-block" @click="temporizame()">Iniciar</div>
						</div>
					</div>
					<div class="card mb-3">
						<div class="card-body">
							<p>Puntuacion</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-sm-12">
					<div class="card">
						<div class="text-center">
							<img src="/imagenes/libro.png" class="card-img-top mx-auto my-3" 
							style="filter: drop-shadow(5px 5px 10px #444); width: 80%;">
							<div class="card-body">
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="empezando">
			<div class="col-sm-5 col-md-5">
				<h5>Puntuacion : {{ puntuacion }}</h5>
			</div>
			<div class="col-sm-7 col-md-7">
				<ul id="skill">
					<li>
						<span class="bar graphic-design" id="progressBar"></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="col-12 text-center" id="empezando2">
			<h3>Buscando : {{ buscando }}</h3>
		</div>
		<div id="temporizador">
			<div id="numero">{{ contador }}</div>
		</div>
		<div class="row">
			<div v-show="pasos == 1" class="col-md-8 col-sm-12 m-auto" id="tabla1">
				<table class="table table-bordered">
					<tr>
						<td @click="press_1($event)" id="a1"></td>
						<td @click="press_1($event)" id="b1"></td>
						<td @click="press_1($event)" id="c1"></td>
					</tr>
					<tr>
						<td @click="press_1($event)" id="d1"></td>
						<td @click="press_1($event)" id="e1"></td>
						<td @click="press_1($event)" id="f1"></td>
					</tr>
					<tr>
						<td @click="press_1($event)" id="g1"></td>
						<td @click="press_1($event)" id="h1"></td>
						<td @click="press_1($event)" id="i1"></td>
					</tr>
				</table>
			</div>
			<div v-show="pasos == 2 "class="col-md-8 col-sm-12 m-auto">
				<table class="table table-bordered">
					<tr>
						<td @click="press_2($event)" id="a2"></td>
						<td @click="press_2($event)" id="b2"></td>
						<td @click="press_2($event)" id="c2"></td>
						<td @click="press_2($event)" id="d2"></td>
					</tr>
					<tr>
						<td @click="press_2($event)" id="e2"></td>
						<td @click="press_2($event)" id="f2"></td>
						<td @click="press_2($event)" id="g2"></td>
						<td @click="press_2($event)" id="h2"></td>
					</tr>
					<tr>
						<td @click="press_2($event)" id="i2"></td>
						<td @click="press_2($event)" id="j2"></td>
						<td @click="press_2($event)" id="k2"></td>
						<td @click="press_2($event)" id="l2"></td>
					</tr>
					<tr>
						<td @click="press_2($event)" id="m2"></td>
						<td @click="press_2($event)" id="n2"></td>
						<td @click="press_2($event)" id="o2"></td>
						<td @click="press_2($event)" id="p2"></td>
					</tr>
				</table>
			</div>
			<div v-show="pasos == 3" class="col-md-8 col-sm-12 m-auto">
				<table class="table table-bordered">
					<tr>
						<td @click="press_3($event)" id="a3"></td>
						<td @click="press_3($event)" id="b3"></td>
						<td @click="press_3($event)" id="c3"></td>
						<td @click="press_3($event)" id="d3"></td>
						<td @click="press_3($event)" id="e3"></td>
					</tr>
					<tr>
						<td @click="press_3($event)" id="f3"></td>
						<td @click="press_3($event)" id="g3"></td>
						<td @click="press_3($event)" id="h3"></td>
						<td @click="press_3($event)" id="i3"></td>
						<td @click="press_3($event)" id="j3"></td>
					</tr>
					<tr>
						<td @click="press_3($event)" id="k3"></td>
						<td @click="press_3($event)" id="l3"></td>
						<td @click="press_3($event)" id="m3"></td>
						<td @click="press_3($event)" id="n3"></td>
						<td @click="press_3($event)" id="o3"></td>
					</tr>
					<tr>
						<td @click="press_3($event)" id="p3"></td>
						<td @click="press_3($event)" id="q3"></td>
						<td @click="press_3($event)" id="r3"></td>
						<td @click="press_3($event)" id="s3"></td>
						<td @click="press_3($event)" id="t3"></td>
					</tr>
					<tr>
						<td @click="press_3($event)" id="u3"></td>
						<td @click="press_3($event)" id="v3"></td>
						<td @click="press_3($event)" id="w3"></td>
						<td @click="press_3($event)" id="x3"></td>
						<td @click="press_3($event)" id="y3"></td>
					</tr>
				</table>
			</div>
			<div v-show="pasos == 4" class="col-md-8 col-sm-12 m-auto">
				<table class="table table-bordered">
					<tr>
						<td @click="press_4($event)" id="a4"></td>
						<td @click="press_4($event)" id="b4"></td>
						<td @click="press_4($event)" id="c4"></td>
						<td @click="press_4($event)" id="d4"></td>
						<td @click="press_4($event)" id="e4"></td>
						<td @click="press_4($event)" id="f4"></td>
					</tr>
					<tr>
						<td @click="press_4($event)" id="g4"></td>
						<td @click="press_4($event)" id="h4"></td>
						<td @click="press_4($event)" id="i4"></td>
						<td @click="press_4($event)" id="j4"></td>
						<td @click="press_4($event)" id="k4"></td>
						<td @click="press_4($event)" id="l4"></td>
					</tr>
					<tr>
						<td @click="press_4($event)" id="m4"></td>
						<td @click="press_4($event)" id="n4"></td>
						<td @click="press_4($event)" id="o4"></td>
						<td @click="press_4($event)" id="p4"></td>
						<td @click="press_4($event)" id="q4"></td>
						<td @click="press_4($event)" id="r4"></td>
					</tr>
					<tr>
						<td @click="press_4($event)" id="s4"></td>
						<td @click="press_4($event)" id="t4"></td>
						<td @click="press_4($event)" id="u4"></td>
						<td @click="press_4($event)" id="v4"></td>
						<td @click="press_4($event)" id="w4"></td>
						<td @click="press_4($event)" id="x4"></td>
					</tr>
					<tr>
						<td @click="press_4($event)" id="y4"></td>
						<td @click="press_4($event)" id="z4"></td>
						<td @click="press_4($event)" id="za4"></td>
						<td @click="press_4($event)" id="zb4"></td>
						<td @click="press_4($event)" id="zc4"></td>
						<td @click="press_4($event)" id="zd4"></td>
					</tr>
					<tr>
						<td @click="press_4($event)" id="ze4"></td>
						<td @click="press_4($event)" id="zf4"></td>
						<td @click="press_4($event)" id="zg4"></td>
						<td @click="press_4($event)" id="zh4"></td>
						<td @click="press_4($event)" id="zi4"></td>
						<td @click="press_4($event)" id="zj4"></td>
					</tr>
				</table>
			</div>
			<div v-show="pasos == 5" class="col-md-8 col-sm-12 m-auto">
				<div class="col-8 m-auto">
					<form v-on:submit.prevent="guardarResultado">
						<h3 class="text-uppercase">se acabo el tiempo</h3>
						<img src="imagenes/tiempoterminado.jpg" alt="">
						<input type="submit"value="Ver resultados" class="btn btn-primary btn-block">
					</form>
				</div>
			</div>
			<div v-show="pasos == 6" class="col-md-8 col-sm-12 m-auto">
				<h3>estos son los resultados</h3>
				<router-link :to="{name:'home'}" class="btn btn-primary m-auto btn-block"> Ir al Inicio</router-link>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		created:function() {
			this.obtenerDatosUsuario()
		},
		data(){
			return{
				nivel1: [1,2,3,4,5,6,7,8,9],
				nivel2:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
				nivel3:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
				nivel4:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
				26,27,28,29,30,31,32,33,34,35,36],
				desordenar:[],
				ids1: ["a1","b1","c1","d1","e1","f1","g1","h1","i1"],
				ids2: ["a2","b2","c2","d2","e2","f2","g2","h2","i2","j2","k2","l2","m2","n2","o2","p2"],
				ids3: ["a3","b3","c3","d3","e3","f3","g3","h3","i3","j3","k3","l3","m3","n3","o3","p3","q3","r3","s3","t3","u3","v3","w3","x3","y3"],
				ids4: ["a4","b4","c4","d4","e4","f4","g4","h4","i4","j4","k4","l4","m4","n4","o4","p4","q4","r4","s4","t4","u4","v4","w4","x4","y4","z4","za4","zb4","zc4","zd4","ze4","zf4","zg4","zh4","zi4","zj4"],
				actual:0,
				buscando:1,
				pasos:1,
				tiempo:100,
				miTiempo:0,
				puntuacion :0,
				colores:["#0033CC","#FF6666","#669933","#FFCC33"],
				miTemporizador:0,
				contador:3,
				user:{},
				guardarEjercicio:{user_id:'',ejercicio_id:'',puntos:''},
			}
		},
		methods:{
			obtenerDatosUsuario(){
				axios.get("/profile").then(res =>{
					this.user = res.data
				})
			},
			guardarResultado(){
				this.guardarEjercicio.ejercicio_id = 1
				this.guardarEjercicio.user_id = this.user.id
				this.guardarEjercicio.puntos = this.puntuacion

				let formData = new FormData()
				formData.append('ejercicio_id', this.guardarEjercicio.ejercicio_id)
				formData.append('user_id', this.guardarEjercicio.ejercicio_id)
				formData.append('puntuacion', this.guardarEjercicio.puntos)

				axios.post('/game',formData)
				.then(res=>{
					this.guardarEjercicio.ejercicio_id = ""
					this.guardarEjercicio.user_id = ""
					this.guardarEjercicio.puntos = ""
					this.puntuacion = 0
					this.pasos = 6
				})
			},
			temporizame(){
				document.getElementById("vista-primera").style.display='none'
				document.getElementById("temporizador").style.display='block'
				this.miTemporizador = setInterval(this.empiezaTemporizar,1000)
			},
			empiezaTemporizar(){
				this.contador--
				if (this.contador <= 0) {
					clearInterval(this.miTemporizador)
					this.mostrar1()
				}
			},
			finCronometro(){
				clearInterval(this.miTiempo)
				document.getElementById("empezando").style.display='none'
				document.getElementById("empezando2").style.display='none'
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
				if(this.tiempo < 0 || this.buscando == 37){
					this.finCronometro()
					this.pasos = 5
					this.tiempo = 0
				}
			},
			mostrar1(){
				document.getElementById("tabla1").style.display='block'
				document.getElementById("empezando").style.display='flex'
				document.getElementById("empezando2").style.display='block'
				document.getElementById("temporizador").style.display='none'
				this.desordenar = this.nivel1.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.desordenar.length; i++) {
					var dist = document.getElementById(this.ids1[i])
					dist.innerHTML=this.desordenar[i]
					var rand = Math.floor(Math.random()*this.colores.length)
					dist.style.color = this.colores[rand]
				}
				this.miTiempo = setInterval(this.cronometro,1000);
			},
			mostrar2(){
				this.desordenar = this.nivel2.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.desordenar.length; i++) {
					var dist = document.getElementById(this.ids2[i])
					dist.innerHTML=this.desordenar[i]
					var rand = Math.floor(Math.random()*this.colores.length)
					dist.style.color = this.colores[rand]
				}
			},
			mostrar3(){
				this.desordenar = this.nivel3.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.desordenar.length; i++) {
					var dist = document.getElementById(this.ids3[i])
					dist.innerHTML=this.desordenar[i]
					var rand = Math.floor(Math.random()*this.colores.length)
					dist.style.color = this.colores[rand]
				}
			},
			mostrar4(){
				this.desordenar = this.nivel4.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.desordenar.length; i++) {
					var dist = document.getElementById(this.ids4[i])
					dist.innerHTML=this.desordenar[i]
					var rand = Math.floor(Math.random()*this.colores.length)
					dist.style.color = this.colores[rand]
				}
			},
			error_Encontrado(encontrado){
				encontrado.classList.add('rubberBand');
				setTimeout(function(){
					encontrado.classList.remove('rubberBand')
				},1000)
				this.puntuacion-=2
			},
			press_1(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a1":
					var a = document.getElementById("a1");
					if (this.nivel1[this.actual]==this.buscando){ a.innerHTML="";this.puntuacion++; this.buscando++;  this.esUltimo(this.buscando);}else{this.error_Encontrado(a);}
					break;
					case "b1":
					var b = document.getElementById("b1");
					if (this.nivel1[this.actual+1]==this.buscando){b.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(b);}
					break;
					case "c1":
					var c = document.getElementById("c1");
					if (this.nivel1[this.actual+2]==this.buscando){c.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(c);}
					break;
					case "d1":
					var d = document.getElementById("d1");
					if (this.nivel1[this.actual+3]==this.buscando){d.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(d);}
					break;
					case "e1":
					var e = document.getElementById("e1");
					if (this.nivel1[this.actual+4]==this.buscando){e.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(e);}
					break;
					case "f1":
					var f = document.getElementById("f1");
					if (this.nivel1[this.actual+5]==this.buscando){f.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(f);}
					break;
					case "g1":
					var g = document.getElementById("g1");
					if (this.nivel1[this.actual+6]==this.buscando){g.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(g);}
					break;
					case "h1":
					var h = document.getElementById("h1");
					if (this.nivel1[this.actual+7]==this.buscando){h.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(h);}
					break;
					case "i1":
					var i = document.getElementById("i1");
					if (this.nivel1[this.actual+8]==this.buscando){i.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(i);}
					break;
				}
			},
			press_2(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a2":
					var a = document.getElementById("a2");
					if (this.nivel2[this.actual]==this.buscando){ a.innerHTML=""; this.puntuacion+=2; this.buscando++;  this.esUltimo(this.buscando);}else{this.error_Encontrado(a);}
					break;
					case "b2":
					var b = document.getElementById("b2");
					if (this.nivel2[this.actual+1]==this.buscando){b.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(b);}
					break;
					case "c2":
					var c = document.getElementById("c2");
					if (this.nivel2[this.actual+2]==this.buscando){c.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(c);}
					break;
					case "d2":
					var d = document.getElementById("d2");
					if (this.nivel2[this.actual+3]==this.buscando){d.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(d);}
					break;
					case "e2":
					var e = document.getElementById("e2");
					if (this.nivel2[this.actual+4]==this.buscando){e.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(e);}
					break;
					case "f2":
					var f = document.getElementById("f2");
					if (this.nivel2[this.actual+5]==this.buscando){f.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(f);}
					break;
					case "g2":
					var g = document.getElementById("g2");
					if (this.nivel2[this.actual+6]==this.buscando){g.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(g);}
					break;
					case "h2":
					var h = document.getElementById("h2");
					if (this.nivel2[this.actual+7]==this.buscando){h.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(h);}
					break;
					case "i2":
					var i = document.getElementById("i2");
					if (this.nivel2[this.actual+8]==this.buscando){i.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(i);}
					break;
					case "j2":
					var j = document.getElementById("j2");
					if (this.nivel2[this.actual+9]==this.buscando){j.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(j);}
					break;
					case "k2":
					var k = document.getElementById("k2");
					if (this.nivel2[this.actual+10]==this.buscando){k.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(k);}
					break;
					case "l2":
					var l = document.getElementById("l2");
					if (this.nivel2[this.actual+11]==this.buscando){l.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(l);}
					break;
					case "m2":
					var m = document.getElementById("m2");
					if (this.nivel2[this.actual+12]==this.buscando){m.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(m);}
					break;
					case "n2":
					var n = document.getElementById("n2");
					if (this.nivel2[this.actual+13]==this.buscando){n.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(n);}
					break;
					case "o2":
					var o = document.getElementById("o2");
					if (this.nivel2[this.actual+14]==this.buscando){o.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(o);}
					break;
					case "p2":
					var p = document.getElementById("p2");
					if (this.nivel2[this.actual+15]==this.buscando){p.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(p);}
					break;
				}
			},
			press_3(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a3":
					var a = document.getElementById("a3");
					if (this.nivel3[this.actual]==this.buscando){ a.innerHTML="";this.puntuacion+=3; this.buscando++;  this.esUltimo(this.buscando);}else{this.error_Encontrado(a);}
					break;
					case "b3":
					var b = document.getElementById("b3");
					if (this.nivel3[this.actual+1]==this.buscando){b.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(b);}
					break;
					case "c3":
					var c = document.getElementById("c3");
					if (this.nivel3[this.actual+2]==this.buscando){c.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(c);}
					break;
					case "d3":
					var d = document.getElementById("d3");
					if (this.nivel3[this.actual+3]==this.buscando){d.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(d);}
					break;
					case "e3":
					var e = document.getElementById("e3");
					if (this.nivel3[this.actual+4]==this.buscando){e.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(e);}
					break;
					case "f3":
					var f = document.getElementById("f3");
					if (this.nivel3[this.actual+5]==this.buscando){f.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(f);}
					break;
					case "g3":
					var g = document.getElementById("g3");
					if (this.nivel3[this.actual+6]==this.buscando){g.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(g);}
					break;
					case "h3":
					var h = document.getElementById("h3");
					if (this.nivel3[this.actual+7]==this.buscando){h.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(h);}
					break;
					case "i3":
					var i = document.getElementById("i3");
					if (this.nivel3[this.actual+8]==this.buscando){i.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(i);}
					break;
					case "j3":
					var j = document.getElementById("j3");
					if (this.nivel3[this.actual+9]==this.buscando){j.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(j);}
					break;
					case "k3":
					var k = document.getElementById("k3");
					if (this.nivel3[this.actual+10]==this.buscando){k.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(k);}
					break;
					case "l3":
					var l = document.getElementById("l3");
					if (this.nivel3[this.actual+11]==this.buscando){l.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(l);}
					break;
					case "m3":
					var m = document.getElementById("m3");
					if (this.nivel3[this.actual+12]==this.buscando){m.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(m);}
					break;
					case "n3":
					var n = document.getElementById("n3");
					if (this.nivel3[this.actual+13]==this.buscando){n.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(n);}
					break;
					case "o3":
					var o = document.getElementById("o3");
					if (this.nivel3[this.actual+14]==this.buscando){o.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(o);}
					break;
					case "p3":
					var p = document.getElementById("p3");
					if (this.nivel3[this.actual+15]==this.buscando){p.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(p);}
					break;
					case "q3":
					var q = document.getElementById("q3");
					if (this.nivel3[this.actual+16]==this.buscando){q.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(q);}
					break;
					case "r3":
					var r = document.getElementById("r3");
					if (this.nivel3[this.actual+17]==this.buscando){r.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(r);}
					break;
					case "s3":
					var s = document.getElementById("s3");
					if (this.nivel3[this.actual+18]==this.buscando){s.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(s);}
					break;
					case "t3":
					var t = document.getElementById("t3");
					if (this.nivel3[this.actual+19]==this.buscando){t.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(t);}
					break;
					case "u3":
					var u = document.getElementById("u3");
					if (this.nivel3[this.actual+20]==this.buscando){u.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(u);}
					break;
					case "v3":
					var v = document.getElementById("v3");
					if (this.nivel3[this.actual+21]==this.buscando){v.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(v);}
					break;
					case "w3":
					var w = document.getElementById("w3");
					if (this.nivel3[this.actual+22]==this.buscando){w.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(w);}
					break;
					case "x3":
					var x = document.getElementById("x3");
					if (this.nivel3[this.actual+23]==this.buscando){x.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(x);}
					break;
					case "y3":
					var y = document.getElementById("y3");
					if (this.nivel3[this.actual+24]==this.buscando){y.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(y);}
					break;
				}
			},
			press_4(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a4":
					var a = document.getElementById("a4");
					if (this.nivel4[this.actual]==this.buscando){ a.innerHTML="";this.puntuacion+=4; this.buscando++;  this.esUltimo(this.buscando);}else{this.error_Encontrado(a);}
					break;
					case "b4":
					var b = document.getElementById("b4");
					if (this.nivel4[this.actual+1]==this.buscando){b.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(b);}
					break;
					case "c4":
					var c = document.getElementById("c4");
					if (this.nivel4[this.actual+2]==this.buscando){c.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(c);}
					break;
					case "d4":
					var d = document.getElementById("d4");
					if (this.nivel4[this.actual+3]==this.buscando){d.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(d);}
					break;
					case "e4":
					var e = document.getElementById("e4");
					if (this.nivel4[this.actual+4]==this.buscando){e.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(e);}
					break;
					case "f4":
					var f = document.getElementById("f4");
					if (this.nivel4[this.actual+5]==this.buscando){f.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(f);}
					break;
					case "g4":
					var g = document.getElementById("g4");
					if (this.nivel4[this.actual+6]==this.buscando){g.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(g);}
					break;
					case "h4":
					var h = document.getElementById("h4");
					if (this.nivel4[this.actual+7]==this.buscando){h.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(h);}
					break;
					case "i4":
					var i = document.getElementById("i4");
					if (this.nivel4[this.actual+8]==this.buscando){i.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(i);}
					break;
					case "j4":
					var j = document.getElementById("j4");
					if (this.nivel4[this.actual+9]==this.buscando){j.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(j);}
					break;
					case "k4":
					var k = document.getElementById("k4");
					if (this.nivel4[this.actual+10]==this.buscando){k.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(k);}
					break;
					case "l4":
					var l = document.getElementById("l4");
					if (this.nivel4[this.actual+11]==this.buscando){l.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(l);}
					break;
					case "m4":
					var m = document.getElementById("m4");
					if (this.nivel4[this.actual+12]==this.buscando){m.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(m);}
					break;
					case "n4":
					var n = document.getElementById("n4");
					if (this.nivel4[this.actual+13]==this.buscando){n.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(n);}
					break;
					case "o4":
					var o = document.getElementById("o4");
					if (this.nivel4[this.actual+14]==this.buscando){o.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(o);}
					break;
					case "p4":
					var p = document.getElementById("p4");
					if (this.nivel4[this.actual+15]==this.buscando){p.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(p);}
					break;
					case "q4":
					var q = document.getElementById("q4");
					if (this.nivel4[this.actual+16]==this.buscando){q.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(q);}
					break;
					case "r4":
					var r = document.getElementById("r4");
					if (this.nivel4[this.actual+17]==this.buscando){r.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(r);}
					break;
					case "s4":
					var s = document.getElementById("s4");
					if (this.nivel4[this.actual+18]==this.buscando){s.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(s);}
					break;
					case "t4":
					var t = document.getElementById("t4");
					if (this.nivel4[this.actual+19]==this.buscando){t.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(t);}
					break;
					case "u4":
					var u = document.getElementById("u4");
					if (this.nivel4[this.actual+20]==this.buscando){u.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(u);}
					break;
					case "v4":
					var v = document.getElementById("v4");
					if (this.nivel4[this.actual+21]==this.buscando){v.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(v);}
					break;
					case "w4":
					var w = document.getElementById("w4");
					if (this.nivel4[this.actual+22]==this.buscando){w.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(w);}
					break;
					case "x4":
					var x = document.getElementById("x4");
					if (this.nivel4[this.actual+23]==this.buscando){x.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(x);}
					break;
					case "y4":
					var y = document.getElementById("y4");
					if (this.nivel4[this.actual+24]==this.buscando){y.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(y);}
					break;
					case "z4":
					var z = document.getElementById("z4");
					if (this.nivel4[this.actual+25]==this.buscando){z.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(z);}
					break;
					case "za4":
					var za = document.getElementById("za4");
					if (this.nivel4[this.actual+26]==this.buscando){za.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(za);}
					break;
					case "zb4":
					var zb = document.getElementById("zb4");
					if (this.nivel4[this.actual+27]==this.buscando){zb.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zb);}
					break;
					case "zc4":
					var zc = document.getElementById("zc4");
					if (this.nivel4[this.actual+28]==this.buscando){zc.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zc);}
					break;
					case "zd4":
					var zd = document.getElementById("zd4");
					if (this.nivel4[this.actual+29]==this.buscando){zd.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zd);}
					break;
					case "ze4":
					var ze = document.getElementById("ze4");
					if (this.nivel4[this.actual+30]==this.buscando){ze.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(ze);}
					break;
					case "zf4":
					var zf = document.getElementById("zf4");
					if (this.nivel4[this.actual+31]==this.buscando){zf.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zf);}
					break;
					case "zg4":
					var zg = document.getElementById("zg4");
					if (this.nivel4[this.actual+32]==this.buscando){zg.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zg);}
					break;
					case "zh4":
					var zh = document.getElementById("zh4");
					if (this.nivel4[this.actual+33]==this.buscando){zh.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zh);}
					break;
					case "zi4":
					var zi = document.getElementById("zi4");
					if (this.nivel4[this.actual+34]==this.buscando){zi.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zi);}
					break;
					case "zj4":
					var zj = document.getElementById("zj4");
					if (this.nivel4[this.actual+35]==this.buscando){zj.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);}else{this.error_Encontrado(zj);}
					break;
				}
			},
			esUltimo(numero){
				if(this.pasos == 1){
					if (this.buscando == 10) {
						this.buscando = 1
						this.pasos++
						this.mostrar2()
					}
				}else if(this.pasos == 2){
					if (this.buscando == 17) {
						this.buscando = 1
						this.pasos++
						this.mostrar3()
					}
				}else if(this.pasos == 3){
					if (this.buscando == 26) {
						this.buscando = 1
						this.pasos ++
						this.mostrar4()
					}
				}else if(this.pasos == 4){
					if (this.buscando == 37) {
						this.pasos = 5
					}
				}
			},
		}
	}
</script>
<style>
#empezando , #empezando2{
	display: none;
}
#vista-primera{
	display: flex;
}
#tabla1{
	display: none;
}
table{
	table-layout: fixed;
}
th, td {
	word-wrap: break-word;
	text-align: center;
	height: 65px;
	font-size: 25px;
	font-weight: bold;
}
.table-bordered {
	border: 1px solid #666666;
}
.table-bordered th, .table-bordered td {
	border: 1px solid #666666;
}
.rubberBand {
	background: #FE789D;
	-webkit-animation-name: rubberBand;
	animation-name: rubberBand;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	--webkit-animation-timing-function: linear;
	animation-timing-function: linear;
}
@-webkit-keyframes rubberBand {
	0% {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
	30% {
		-webkit-transform: scale3d(1.25, 0.75, 1);
		transform: scale3d(1.25, 0.75, 1);
	}
	40% {
		-webkit-transform: scale3d(0.75, 1.25, 1);
		transform: scale3d(0.75, 1.25, 1);
	}
	50% {
		-webkit-transform: scale3d(1.15, 0.85, 1);
		transform: scale3d(1.15, 0.85, 1);
	}
	65% {
		-webkit-transform: scale3d(.95, 1.05, 1);
		transform: scale3d(.95, 1.05, 1);
	}
	75% {
		-webkit-transform: scale3d(1.05, .95, 1);
		transform: scale3d(1.05, .95, 1);
	}
	100% {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}
@keyframes rubberBand {
	0% {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
	30% {
		-webkit-transform: scale3d(1.25, 0.75, 1);
		transform: scale3d(1.25, 0.75, 1);
	}
	40% {
		-webkit-transform: scale3d(0.75, 1.25, 1);
		transform: scale3d(0.75, 1.25, 1);
	}
	50% {
		-webkit-transform: scale3d(1.15, 0.85, 1);
		transform: scale3d(1.15, 0.85, 1);
	}
	65% {
		-webkit-transform: scale3d(.95, 1.05, 1);
		transform: scale3d(.95, 1.05, 1);
	}
	75% {
		-webkit-transform: scale3d(1.05, .95, 1);
		transform: scale3d(1.05, .95, 1);
	}
	100% {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
		background: transparent;
	}
}
#skill {
	margin: auto;
	list-style: none;
	position: relative;
	line-height: 2em;
}

#skill li { 
	background:#e9e5e2;
	height:20px; 
	border-radius:10px; 	 
	box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;
}

#skill li h3 { 
	position:relative; 
	top:-25px;
}

.bar { 
	height:16px; 
	margin:1px 2px;  
	position:absolute;
	border-radius:10px;	 
	box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;		
}

.graphic-design {
	width:100%; 
	background-color: #99CC66;
}
#temporizador{
	display: none;
	min-height: 100vh;
	position: relative;
}
#numero{
	top: 40%;
	left: 50%;
	position: absolute;
	font-size:45px;
}
</style>