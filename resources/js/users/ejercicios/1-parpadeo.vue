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
				contador_normal:30,
				contador_dificil:30,
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
						this.interval_letra = setInterval(this.interval_consonantes_facil,1000)
						break
						case 'normal':
						document.getElementById("separar").style.width = '200px'
						this.interval_letra = setInterval(this.interval_consonantes_normal,1000)
						break
						case 'avanzado':
						document.getElementById("separar").style.width = '250px'
						this.interval_letra = setInterval(this.interval_consonantes_avanzado,1000)
						break
					}
				}
				if (this.selected_A == 'numeros') {
					switch(this.selected_B){
						case 'facil':
						document.getElementById("separar").style.width = '150px'
						this.interval_letra = setInterval(this.interval_numeros_facil,1000)
						break
						case 'normal':
						document.getElementById("separar").style.width = '200px'
						this.interval_letra = setInterval(this.interval_numeros_normal,1000)
						break
						case 'avanzado':
						document.getElementById("separar").style.width = '250px'
						this.interval_letra = setInterval(this.interval_numeros_avanzado,1000)
						break
					}
				}
				if (this.selected_A == 'palabras') {
					switch(this.selected_B){
						case 'facil':
						document.getElementById("separar").style.display = 'none'
						this.interval_letra = setInterval(this.interval_palabras_facil,1000)
						break
						case 'normal':
						document.getElementById("separar").style.display = 'none'
						this.interval_letra = setInterval(this.interval_palabras_normal,1000)
						break
						case 'avanzado':
						document.getElementById("separar").style.display = 'none'
						this.interval_letra = setInterval(this.interval_palabras_dificil,1000)
						break
					}
				}
			},
			interval_consonantes_facil(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.consonantes.length)
				var rand2 = Math.floor(Math.random()*this.vocales.length)
				conso.innerHTML = this.consonantes[rand1]
				vocal.innerHTML = this.vocales[rand2]
				this.contador_facil--
				if (this.contador_facil <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_consonantes_normal(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.consonantes.length)
				var rand2 = Math.floor(Math.random()*this.vocales.length)
				conso.innerHTML = this.consonantes[rand1]
				vocal.innerHTML = this.vocales[rand2]
				this.contador_normal--
				if (this.contador_normal <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_consonantes_avanzado(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.consonantes.length)
				var rand2 = Math.floor(Math.random()*this.vocales.length)
				conso.innerHTML = this.consonantes[rand1]
				vocal.innerHTML = this.vocales[rand2]
				this.contador_dificil--
				if (this.contador_dificil <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_numeros_facil(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.numeros.length)
				var rand2 = Math.floor(Math.random()*this.numeros.length)
				conso.innerHTML = this.numeros[rand1]
				vocal.innerHTML = this.numeros[rand2]
				this.contador_facil--
				if (this.contador_facil <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_numeros_normal(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.numeros.length)
				var rand2 = Math.floor(Math.random()*this.numeros.length)
				conso.innerHTML = this.numeros[rand1]
				vocal.innerHTML = this.numeros[rand2]
				this.contador_normal--
				if (this.contador_normal <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_numeros_avanzado(){
				var conso = document.getElementById("letra1")
				var vocal = document.getElementById("letra2")
				var rand1 = Math.floor(Math.random()*this.numeros.length)
				var rand2 = Math.floor(Math.random()*this.numeros.length)
				conso.innerHTML = this.numeros[rand1]
				vocal.innerHTML = this.numeros[rand2]
				this.contador_dificil--
				if (this.contador_dificil <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_palabras_facil(){
				var rand2 = Math.floor(Math.random()*this.palabras_facil.length)
				conso.innerHTML = this.palabras_facil[rand2]
				this.contador_facil--
				if (this.contador_facil <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_palabras_normal(){
				var conso = document.getElementById("letra1")
				var rand2 = Math.floor(Math.random()*this.palabras_media.length)
				conso.innerHTML = this.palabras_media[rand2]
				this.contador_normal--
				if (this.contador_normal <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			interval_palabras_dificil(){
				var conso = document.getElementById("letra1")
				var rand2 = Math.floor(Math.random()*this.palabras_avanzada.length)
				conso.innerHTML = this.palabras_avanzada[rand2]
				this.contador_dificil--
				if (this.contador_dificil <= 0) {
					clearInterval(this.interval_letra)
					this.interval_letra = null
					document.getElementById("primera-vista").style.display='none'
					document.getElementById("segunda-vista").style.display='flex'
				}
			},
			
		},	
		beforeDestroy: function () {
			clearInterval(this.interval_letra)
		}
	}	
</script>
<style>
#segunda-vista{
	display: none;
}
</style>
