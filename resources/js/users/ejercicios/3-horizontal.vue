<template>
	<div class="container">
		<h3>palabras en posicion horizontal</h3>
		<div class="btn btn-primary" @click="empezar()">Empezar</div>
		<div id="letras"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				palabras:['Numerar','Mortal','Raqueta','Radical','Exhibición','Bajón','Sortija','Agrupar','Seguridad','Fila','Humano','Escalera','Tostadas','Ensalada','Cajonera','Glándulas','Brújula','Tenedor','Chupete','Cuaderno','Apilar','Manzana'],
				intervalo:null,
				contador_salto:0,
			}
		},
		methods:{
			empezar(){
				this.intervalo = setInterval(this.intervalo_vertical,1000)
			},
			intervalo_vertical(){
				if (this.contador_salto < 6) {
					this.contador_salto++
					var letra = document.getElementById("letras")
					var random = Math.floor(Math.random()*this.palabras.length)
					letra.innerHTML+= this.palabras[random]+" "
				}else{
					this.contador_salto = 1
					var letra = document.getElementById("letras")
					var random = Math.floor(Math.random()*this.palabras.length)
					letra.innerHTML = this.palabras[random]+" "
				}
			},
		}
	}
</script>