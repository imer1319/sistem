<template>
	<div class="container">
		<div id="nivel-1">
			<div>tabla</div>
			<form>
				<input type="button" id="enviar" value="crear tabla" @click.prevent="crear()"/>
				<input type="button" id="limpiar" value="Limpiar" @click.prevent="crear2()"/>
			</form>
			<div class="row">
				<div class="col-md-8 m-auto">
					<div id="resultado"></div>
				</div>
			</div>
			<div class="row mt-1">
				<div class="d-flex m-auto">
					<span class="col-6 text-md-right">
						<span class="btn btn-primary">Iguales</span>
					</span>
					<span class="col-6 text-md-left">
						<span class="btn btn-primary">diferentes</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		created(){
			this.barajarposicion1()
		},
		data(){
			return{
				correcto:[0,1],
				son_iguales:null,
				letras:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'],
			}
		},
		methods:{
			barajarposicion1(){
				var rand = Math.floor(Math.random()*this.correcto.length)
				console.log(this.correcto[rand])
				var letra_rand_seleccionado = Math.floor(Math.random()*this.letras.length)
				console.log(this.letras[letra_rand_seleccionado])
			},
			crear(){

				var tabla="<table class='tabb m-auto'>";
				for(var i=0;i<7;i++){
					tabla+="<tr>";
					for(var j=0;j<7;j++){
						var rand = Math.floor(Math.random()*this.letras.length)
						if ((i == 3 && j == 4) || (i == 4 && j == 3) || (i == 2 && j == 3) || (i == 3 && j == 2)) {
							tabla+="<td class='tdd'>"+"<div class='sep color'>"+4+"</div>"+ "</td>";
						}else{

							tabla+="<td class='tdd'>"+"<div class='sep'>"+this.letras[rand]+"</div>"+ "</td>";
						}
					}
					tabla+="</tr>";
				}
				tabla+="</table>";
				document.getElementById("resultado").innerHTML=tabla;
			},
			crear2() {
				document.getElementById("resultado").innerHTML="";
			}
		},
	}
</script>
<style>
.color{
	background: #2d2d2d;
	color: white;
	border-radius: 50%;
	width: 100%;height: 100%;
	padding-top: 8px;
}
.tabb{
	table-layout: fixed;
	width: 280px;
}

.tdd {
	width: 40px;
	height: 40px;
	word-wrap: break-word;
	text-align: center;
}
</style>