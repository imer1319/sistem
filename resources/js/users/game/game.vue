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
					{name:'parpadeo veloz',icon:'parpadeo.png',url:'/parpadeo'}
					],
				game: {name: '',content:'', icon:''},
				loading:true,
			}
		},
		methods:{

		}
	}
</script>