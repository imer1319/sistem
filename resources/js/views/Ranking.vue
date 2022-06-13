<template>
	<div>
		<spinner v-if="loading"></spinner>
		<div v-else>
			<div class="col-12 container-fluid">
				<router-link class="btn btn-dark text-uppercase" to="/home">
					Regresar
				</router-link>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-5  mb-3 mt-2">
						<div class="text-center mb-3">
						<div class="card">
							<div class="card-body contenedor">
								<h2 class="text-center text-white">{{ user.name }}</h2>
								<div class="imagen">
									<img class="rounded-circle" :src="`/imagenes/usuario/${user.user_avatar}`">
								</div>
							</div>
							<div class="card-footer pt-5">
								<div class="row">
									<div class="col-6 border-right">
										<div class="description-block">
											<h5 class="description-header text-warning">
												<b># {{ user.position }}</b>
											</h5>
											<h5 class="description-text text-muted"><b>Puesto</b></h5>
										</div>
									</div>
									<div class="col-6">
										<div class="description-block">
											<h5 class="description-header text-warning">
												<b>{{ user.puntos }}</b>
											</h5>
											<h5 class="description-text text-muted">
												<b>Puntos</b>
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-7 col-12 mt-2">
					<div class="card">
						<h3 class="text-center pt-4 text-danger">Los mejores 10</h3>
						<div class="card-body">
							<table class="table table-hover text-center">
								<thead>
									<tr>
										<th>#</th>
										<th>Nombre</th>
										<th>Rango</th>
										<th>Puntos</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="index in 10" :key="index">
										<td>{{ index }}</td>
										<td><img :src="`/imagenes/usuario/${users[index-1].user_avatar}`" width="50" height="50" class="img-responsive rounded-circle"> {{ users[index-1].name }}</td>
										<td>
											<span>
												<img :src="`/imagenes/rangos/${users[index-1].avatar}`" height="50" width="50">
											</span>
										</td>
										<td>{{ users[index-1].puntos }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		created(){
			this.mostrarPuntuaciones()
		},
		data() {
			return {
				users:[],
				loading:true,
				user:{},
			}
		},
		methods:{
			mostrarPuntuaciones(){
				axios.get("/ranking").then(res =>{
					this.users = res.data
					this.loading = false
					this.user = this.users.find((user, index) => 
						user.id == this.currentUser.id ? user.position = index+1 : ''
						)
				})
			},
		},
	}
</script>
<style>
.contenedor{
	background-color: #2B6A88;
	height: 120px;
	width: 100%;
	z-index: 100;
}
.contenedor .imagen{
	left: 50%;
}
.contenedor .imagen img{
	height:100px; 
	width:100px;
	border: 3px solid #fff;
}
</style>