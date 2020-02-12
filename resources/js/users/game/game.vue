<template>
	<div class="container">
		<div class="titulo">Juegos</div>
		<div class="row">
			<div class="col-6 col-md-4 col-lg-3 mt-3"
			v-for="(game, index) in games" :key="index">
			<router-link :to="game.url">
				<div class="card radio-card" :class="game.background">
					<div class="card-body box-profile img-hover-zoom">
						<img class="card-img-top img-responsive" :src="`/imagenes/ejercicios/${game.icon}`"width="100%">
						<div class="card-block">
							<span class="text-bold text-center">{{ game.name }}</span>
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
				games: [
				{name:'schulte numeros',icon:'schulte-numeros.png',url:'/schult',background:'color8'},
				{name:'schulte letras',icon:'schulte-letras.png',url:'/schult-letra',background:'color8'},
				{name:'buscar palabras',icon:'buscar-palabras.png',url:'/buscar-palabra',background:'color8'},
				{name:'buscar numeros',icon:'buscar-numeros.png',url:'/buscar-numero',background:'color8'},
				{name:'recordar palabra',icon:'recordar-palabra.png',url:'/encuentra-palabra',background:'color8'},
				{name:'recordar numeros',icon:'recordar-numero.png',url:'/encuentra-numeros',background:'color8'},
				{name:'Par o Impar',icon:'par - impar.png',url:'/par-impar',background:'color8'},
				],
			}
		},
		methods:{

		}
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