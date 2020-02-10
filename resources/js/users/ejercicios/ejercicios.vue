<template>
	<div class="container">
		<div class="titulo">Ejercicios</div>
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3 mt-4"
			v-for="(ejer, index) in ejercicios" :key="index">
			<router-link :to="ejer.url">
				<div class="card card-primary card-outline" :class="ejer.background">
					<div class="card-body box-profile">
						<img class="card-img-top img-responsive" :src="`/imagenes/ejercicios/${ejer.icon}`" height="180" width="160">
						<div class="card-block">
							<span class="text-bold text-center">{{ ejer.name }}</span>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data() {
			return { 
				ejercicios: [
				{name:'Parpadeo',icon:'SCHULTEs.png',url:'/parpadeo',background:'color7'},
				{name:'vertical',icon:'busca-palabras.png',url:'/vertical',background:'color7'},
				{name:'horizontal',icon:'busca-palabras.png',url:'/horizontal',background:'color7'},
				{name:'aleatorio',icon:'busca-palabras.png',url:'/aleatorio',background:'color7'},
				],
			}
		},
	}
</script>
<style>
.color7{
	background: #0078A7;
	color: white;
	text-transform: uppercase;
	font-weight: 800;
	font-size: 12px;
	text-align: center;
}
</style>