<template>
	<div class="container">
		<h3>palabras en posicion vetical</h3>
		<div class="btn btn-primary" @click="empezar()">Empezar</div>
		<div class="row pt-1 contenedores mt-4">
			<div id="letras1" class="fuente col-6 text-left"></div>
			<div id="letras2" class="fuente col-6 text-right"></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				palabras:['Fresa','Naranja','Sandia','Mandarina','Piña','Platano','Cereza','Manzana'],
				intervalo:null,
				contador_salto:0,
				tiempo_30:30,
			}
		},
		methods:{
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
.fuente{
	font-weight: 600;
	font-size: 20px;
	line-height: 3.0;
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
	text-align: center;
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