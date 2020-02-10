<template>
	<div class="container">
		<div id="primera-vista">
			<div class="row m-auto">
				<div class="col-md-4">
					<select v-model="selected_A" class="form-control">
						<option>letras</option>
						<option>numeros</option>
						<option>palabras</option>
					</select>
				</div>
				<div class="col-md-4">
					<select v-model="selected_B" class="form-control">
						<option>facil</option>
						<option>normal</option>
						<option>avanzado</option>
					</select>
				</div>
				<div class="col-md-4">
					<div class="btn btn-primary" @click="empezar()">Empezar</div>
				</div>
			</div>
			<div class="row pt-1 contenedores mt-4">
				<div id="letra1" class="fuente"></div>
				<div class="separador" id="separar"></div>
				<div id="letra2" class="fuente"></div>
			</div>
		</div>
		<div id="segunda-vista">
			<div class="card animated bounceInRight">
				<div class="card-body">
					<div class="col-8 m-auto text-center">
						<form v-on:submit.prevent="actualizarDatos()">
							<h3 class="text-uppercase">Se acabo el tiempo</h3>
							<img src="imagenes/relogarena.png" alt="" width="40%">
							<h4>Aumento: <b>+</b> 7</h4><hr>
							<input type="submit"value="Volver al inicio" class="btn btn-primary btn-block btn-lg">
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		created(){
			this.obtener_datos_usuario()
		},
		data(){
			return{
				selected_A: 'letras',
				selected_B: 'facil',
				consonantes:['B','C','D','F','G','H','J','K','L','M','Ñ','P','Q','R','S','T','V','W','X','Y','Z'],
				vocales:['A','E','I','O','U'],
				numeros:[1,2,3,4,5,6,7,8,9,0],
				palabras_facil:['alfa','algo','alto','alma','antes','balsa','banco','baño','barco','bello','beso','blusa','boca','cada','cama','caña','casa','casi','caso','claro','coco','coma','como','decir','dejar','desde','entrar','foca','foco','gente','hablar','hacer','hasta','lana','lápiz','leche','lento','leña','manco','mano','mayor','mejor','menos','mesa','nada','nadar','nena','nicho','niño','plomo','plata','pleno','padre','palco','para'],
				palabras_media:['comida','conocer','camello','corbata','corneta','cornisa','cortina','cuchilla','cursillo','docente','domingo','doncella','dormido','durante','escriba','escribir','espada','espalda','espeso','establo','estaca','estado','estaño','explicar','exprimir','hispano','interés','libreta','marrano','mercado','ministro','momento','nosotros','número','presentar','primero','problema','proceso','proclamar','proclamó','producir','programa','proyecto','público','pupitre','recordar','relación','sonata','sonido','soñado','soplado','soplete','sujeto','torero','tornado','torcidos','tormento','trabajar','trabajo','víbora','zapato'],
				palabras_avanzada:['absorbente','banderola','bañadera','barandilla','barbaridad','barbarismo','barítono','barredora','benévola','benévolo','bolígrafo','cartílago','celebrado','centígrado','cerebelo','colateral','comparecer','comunero','condenarlo','configurar','contenedor','corpúsculo','crepúsculo','derogado','desabrido','desarmado','desatrancar','descarnado','descentrado','desinfectar','desistido','fantástico','favorito','ganadero','generoso','intimidar','kilómetro','minúsculo','monigote','ordenador','platónico','putrefacto','simbólico','tranquilidad'],
				interval_letra:null,
				contador_facil:30,
				perfil_usuario:{}
			}
		},
		methods:{
			obtener_datos_usuario(){
				axios.get("/profile").then(res =>{
					this.perfil_usuario = res.data
				})
			},
			actualizarDatos(){
				let data = new FormData();
				data.append('puntos', this.perfil_usuario.puntos + 7);
				data.append('_method','PUT');
				var url = `/profile/${this.perfil_usuario.id}`
				axios.post(url, data).then(res=>{
					this.$router.push('home') 
				})
			},
			empezar(){
				if (this.selected_A == 'letras') {
					switch(this.selected_B){
						case 'facil':
						document.getElementById("separar").style.width = '150px'
						this.interval_letra = setInterval(this.interval_consonantes,1000)
						break
						case 'normal':
						document.getElementById("separar").style.width = '200px'
						this.interval_letra = setInterval(this.interval_consonantes,1000)
						break
						case 'avanzado':
						document.getElementById("separar").style.width = '250px'
						this.interval_letra = setInterval(this.interval_consonantes,1000)
						break
					}
				}else if (this.selected_A == 'numeros') {
					switch(this.selected_B){
						case 'facil':
						document.getElementById("separar").style.width = '150px'
						this.interval_letra = setInterval(this.interval_numeros,1000)
						break
						case 'normal':
						document.getElementById("separar").style.width = '200px'
						this.interval_letra = setInterval(this.interval_numeros,1000)
						break
						case 'avanzado':
						document.getElementById("separar").style.width = '250px'
						this.interval_letra = setInterval(this.interval_numeros,1000)
						break
					}
				}else if (this.selected_A == 'palabras') {
					switch(this.selected_B){
						case 'facil':
						document.getElementById("separar").style.display = 'none'
						this.interval_letra = setInterval(this.interval_palabras,1000)
						break
						case 'normal':
						document.getElementById("separar").style.display = 'none'
						this.interval_letra = setInterval(this.interval_palabras,1000)
						break
						case 'avanzado':
						document.getElementById("separar").style.display = 'none'
						this.interval_letra = setInterval(this.interval_palabras,1000)
						break
					}
				}
			},
			interval_consonantes(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.consonantes.length)
				var rand2 = Math.floor(Math.random()*this.vocales.length)
				conso.innerHTML = this.consonantes[rand1]
				vocal.innerHTML = this.vocales[rand2]
				if (this.selected_B == 'facil') {
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}else if (this.selected_B == 'medio') {
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}else if (this.selected_B == 'avanzado') {
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}
			},
			interval_numeros(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.numeros.length)
				var rand2 = Math.floor(Math.random()*this.numeros.length)
				conso.innerHTML = this.numeros[rand1]
				vocal.innerHTML = this.numeros[rand2]
				if (this.selected_B == 'facil') {
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}else if (this.selected_B == 'medio') {
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}else if (this.selected_B == 'avanzado') {
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}
			},
			interval_palabras(){
				if (this.selected_B == 'facil') {
					var rand2 = Math.floor(Math.random()*this.palabras_facil.length)
					conso.innerHTML = this.palabras_facil[rand2]
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}else if (this.selected_B == 'medio') {
					var conso = document.getElementById("letra1")
					var rand2 = Math.floor(Math.random()*this.palabras_media.length)
					conso.innerHTML = this.palabras_media[rand2]
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}else if (this.selected_B == 'avanzado') {
					var conso = document.getElementById("letra1")
					var rand2 = Math.floor(Math.random()*this.palabras_avanzada.length)
					conso.innerHTML = this.palabras_avanzada[rand2]
					this.contador_facil--
					if (this.contador_facil <= 0) {
						clearInterval(this.interval_letra)
						document.getElementById("primera-vista").style.display='none'
						document.getElementById("segunda-vista").style.display='flex'
					}
				}
			}
		}
	}	
</script>
<style>
.fuente{
	font-weight: 600;
	font-size: 20px;
}
.contenedores{
	padding: 20px;
	width: 600px;
	height: 300px;
	border: 2px solid #2d2d2d;
	background: white;
	display: flex;
	justify-content: center;
	margin: auto;
}
.separador{
	width: 120px;
}
@media screen and (max-width:425px) and (min-width:320px) {
	.contenedores{
		width: 100%;height: 340px;
	}
}
#segunda-vista{
	display: none;
}
</style>
