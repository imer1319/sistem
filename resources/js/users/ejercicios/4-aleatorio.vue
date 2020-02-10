<template>
	<div class="container">
		<h3>palabras en posicion aleatorio</h3>
		<div class="btn btn-primary" @click="empezar()">Empezar</div>
		<div class="row">
			<div id ="content">
				<div id ="animate"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				intervalo:null,
			}
		},
		methods:{
			empezar(){
				this.intervalo = setInterval(this.intervalo_aleatorio,1000)
			},
			intervalo_aleatorio(){
				var rand1 = Math.floor(Math.random()*290)
				var rand2 = Math.floor(Math.random()*290)
				var letr = document.getElementById("animate")
				letr.style.top = rand1 + "px"; 
				letr.style.left = rand2 + "px";
			}
		}
	}
</script>
<style>
#content {
	width: 320px;
	height: 320px;
	position: relative;
	border: 2px solid #000;
	margin: auto;
}
#animate {
	position: absolute;
	background: red;
	height: 30px;
	width: 30px;
	border-radius: 50%;
}
</style>