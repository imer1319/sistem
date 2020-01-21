<template>
	<div class="container">
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">nombre</th>
					<th scope="col">avatar</th>
					<th scope="col">curso</th>
					<th scope="col">Puntuacion</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(ran, index) in rankings">
					<td scope="row">{{ index+1 }}</td>
					<td>{{ ran.name }}</td>
					<td><img :src="`/imagenes/usuario/${ran.avatar}`" width="40" height="40"></td>
					<td>{{ ran.curso }}</td>
					<td>{{ ran.puntos }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default{
		created(){
			this.mostrarPuntuacion()
		},
		data() {
			return {
				rankings:[],
			}
		},
		methods:{
			mostrarPuntuacion(){
				axios.get("/ranking").then(res =>{
					this.rankings = res.data
				})
			},
		}
	}
</script>