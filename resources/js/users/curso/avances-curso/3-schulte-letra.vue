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
				<router-link to="/curso" class="btn btn-dark text-uppercase text-white">
					Regresar
				</router-link>
				<div id="temporizador">
					<h3 id="numero">{{ contador }}</h3>
				</div>
				<div class="text-center">
					<h5>Req : <strong>{{ requierePuntuacion }}</strong></h5>
				</div>
				<div id="empezando">
					<div class="col-sm-5 col-md-5">
						<h5>Puntuacion : <strong>{{ puntuacion }}</strong></h5>
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
					<h4>Buscando : <strong id="busca-letra"></strong></h4>
				</div>
				<div class="row">
					<div v-show="pasos == 1" class="col-md-8 col-sm-12 m-auto" id="tabla1">
						<table class="table table-bordered fixed-table">
							<tr>
								<td class="td" @click="press_1($event)" id="a1"></td>
								<td class="td" @click="press_1($event)" id="b1"></td>
								<td class="td" @click="press_1($event)" id="c1"></td>
							</tr>
							<tr>
								<td class="td" @click="press_1($event)" id="d1"></td>
								<td class="td" @click="press_1($event)" id="e1"></td>
								<td class="td" @click="press_1($event)" id="f1"></td>
							</tr>
							<tr>
								<td class="td" @click="press_1($event)" id="g1"></td>
								<td class="td" @click="press_1($event)" id="h1"></td>
								<td class="td" @click="press_1($event)" id="i1"></td>
							</tr>
						</table>
					</div>
					<div v-show="pasos == 2 "class="col-md-8 col-sm-12 m-auto">
						<table class="table table-bordered fixed-table">
							<tr>
								<td class="td" @click="press_2($event)" id="a2"></td>
								<td class="td" @click="press_2($event)" id="b2"></td>
								<td class="td" @click="press_2($event)" id="c2"></td>
								<td class="td" @click="press_2($event)" id="d2"></td>
							</tr>
							<tr>
								<td class="td" @click="press_2($event)" id="e2"></td>
								<td class="td" @click="press_2($event)" id="f2"></td>
								<td class="td" @click="press_2($event)" id="g2"></td>
								<td class="td" @click="press_2($event)" id="h2"></td>
							</tr>
							<tr>
								<td class="td" @click="press_2($event)" id="i2"></td>
								<td class="td" @click="press_2($event)" id="j2"></td>
								<td class="td" @click="press_2($event)" id="k2"></td>
								<td class="td" @click="press_2($event)" id="l2"></td>
							</tr>
							<tr>
								<td class="td" @click="press_2($event)" id="m2"></td>
								<td class="td" @click="press_2($event)" id="n2"></td>
								<td class="td" @click="press_2($event)" id="o2"></td>
								<td class="td" @click="press_2($event)" id="p2"></td>
							</tr>
						</table>
					</div>
					<div v-show="pasos == 3" class="col-md-8 col-sm-12 m-auto">
						<table class="table table-bordered fixed-table">
							<tr>
								<td class="td" @click="press_3($event)" id="a3"></td>
								<td class="td" @click="press_3($event)" id="b3"></td>
								<td class="td" @click="press_3($event)" id="c3"></td>
								<td class="td" @click="press_3($event)" id="d3"></td>
								<td class="td" @click="press_3($event)" id="e3"></td>
							</tr>
							<tr>
								<td class="td" @click="press_3($event)" id="f3"></td>
								<td class="td" @click="press_3($event)" id="g3"></td>
								<td class="td" @click="press_3($event)" id="h3"></td>
								<td class="td" @click="press_3($event)" id="i3"></td>
								<td class="td" @click="press_3($event)" id="j3"></td>
							</tr>
							<tr>
								<td class="td" @click="press_3($event)" id="k3"></td>
								<td class="td" @click="press_3($event)" id="l3"></td>
								<td class="td" @click="press_3($event)" id="m3"></td>
								<td class="td" @click="press_3($event)" id="n3"></td>
								<td class="td" @click="press_3($event)" id="o3"></td>
							</tr>
							<tr>
								<td class="td" @click="press_3($event)" id="p3"></td>
								<td class="td" @click="press_3($event)" id="q3"></td>
								<td class="td" @click="press_3($event)" id="r3"></td>
								<td class="td" @click="press_3($event)" id="s3"></td>
								<td class="td" @click="press_3($event)" id="t3"></td>
							</tr>
							<tr>
								<td class="td" @click="press_3($event)" id="u3"></td>
								<td class="td" @click="press_3($event)" id="v3"></td>
								<td class="td" @click="press_3($event)" id="w3"></td>
								<td class="td" @click="press_3($event)" id="x3"></td>
								<td class="td" @click="press_3($event)" id="y3"></td>
							</tr>
						</table>
					</div>
					<div v-show="pasos == 4" class="col-md-8 col-sm-12 m-auto">
						<table class="table table-bordered fixed-table">
							<tr>
								<td class="td" @click="press_4($event)" id="a4"></td>
								<td class="td" @click="press_4($event)" id="b4"></td>
								<td class="td" @click="press_4($event)" id="c4"></td>
								<td class="td" @click="press_4($event)" id="d4"></td>
								<td class="td" @click="press_4($event)" id="e4"></td>
							</tr>
							<tr>
								<td class="td" @click="press_4($event)" id="f4"></td>
								<td class="td" @click="press_4($event)" id="g4"></td>
								<td class="td" @click="press_4($event)" id="h4"></td>
								<td class="td" @click="press_4($event)" id="i4"></td>
								<td class="td" @click="press_4($event)" id="j4"></td>
							</tr>
							<tr>
								<td class="td" @click="press_4($event)" id="k4"></td>
								<td class="td" @click="press_4($event)" id="l4"></td>
								<td class="td" @click="press_4($event)" id="m4"></td>
								<td class="td" @click="press_4($event)" id="n4"></td>
								<td class="td" @click="press_4($event)" id="o4"></td>
							</tr>
							<tr>
								<td class="td" @click="press_4($event)" id="p4"></td>
								<td class="td" @click="press_4($event)" id="q4"></td>
								<td class="td" @click="press_4($event)" id="r4"></td>
								<td class="td" @click="press_4($event)" id="s4"></td>
								<td class="td" @click="press_4($event)" id="t4"></td>
							</tr>
							<tr>
								<td class="td" @click="press_4($event)" id="u4"></td>
								<td class="td" @click="press_4($event)" id="v4"></td>
								<td class="td" @click="press_4($event)" id="w4"></td>
								<td class="td" @click="press_4($event)" id="x4"></td>
								<td class="td" @click="press_4($event)" id="y4"></td>
							</tr>
							<tr>
								<td class="td" @click="press_4($event)" id="z4"></td>
								<td class="td" @click="press_4($event)" id="za4"></td>
								<td class="td" @click="press_4($event)" id="zb4"></td>
								<td class="td" @click="press_4($event)" id="zc4"></td>
								<td class="td" @click="press_4($event)" id="zd4"></td>
							</tr>
						</table>
					</div>
					<div v-show="pasos == 5"class="col-md-8 m-auto">
						<div class="card">
							<div class="card-body">
								<div class="col-8 m-auto text-center">
									<h3 class="text-uppercase">Se acabo el tiempo</h3>
									<img src="imagenes/relogarena.png" alt="" width="60%">
									<div class="btn btn-primary btn-block" @click.prevent="actualizarUsuario()">
										Ver resultados
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-show="pasos == 6" class="col-md-8 col-sm-12 m-auto">
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
								<h4>Calificación: {{ calificacion }} de 3</h4><hr>
								<h4>Puntuación: {{ puntuacion }}</h4><hr>
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
	</div>
