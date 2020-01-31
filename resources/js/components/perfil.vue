<template>
	<div class="panel col-12">
		<div class="panel-body">
			<h3 class="animated fadeInLeft">Perfil del administrador</h3>
			<div class="row">
				<div class="col-md-4 col-6">
					<div class="card text-white bg-primary mb-3">
						<div class="m-auto card-header">Numero de usuarios</div>
						<div class="card-body row text-center">
							<div class="col-6">{{ numero_usuarios }}</div>
							<div class="col-6"><i class="fas fa-user"></i></div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-6">
					<div class="card text-white bg-success mb-3">
						<div class="m-auto card-header">Numero de examenes</div>
						<div class="card-body row text-center">
							<div class="col-6">{{ numero_examenes }}</div>
							<div class="col-6"><i class="fas fa-user"></i></div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-6">
					<div class="card text-white bg-danger mb-3">
						<div class="m-auto card-header">Numero de ejercicios</div>
						<div class="card-body row text-center">
							<div class="col-6">{{ numero_ejercicios }}</div>
							<div class="col-6"><i class="fas fa-user"></i></div>
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
			this.obtener_numero_usuarios()
			this.obtener_numero_examenes()
			this.obtener_numero_ejercicios()
		},
		data(){
			return{
				numero_usuarios:null,
				numero_examenes:null,
				numero_ejercicios:null,
			}
		},
		methods:{
			obtener_numero_usuarios(){
				axios.get("/numero_usuarios").then(res =>{
					this.numero_usuarios = res.data
				})
			},
			obtener_numero_examenes(){
				axios.get("/numero_examenes").then(res =>{
					this.numero_examenes = res.data
				})
			},
			obtener_numero_ejercicios(){
				axios.get("/numero_ejercicios").then(res =>{
					this.numero_ejercicios = res.data
				})
			},
		}
	}
</script>