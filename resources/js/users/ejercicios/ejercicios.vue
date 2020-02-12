<template>
	<div class="container">
		<div class="titulo">Ejercicios</div>
		<div class="row">
			<div class="col-6 col-md-4 col-lg-3 mt-4"
			v-for="(ejer, index) in ejercicios" :key="index">
			<router-link :to="ejer.url">
				<div class="card card-primary card-outline radio-card" :class="ejer.background">
					<div class="card-body box-profile">
						<img class="card-img-top img-responsive" :src="`/imagenes/ejercicios/${ejer.icon}`" width="100%">
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
				{name:'Parpadeo',icon:'schulte-letras.png',url:'/parpadeo',background:'color8'},
				{name:'vertical',icon:'schulte-letras.png',url:'/vertical',background:'color8'},
				{name:'horizontal',icon:'schulte-letras.png',url:'/horizontal',background:'color8'},
				{name:'aleatorio',icon:'schulte-letras.png',url:'/aleatorio',background:'color8'},
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