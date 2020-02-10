<template>
	<div class="container">
		<div class="titulo">Juegos</div>
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3 mt-4"
			v-for="(game, index) in games" :key="index">
			<router-link :to="game.url">
				<div class="card" :class="game.background">
					<div class="card-body box-profile img-hover-zoom">
						<img class="card-img-top img-responsive" :src="`/imagenes/ejercicios/${game.icon}`" height="180" width="160">
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
				{name:'schultz',icon:'SCHULTEs.png',url:'/schult',background:'color8'},
				{name:'buscar palabras',icon:'busca-palabras.png',url:'/buscar-palabra',background:'color8'},
				{name:'buscar numeros',icon:'busca-numeros.png',url:'/buscar-numero',background:'color8'},
				{name:'Par e Impar',icon:'parpadeo.png',url:'/par-impar',background:'color8'},
				{name:'schulte-letras',icon:'schulte-words.png',url:'/schult-letra',background:'color8'},
				{name:'encuentra-palabra',icon:'schulte.png',url:'/encuentra-palabra',background:'color8'},
				{name:'encuentra-numeros',icon:'schulte.png',url:'/encuentra-numeros',background:'color8'},
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