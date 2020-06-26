<template>
	<div class="conteiner-fluid">
		<h3>piramide</h3>
		<div class="btn btn-primary"@click.prevent="empezar()">Empezar</div>
		<div class="text-center">
			<p class="lead" id="piramides"></p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				recorrer:0,
				intervalo:null,
				piramide1:['La','primavera','ya','no','es','mi','estación','favorita'],
				piramide2:['Nieva','como', 'hace','mucho','tiempo','no','lo','hacía'],
				piramide3:['Desayunando','cereales','con','leche','tu','día','será','mejor'],
				piramide4:['Mi','hijo','Israel','tiene','cinco','años','y','es','muy','guapo'],
				piramide5:['El','perro','de','mi','vecina','agacha','las','orejas','siempre','que','me','ve'],
			}
		},
		methods:{
			empezar(){
				this.intervalo = setInterval(this.getPiramides,1500)
			},
			getPiramides(){
				if (this.recorrer >= 8) {
					clearInterval(this.intervalo)
				}else{
					let piramide = document.getElementById("piramides")
					for (var i = 0; i <= this.recorrer; i++) {
						piramide.innerHTML+=this.piramide3[i]+" "
					}
					piramide.innerHTML+="</br>"
					this.recorrer++
				}
			},

		}
	}
</script>