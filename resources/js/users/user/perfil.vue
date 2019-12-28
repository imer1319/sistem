<template>
	<div class="col-12">
		<spinner v-if="loading"></spinner>
		<div class="row" v-else>
			<div class="col-12">
				<div class="card card-primary card-outline">
					<div class="card-body">
						<div class="row">
							<div class="col-4">
								<div class="text-center">
									<img class="profile-user-img img-circle"
									:src="`/imagenes/usuario/${usuario.avatar}`" height="120" width="120">
								</div>
								<h3 class="profile-username text-center">{{usuario.name}}</h3>
							</div>
							<div class="col-8">
								<h6 class="text-center">DATOS DEL USUARIO</h6>
								<div class="row">
									<div class="col-6">
										<h4>APELLIDOS</h4>
										<h6>{{ usuario.apellido_paterno }} {{ usuario.apellido_materno }}</h6>
										<h4>CORREO ELECTRONICO</h4>
										<h6>{{ usuario.email }}</h6>
									</div>
									<div class="col-6">
										<h4>PUNTOS</h4>
										<h6>{{ usuario.puntos }}</h6>
										<h4>CURSO</h4>
										<h6>{{ usuario.curso }}</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 mt-3">
				<div class="card card-primary card-outline">
					<div class="card-header p-2">
						<ul class="nav nav-pills">
							<li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">Insignias</a></li>
							<li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Rangos</a></li>
							<li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab" @click="editarUsuario()">Editar Perfil</a></li>
						</ul>
					</div><!-- /.card-header -->
					<div class="card-body">
						<div class="tab-content">
							<div class="active tab-pane" id="activity">
								
							</div>
							<div class="tab-pane" id="timeline">
								
							</div>
							<div class="tab-pane" id="settings">
								<form v-on:submit="updateUsuario(fillUsuario)" enctype="multipart/form-data">
									<div class="form-group row">
										<label class="col-form-label col-md-2">Nombre</label>
										<div class="col-md-10">
											<input type="text"  class="form-control" v-model="fillUsuario.name" required>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Apellido Paterno</label>
										<div class="col-md-10">
											<input type="text" class="form-control" v-model="fillUsuario.apellido_paterno" required>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Apellido Materno</label>
										<div class="col-md-10">
											<input type="text"class="form-control" v-model="fillUsuario.apellido_materno" required>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Curso</label>
										<div class="col-md-10">
											<input type="text" class="form-control" v-model="fillUsuario.curso" required>
										</div>
									</div>
									<div class="form-group">
										<div class="form-group">
											<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false">
											<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else>
										</div>
										<figure>
											<img width="200" height="200" :src="imagen" v-if="estado == false">
											<img width="200" height="200" :src="`/imagenes/usuario/${fillUsuario.avatar}`"v-else>
										</figure>
									</div>
									<div class="form-group row">
										<div class="offset-sm-2 col-sm-10">
											<button type="submit" class="btn btn-danger">Submit</button>
										</div>
									</div>
								</form>
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
		created() {
			this.showUser();
		},
		data(){
			return{
				usuario :{},
				loading:true,
				fillUsuario: {name: '',apellido_paterno:'', avatar:'',email:'',
				apellido_materno:'',rango_id:'',curso:''},
				estado:false,
				imagenMiniatura:'',
			}
		},
		methods:{
			showUser(){
				var url ="/profile"
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false;
				})
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.usuario.avatar = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.fillUsuario.avatar = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			editarUsuario:function (){
				this.estado = true;
				this.fillUsuario.name = this.usuario.name;
				this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
				this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
				this.fillUsuario.avatar = this.usuario.avatar;
				this.fillUsuario.curso = this.usuario.curso;
				this.fillUsuario.id = this.usuario.id;
				$('#editUsuarios').modal('show');
			},
			updateUsuario:function(fillUsuario){
				let data = new FormData();
				data.append('name', this.fillUsuario.name);
				data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
				data.append('apellido_materno', this.fillUsuario.apellido_materno);
				data.append('avatar', this.fillUsuario.avatar);
				data.append('curso', this.fillUsuario.curso);
				data.append('_method','PUT');
				var url = `/profile/${fillUsuario.id}`;
				axios.post(url, data).then(res=>{

				})
			},
		},
		computed:{
			imagen(){
				this.estado = false;
				return this.imagenMiniatura;
			} 
		}
	}
</script>
<style>

</style>