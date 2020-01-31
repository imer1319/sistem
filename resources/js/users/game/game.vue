<template>
	<div class="container">
		<h3>este son los game</h3>
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3 mt-4"
			v-for="(game, index) in games" :key="index">
			<div class="card card-primary card-outline">
				<div class="card-body box-profile">
					<img class="card-img-top img-responsive" :src="`/imagenes/ejercicios/${game.icon}`" height="150">
					<div class="card-block">
						<h5 class="text-bold text-center">{{ game.name }}</h5>
					</div>
					<div class="text-center">
						<router-link :to="game.url" class="btn btn-info">Empezar</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data() {
			return { 
				games: [
					{name:'schultz',icon:'schulte.png',url:'/schult'},
					{name:'buscar palabras',icon:'parpadeo.png',url:'/buscar-palabra'},
					{name:'buscar numeros',icon:'parpadeo.png',url:'/buscar-numero'},
					{name:'Par e Impar',icon:'parpadeo.png',url:'/par-impar'},
					{name:'Borde de palabra',icon:'schulte.png',url:'/borde-palabra'},
					{name:'palabra-piramide',icon:'schulte.png',url:'/palabra-piramide'},
					{name:'campo-visual',icon:'schulte.png',url:'/campo-visual'},
					{name:'schulte-letras',icon:'schulte.png',url:'/schult-letra'},
					{name:'encuentra-palabra',icon:'schulte.png',url:'/encuentra-palabra'},
					{name:'encuentra-numeros',icon:'schulte.png',url:'/encuentra-numeros'},
					],
			}
		},
		methods:{

		}
	}
</script>