<template>
	<div class="container">
		<div class="col-12 container-fluid">
			<button type="button" class="btn btn-dark text-uppercase" onClick="history.back()">Regresar</button>
		</div>
		<h5 class="text-center">Puntuaciones de examen</h5>
		<div v-for="(punt,index) in puntuaciones">
			<div class="card col-12 col-md-8 mx-auto mb-2">
				<div class="card-body">
					<div class="row">
						<div class="col-6">Titulo</div>
						<div class="col-6">{{ punt.name }}</div>
						<hr>
						<div class="col-6">ppm</div>
						<div class="col-6">{{ punt.pivot.ppm }}</div>
						<hr>
						<div class="col-6">Comprension</div>
						<div class="col-6">{{ punt.pivot.comprension }}<b class="h5"> %</b></div>
						<hr>
						<div class="col-6">tiempo</div>
						<div class="col-6">{{ punt.pivot.tiempo }}<b class="h5"> segundos</b></div>
						<hr>
						<div class="col-6">fecha</div>
						<div class="col-6">{{ punt.pivot.created_at }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		created:function() {
			this.puntuacionExamen()
		},
		data(){
			return{
				puntuaciones:[],
			}
		},
		methods:{
			puntuacionExamen(){
				var url = '/puntuacionExamen';
				axios.get(url).then(res =>{
					this.puntuaciones = res.data

				})
			},
		},
	}
</script>