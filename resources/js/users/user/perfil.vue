<template>
	<div class="col-12">
		<spinner v-if="loading"></spinner>
		<div class="row" v-else>
			<div class="col-12">
				<div class="card card-primary card-outline sombra">
					<div class="card-body">
						<div class="row">
							<div class="col-4">
								<div class="m-auto cont">
									<img class="profile-user-img img-circle"
									:src="`/imagenes/usuario/${usuario.avatar}`">
									<a @click.prevent="editarAvatar()"><i class="fas fa-camera"></i></a>
								</div>
								<form v-on:submit.prevent="updateAvatar(fillUsuario)" enctype="multipart/form-data">
									<div class="modal fade" id="editAvatar">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLabel">Editar Avatar</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="form-group">
														<div class="form-group">
															<input type="file" @change="obtenerImagenNueva" class="form-control-file" accept="image/*" required>
														</div>
														<figure>
															<img width="200" height="200" :src="imagen" v-show="estado == true">
														</figure>
													</div>
												</div>
												<div class="modal-footer">
													<input type="submit" name="enviar" class="btn btn-primary" value="Guardar Cambios">
												</div>
											</div>
										</div>
									</div>
								</form>
								<h3 class="profile-username text-center">{{usuario.name}}</h3>
							</div>
							<div class="col-8">
								<h6 class="text-center">DATOS DEL USUARIO</h6>
								<div class="row">
									<div class="col-6 border-right">
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
			<div class="col-md-12 mt-3">
				<div class="card sombra">
					<div class="card-header p-2">
						<ul class="nav nav-pills">
							<li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">Insignias</a></li>
							<li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Rangos</a></li>
							<li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab" 
								@click="editarUsuario()">Datos</a></li>
							</ul>
						</div>
						<div class="card-body">
							<div class="tab-content">
								<div class="active tab-pane" id="activity">

								</div>
								<div class="tab-pane" id="timeline">

								</div>
								<div class="tab-pane" id="settings">
									<div class="row">
										<div class="col-sm-12 col-lg-8">
											<form v-on:submit.prevent="updateUsuario(fillUsuario)" enctype="multipart/form-data">
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
													<div class="col-md-4">
														<select v-model="fillUsuario.curso" class="form-control">
															<option disabled value="">Seleccione el curso</option>
															<option>1° A</option>
															<option>1° B</option>
															<option>1° C</option>
															<option>1° D</option>
															<option>2° A</option>
															<option>2° B</option>
															<option>2° C</option>
															<option>2° D</option>
															<option>3° A</option>
															<option>3° B</option>
															<option>3° C</option>
															<option>3° D</option>
															<option>4° A</option>
															<option>4° B</option>
															<option>4° C</option>
															<option>4° D</option>
															<option>5° A</option>
															<option>5° B</option>
															<option>5° C</option>
															<option>5° D</option>
															<option>6° A</option>
															<option>6° B</option>
															<option>6° C</option>
															<option>6° D</option>
														</select>
														<span>Cursos: {{ cursos }}</span>
													</div>
												</div>
												<div class="form-group row">
													<div class="offset-sm-2 col-sm-10">
														<button type="submit" class="btn btn-danger">Actualizar</button>
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
					selected:'',
					cursos:'',
					seccion:'',
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
					this.estado = false
					let file = e.target.files[0];
					this.usuario.avatar = file;
					this.cargarImagen(file);
				},
				obtenerImagenNueva(e){
					this.estado = true;
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
					this.fillUsuario.name = this.usuario.name;
					this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
					this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
					this.fillUsuario.curso = this.usuario.curso;
					this.fillUsuario.id = this.usuario.id;
				},
				alerta:function(){
					const Toast = this.$swal.mixin({
						toast: true,
						position: 'top-end',
						showConfirmButton: false,
						timer: 2000,
						onOpen: (toast) => {
							toast.addEventListener('mouseenter', this.$swal.stopTimer)
							toast.addEventListener('mouseleave', this.$swal.resumeTimer)
						}
					})
					Toast.fire({
						icon: 'warning',
						title: 'Actualizado Correctamente'
					})
				},
				updateUsuario:function(fillUsuario){
					let data = new FormData();
					data.append('name', this.fillUsuario.name);
					data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
					data.append('apellido_materno', this.fillUsuario.apellido_materno);
					data.append('curso', this.fillUsuario.curso);
					data.append('_method','PUT');
					var url = `/profile/${fillUsuario.id}`;
					axios.post(url, data).then(res=>{
						this.showUser();
						this.alerta();
					})
				},
				editarAvatar:function(){
					this.fillUsuario.avatar = this.usuario.avatar;
					this.fillUsuario.id = this.usuario.id;
					$('#editAvatar').modal('show');
				},
				updateAvatar:function(fillUsuario){
					let data = new FormData();
					data.append('avatar', this.fillUsuario.avatar);
					data.append('_method','PUT');
					var url = `/profile/${fillUsuario.id}`;
					axios.post(url, data).then(res=>{
						this.showUser();
						this.alerta();
						$('#editAvatar').modal('hide')
					})
				},
			},
			computed:{
				imagen(){
					return this.imagenMiniatura;
				} 
			}
		}
	</script>
	<style>
	.sombra{
		box-shadow: 0px 3px 2px #aab2bd;
	}
	.cont{
		position: relative; 
		height:120px; 
		width:120px;
	}
	.cont img{
		height:100%; 
		width:100%;
	}
	.cont a{
		position: absolute;
		bottom: 0;
		right: 5px;
		text-shadow: 0 0 10px #000;
	}
	a i{
		cursor: pointer; 
		font-size: 25px;
		color: #fff;
	}
	.border-right {
		border-right: 1px solid #dee2e6!important;
	}
</style>