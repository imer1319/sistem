<template>
	<div class="container-fluid">
		<div class="btn btn-primary" @click="iniciar()">Iniciar</div>
		<div class="row">
			<div class="col-md-10 m-auto">
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
					indice.innerHTML += "<span class='content py-1'><span class='bordeare py-1 px-2'>"+this.palabras[i]+" "+"</span></span>"
				}
				indice.innerHTML+="</br>"
				indice.innerHTML+="<hr>"
				for (var i = 0; i < this.palabras.length; i++) {
					if (i % 2 == 0) {
						indice.innerHTML += "<span class='content py-1'><span class='bordeare px-2 py-1'>"+this.palabras[i]+" "+this.palabras[i+1]+"</span></span>"
						i++
					}
				}
			}
		}
	}
</script>
<style>
.content{
	line-height: 3.0;
	margin-right: 5px;
}
.bordeare{
	border: 4px solid #000;
	font-size: 18px;
}
</style>