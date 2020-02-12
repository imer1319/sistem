<template>
	<div class="container">
		<div id="primera-vista">
			<div class="row m-auto">
				<h3>palabras en posicion vetical</h3>
				<div class="btn btn-primary pb-0" @click="empezar()">Empezar</div>
			</div>
			<div class="row pt-1 contenedores mt-4">
				<div id="letras1" class="fuente col-6 text-left"></div>
				<div id="letras2" class="fuente col-6 text-right"></div>
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
				palabras:['Fresa','Naranja','Sandia','Mandarina','Piña','Platano','Cereza','Manzana'],
				intervalo:null,
				contador_salto:0,
				tiempo_30:30,
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
				this.intervalo = setInterval(this.intervalo_vertical,500)
			},
			intervalo_vertical(){
				if (this.contador_salto < 10) {
					if (this.contador_salto<5) {
						this.contador_salto++
						var letra = document.getElementById("letras1")
						var random = Math.floor(Math.random()*this.palabras.length)
						letra.innerHTML+= this.palabras[random]+"</br>"
					}else if (this.contador_salto == 5) {
						this.contador_salto++
						var letra = document.getElementById("letras2")
						var random = Math.floor(Math.random()*this.palabras.length)
						letra.innerHTML = this.palabras[random]+"</br>"
					}else if (this.contador_salto > 5) {
						this.contador_salto++
						var letra = document.getElementById("letras2")
						var random = Math.floor(Math.random()*this.palabras.length)
						letra.innerHTML += this.palabras[random]+"</br>"
					}
				}else{
					this.contador_salto = 1
					var letra = document.getElementById("letras1")
					var random = Math.floor(Math.random()*this.palabras.length)
					letra.innerHTML = this.palabras[random]+"</br>"
				}
				this.tiempo_30--
				if (this.tiempo_30 <= 0) {
					clearInterval(this.intervalo)
				}
			},
		}
	}
</script>
<style>
#segunda-vista{
	display: none;
}
</style>