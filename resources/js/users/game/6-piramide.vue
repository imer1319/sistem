<template>
	<div class="container-fluid">
		<div class="btn btn-primary" @click="iniciar()">Iniciar</div>
		<div class="row">
			<div class="col-md-10 text-center">
				<div id="palabra"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				palabras:['Que','Ganado','Socorro','Lobotomía','Corazón','Cadera','Red','Patinar','Vegetal','Negativo','Arreglar','Erosión','Elástico','Campera','Preciosa','Pantera','Grabador','Galleta','Olvidarse','Actor','Hormonas','Pozo','Naranja','Derecha'],
			}
		},
		methods:{
			iniciar(){
				var indice = document.getElementById("palabra")
				for (var i = 0; i < this.palabras.length; i++) {
					indice.innerHTML += this.palabras[i]+" "
					i++
					indice.innerHTML += this.palabras[i]+" "
					indice.innerHTML += "</br>";
				}
			}
		}
	}
</script>