</template>
<script>
	export default{
		created:function() {
			this.showUser()
			this.temporizame()
		},
		data(){
			return{
				nivel1: ['a','b','c','d','e','f','g','h','i'],
				nivel2:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
				nivel3:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'],
				nivel4:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','bb','cc','dd'],
				desordenar:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','bb','cc','dd'],
				ids1: ["a1","b1","c1","d1","e1","f1","g1","h1","i1"],
				ids2: ["a2","b2","c2","d2","e2","f2","g2","h2","i2","j2","k2","l2","m2","n2","o2","p2"],
				ids3: ["a3","b3","c3","d3","e3","f3","g3","h3","i3","j3","k3","l3","m3","n3","o3","p3","q3","r3","s3","t3","u3","v3","w3","x3","y3"],
				ids4: ["a4","b4","c4","d4","e4","f4","g4","h4","i4","j4","k4","l4","m4","n4","o4","p4","q4","r4","s4","t4","u4","v4","w4","x4","y4","z4","za4","zb4","zc4","zd4"],
				buscando:0,
				pasos:1,
				tiempo:100,
				miTiempo:0,
				puntuacion :0,
				miTemporizador:0,
				contador:3,
				busca_let:null,
				misRecords:[],
				maximoPunto:{},
				usuario:{},
				loading:true,
				requierePuntuacion:0,
				calificacion:0,
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
			actualizarUsuario(){
				if (this.puntuacion <= (this.requierePuntuacion / 2)) {
					this.calificacion = 1
				}
				if ((this.puntuacion > (this.requierePuntuacion / 2)) && (this.puntuacion < this.requierePuntuacion)) {
					this.calificacion = 2
				}
				if (this.puntuacion >= this.requierePuntuacion) {
					this.calificacion = 3
				}
				if (this.puntuacion >= this.requierePuntuacion){
					if ((this.usuario.avance_curso > 3 && this.usuario.avance_curso < 6) || (this.usuario.avance_curso > 18 && this.usuario.avance_curso < 21)){
						if (this.usuario.avance_curso == 4) {
							this.usuario.puntos += 20
							this.aumento_puntos = '+20 Pts'
						}else if (this.usuario.avance_curso == 5) {
							this.usuario.puntos += 25
							this.aumento_puntos = '+25 Pts'
						}else if (this.usuario.avance_curso == 19 || this.usuario.avance_curso == 20) {
							this.usuario.puntos += 80
							this.aumento_puntos = '+80 Pts'
						}
						this.aumento_avance = this.usuario.avance_curso+1
						let data = new FormData();
						data.append('avance_curso',this.aumento_avance);
						data.append('_method','PUT');
						var url = `/profile/${this.usuario.id}`
						axios.post(url, data).then(res=>{

						})
					}
				}
				this.pasos = 6
			},
			temporizame(){
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
				if(this.tiempo < 0 || this.buscando == 31){
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

				if (this.usuario.avance_curso < 15) {
					this.requierePuntuacion = 70
				}else if (this.usuario.avance_curso >= 15) {
					this.requierePuntuacion = 100
				}

				this.busca_let = document.getElementById("busca-letra")
				this.busca_let.style.display='inline'
				this.busca_let.innerHTML=this.desordenar[this.buscando]
				this.nivel1 = this.nivel1.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.nivel1.length; i++) {
					var dist = document.getElementById(this.ids1[i])
					dist.innerHTML=this.nivel1[i]
				}
				this.miTiempo = setInterval(this.cronometro,1000);
			},
			mostrar2(){
				this.nivel2 = this.nivel2.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.nivel2.length; i++) {
					var dist = document.getElementById(this.ids2[i])
					dist.innerHTML=this.nivel2[i]
				}
			},
			mostrar3(){
				this.nivel3 = this.nivel3.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.nivel3.length; i++) {
					var dist = document.getElementById(this.ids3[i])
					dist.innerHTML=this.nivel3[i]
				}
			},
			mostrar4(){
				this.nivel4 = this.nivel4.sort(function(){return Math.random()-0.5})
				for (var i = 0; i <this.nivel4.length; i++) {
					var dist = document.getElementById(this.ids4[i])
					dist.innerHTML=this.nivel4[i]
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
					if (this.nivel1[0]==this.desordenar[this.buscando]){ a.innerHTML="";this.puntuacion++; this.buscando++;  this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(a);}
					break;
					case "b1":
					var b = document.getElementById("b1");
					if (this.nivel1[1]==this.desordenar[this.buscando]){b.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(b);}
					break;
					case "c1":
					var c = document.getElementById("c1");
					if (this.nivel1[2]==this.desordenar[this.buscando]){c.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(c);}
					break;
					case "d1":
					var d = document.getElementById("d1");
					if (this.nivel1[3]==this.desordenar[this.buscando]){d.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(d);}
					break;
					case "e1":
					var e = document.getElementById("e1");
					if (this.nivel1[4]==this.desordenar[this.buscando]){e.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(e);}
					break;
					case "f1":
					var f = document.getElementById("f1");
					if (this.nivel1[5]==this.desordenar[this.buscando]){f.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(f);}
					break;
					case "g1":
					var g = document.getElementById("g1");
					if (this.nivel1[6]==this.desordenar[this.buscando]){g.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(g);}
					break;
					case "h1":
					var h = document.getElementById("h1");
					if (this.nivel1[7]==this.desordenar[this.buscando]){h.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(h);}
					break;
					case "i1":
					var i = document.getElementById("i1");
					if (this.nivel1[8]==this.desordenar[this.buscando]){i.innerHTML=""; this.puntuacion++; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(i);}
					break;
				}
			},
			press_2(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a2":
					var a = document.getElementById("a2");
					if (this.nivel2[0]==this.desordenar[this.buscando]){ a.innerHTML=""; this.puntuacion+=2; this.buscando++;  this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(a);}
					break;
					case "b2":
					var b = document.getElementById("b2");
					if (this.nivel2[1]==this.desordenar[this.buscando]){b.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(b);}
					break;
					case "c2":
					var c = document.getElementById("c2");
					if (this.nivel2[2]==this.desordenar[this.buscando]){c.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(c);}
					break;
					case "d2":
					var d = document.getElementById("d2");
					if (this.nivel2[3]==this.desordenar[this.buscando]){d.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(d);}
					break;
					case "e2":
					var e = document.getElementById("e2");
					if (this.nivel2[4]==this.desordenar[this.buscando]){e.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(e);}
					break;
					case "f2":
					var f = document.getElementById("f2");
					if (this.nivel2[5]==this.desordenar[this.buscando]){f.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(f);}
					break;
					case "g2":
					var g = document.getElementById("g2");
					if (this.nivel2[6]==this.desordenar[this.buscando]){g.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(g);}
					break;
					case "h2":
					var h = document.getElementById("h2");
					if (this.nivel2[7]==this.desordenar[this.buscando]){h.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(h);}
					break;
					case "i2":
					var i = document.getElementById("i2");
					if (this.nivel2[8]==this.desordenar[this.buscando]){i.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(i);}
					break;
					case "j2":
					var j = document.getElementById("j2");
					if (this.nivel2[9]==this.desordenar[this.buscando]){j.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(j);}
					break;
					case "k2":
					var k = document.getElementById("k2");
					if (this.nivel2[10]==this.desordenar[this.buscando]){k.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(k);}
					break;
					case "l2":
					var l = document.getElementById("l2");
					if (this.nivel2[11]==this.desordenar[this.buscando]){l.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(l);}
					break;
					case "m2":
					var m = document.getElementById("m2");
					if (this.nivel2[12]==this.desordenar[this.buscando]){m.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(m);}
					break;
					case "n2":
					var n = document.getElementById("n2");
					if (this.nivel2[13]==this.desordenar[this.buscando]){n.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(n);}
					break;
					case "o2":
					var o = document.getElementById("o2");
					if (this.nivel2[14]==this.desordenar[this.buscando]){o.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(o);}
					break;
					case "p2":
					var p = document.getElementById("p2");
					if (this.nivel2[15]==this.desordenar[this.buscando]){p.innerHTML=""; this.puntuacion+=2; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(p);}
					break;
				}
			},
			press_3(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a3":
					var a = document.getElementById("a3");
					if (this.nivel3[0] == this.desordenar[this.buscando]){ a.innerHTML="";this.puntuacion+=3; this.buscando++;  this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(a);}
					break;
					case "b3":
					var b = document.getElementById("b3");
					if (this.nivel3[1] == this.desordenar[this.buscando]){b.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(b);}
					break;
					case "c3":
					var c = document.getElementById("c3");
					if (this.nivel3[2] == this.desordenar[this.buscando]){c.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(c);}
					break;
					case "d3":
					var d = document.getElementById("d3");
					if (this.nivel3[3] == this.desordenar[this.buscando]){d.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(d);}
					break;
					case "e3":
					var e = document.getElementById("e3");
					if (this.nivel3[4] == this.desordenar[this.buscando]){e.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(e);}
					break;
					case "f3":
					var f = document.getElementById("f3");
					if (this.nivel3[5] == this.desordenar[this.buscando]){f.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(f);}
					break;
					case "g3":
					var g = document.getElementById("g3");
					if (this.nivel3[6] == this.desordenar[this.buscando]){g.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(g);}
					break;
					case "h3":
					var h = document.getElementById("h3");
					if (this.nivel3[7] == this.desordenar[this.buscando]){h.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(h);}
					break;
					case "i3":
					var i = document.getElementById("i3");
					if (this.nivel3[8] == this.desordenar[this.buscando]){i.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(i);}
					break;
					case "j3":
					var j = document.getElementById("j3");
					if (this.nivel3[9] == this.desordenar[this.buscando]){j.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(j);}
					break;
					case "k3":
					var k = document.getElementById("k3");
					if (this.nivel3[10] == this.desordenar[this.buscando]){k.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(k);}
					break;
					case "l3":
					var l = document.getElementById("l3");
					if (this.nivel3[11] == this.desordenar[this.buscando]){l.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(l);}
					break;
					case "m3":
					var m = document.getElementById("m3");
					if (this.nivel3[12] == this.desordenar[this.buscando]){m.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(m);}
					break;
					case "n3":
					var n = document.getElementById("n3");
					if (this.nivel3[13] == this.desordenar[this.buscando]){n.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(n);}
					break;
					case "o3":
					var o = document.getElementById("o3");
					if (this.nivel3[14] == this.desordenar[this.buscando]){o.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(o);}
					break;
					case "p3":
					var p = document.getElementById("p3");
					if (this.nivel3[15] == this.desordenar[this.buscando]){p.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(p);}
					break;
					case "q3":
					var q = document.getElementById("q3");
					if (this.nivel3[16] == this.desordenar[this.buscando]){q.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(q);}
					break;
					case "r3":
					var r = document.getElementById("r3");
					if (this.nivel3[17] == this.desordenar[this.buscando]){r.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(r);}
					break;
					case "s3":
					var s = document.getElementById("s3");
					if (this.nivel3[18] == this.desordenar[this.buscando]){s.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(s);}
					break;
					case "t3":
					var t = document.getElementById("t3");
					if (this.nivel3[19] == this.desordenar[this.buscando]){t.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(t);}
					break;
					case "u3":
					var u = document.getElementById("u3");
					if (this.nivel3[20] == this.desordenar[this.buscando]){u.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(u);}
					break;
					case "v3":
					var v = document.getElementById("v3");
					if (this.nivel3[21] == this.desordenar[this.buscando]){v.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(v);}
					break;
					case "w3":
					var w = document.getElementById("w3");
					if (this.nivel3[22] == this.desordenar[this.buscando]){w.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(w);}
					break;
					case "x3":
					var x = document.getElementById("x3");
					if (this.nivel3[23] == this.desordenar[this.buscando]){x.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(x);}
					break;
					case "y3":
					var y = document.getElementById("y3");
					if (this.nivel3[24] == this.desordenar[this.buscando]){y.innerHTML=""; this.puntuacion+=3; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(y);}
					break;
				}
			},
			press_4(event){
				var targetId = event.currentTarget.id;
				switch (targetId) {
					case "a4":
					var a = document.getElementById("a4");
					if (this.nivel4[0] == this.desordenar[this.buscando]){ a.innerHTML="";this.puntuacion+=4; this.buscando++;  this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(a);}
					break;
					case "b4":
					var b = document.getElementById("b4");
					if (this.nivel4[1] == this.desordenar[this.buscando]){b.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(b);}
					break;
					case "c4":
					var c = document.getElementById("c4");
					if (this.nivel4[2] == this.desordenar[this.buscando]){c.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(c);}
					break;
					case "d4":
					var d = document.getElementById("d4");
					if (this.nivel4[3] == this.desordenar[this.buscando]){d.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(d);}
					break;
					case "e4":
					var e = document.getElementById("e4");
					if (this.nivel4[4] == this.desordenar[this.buscando]){e.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(e);}
					break;
					case "f4":
					var f = document.getElementById("f4");
					if (this.nivel4[5] == this.desordenar[this.buscando]){f.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(f);}
					break;
					case "g4":
					var g = document.getElementById("g4");
					if (this.nivel4[6] == this.desordenar[this.buscando]){g.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(g);}
					break;
					case "h4":
					var h = document.getElementById("h4");
					if (this.nivel4[7] == this.desordenar[this.buscando]){h.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(h);}
					break;
					case "i4":
					var i = document.getElementById("i4");
					if (this.nivel4[8] == this.desordenar[this.buscando]){i.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(i);}
					break;
					case "j4":
					var j = document.getElementById("j4");
					if (this.nivel4[9] == this.desordenar[this.buscando]){j.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(j);}
					break;
					case "k4":
					var k = document.getElementById("k4");
					if (this.nivel4[10] == this.desordenar[this.buscando]){k.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(k);}
					break;
					case "l4":
					var l = document.getElementById("l4");
					if (this.nivel4[11] == this.desordenar[this.buscando]){l.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(l);}
					break;
					case "m4":
					var m = document.getElementById("m4");
					if (this.nivel4[12] == this.desordenar[this.buscando]){m.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(m);}
					break;
					case "n4":
					var n = document.getElementById("n4");
					if (this.nivel4[13] == this.desordenar[this.buscando]){n.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(n);}
					break;
					case "o4":
					var o = document.getElementById("o4");
					if (this.nivel4[14] == this.desordenar[this.buscando]){o.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(o);}
					break;
					case "p4":
					var p = document.getElementById("p4");
					if (this.nivel4[15] == this.desordenar[this.buscando]){p.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(p);}
					break;
					case "q4":
					var q = document.getElementById("q4");
					if (this.nivel4[16] == this.desordenar[this.buscando]){q.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(q);}
					break;
					case "r4":
					var r = document.getElementById("r4");
					if (this.nivel4[17] == this.desordenar[this.buscando]){r.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(r);}
					break;
					case "s4":
					var s = document.getElementById("s4");
					if (this.nivel4[18] == this.desordenar[this.buscando]){s.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(s);}
					break;
					case "t4":
					var t = document.getElementById("t4");
					if (this.nivel4[19] == this.desordenar[this.buscando]){t.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(t);}
					break;
					case "u4":
					var u = document.getElementById("u4");
					if (this.nivel4[20] == this.desordenar[this.buscando]){u.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(u);}
					break;
					case "v4":
					var v = document.getElementById("v4");
					if (this.nivel4[21] == this.desordenar[this.buscando]){v.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(v);}
					break;
					case "w4":
					var w = document.getElementById("w4");
					if (this.nivel4[22] == this.desordenar[this.buscando]){w.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(w);}
					break;
					case "x4":
					var x = document.getElementById("x4");
					if (this.nivel4[23] == this.desordenar[this.buscando]){x.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(x);}
					break;
					case "y4":
					var y = document.getElementById("y4");
					if (this.nivel4[24] == this.desordenar[this.buscando]){y.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(y);}
					break;
					case "z4":
					var z = document.getElementById("z4");
					if (this.nivel4[25] == this.desordenar[this.buscando]){z.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(z);}
					break;
					case "za4":
					var za = document.getElementById("za4");
					if (this.nivel4[26] == this.desordenar[this.buscando]){za.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(za);}
					break;
					case "zb4":
					var zb = document.getElementById("zb4");
					if (this.nivel4[27] == this.desordenar[this.buscando]){zb.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(zb);}
					break;
					case "zc4":
					var zc = document.getElementById("zc4");
					if (this.nivel4[28] == this.desordenar[this.buscando]){zc.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(zc);}
					break;
					case "zd4":
					var zd = document.getElementById("zd4");
					if (this.nivel4[29] == this.desordenar[this.buscando]){zd.innerHTML=""; this.puntuacion+=4; this.buscando++; this.esUltimo(this.buscando);this.busca_let.innerHTML=this.desordenar[this.buscando]}else{this.error_Encontrado(zd);}
					break;
				}
			},
			esUltimo(numero){
				if(this.pasos == 1){
					if (this.buscando == 9) {
						this.buscando = 0
						this.pasos++
						this.mostrar2()
					}
				}else if(this.pasos == 2){
					if (this.buscando == 16) {
						this.buscando = 0
						this.pasos++
						this.mostrar3()
					}
				}else if(this.pasos == 3){
					if (this.buscando == 25) {
						this.buscando = 0
						this.pasos ++
						this.mostrar4()
					}
				}else if(this.pasos == 4){
					if (this.buscando == 30) {
						this.pasos = 5
					}
				}
			},
		},
		beforeDestroy: function () {
			clearInterval(this.miTiempo)
		}
	}
</script>
<style>
.border-right{
	border-right: 1px solid #dee2e6 !important;
}
#empezando , #empezando2 , #busca-letra{
	display: none;
}
#tabla1{
	display: none;
}
.fixed-table{
	table-layout: fixed;
}
.th ,.td {
	word-wrap: break-word;
	text-align: center;
	height: 65px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
}
.table-bordered {
	border: 1px solid #666666;
}
.table-bordered th, .table-bordered td {
	border: 1px solid #666666;
}
#temporizador{
	display: block;
	min-height: 100vh;
	position: relative;
}

</style>