<template>
	<div class="col-12">
		<spinner v-if="loading"></spinner>
		<div class="row" v-else>
			<div class="col-sm-12 col-md-6 mb-3">
				<div class="card sombra">
					<div class="card-widget widget-user">
						<div class="widget-user-header bg-info">
							<h3 class="widget-user-username">{{ usuario.name }}</h3>
							<h5 class="widget-user-desc">Estudiante</h5>
						</div>
						<div class="widget-user-image cont">
							<img class="img-circle elevation-2" :src="`/imagenes/usuario/${usuario.avatar}`">
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
					</div>
					<div class="card-footer profundidad">
						<div class="row">
							<div class="col-sm-4 border-right">
								<div class="description-block">
									<h5 class="description-header">
										{{ usuario.apellido_paterno }} {{ usuario.apellido_materno }}
									</h5>
									<span class="description-text">APELLIDOS</span>
								</div>
							</div>
							<div class="col-sm-4 border-right">
								<div class="description-block">
									<h5 class="description-header">{{ usuario.puntos }}</h5>
									<span class="description-text">Puntuacion</span>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="description-block">
									<h5 class="description-header">{{ usuario.curso }}</h5>
									<span class="description-text">CURSO</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-6">
				<div class="card sombra ">
					<div class="card-header p-2">
						<ul class="nav nav-pills">
							<li class="nav-item"><a class="nav-link active" href="#rango" data-toggle="tab">Rangos</a></li>
							<li class="nav-item"><a class="nav-link" href="#datos" data-toggle="tab"
								@click="editarUsuario()">Datos</a></li>
							</ul>
						</div>
						<div class="card-body">
							<div class="tab-content">
								<div class="tab-pane active " id="rango">
									<div class="text-center">
										<div v-for="rango in rangos">
											<div v-if="usuario.puntos < 100">
												<div v-if="rango.nombre == 'rango #1'">
													<div class="text-center">
														<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
														<h3><b>I</b></h3>
													</div>
												</div>
											</div>
											<div v-if="usuario.puntos >= 100 && usuario.puntos <500">
												<div v-if="rango.nombre == 'rango #2'">
													<div class="text-center">
														<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
														<h3><b>II</b></h3>
													</div>
												</div>
											</div>
											<div v-if="usuario.puntos >= 500 && usuario.puntos <1000">
												<div v-if="rango.nombre == 'rango #3'">
													<div class="text-center">
														<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
														<h3><b>III</b></h3>
													</div>
												</div>
											</div>
											<div v-if="usuario.puntos >= 1000 && usuario.puntos < 5000">
												<div v-if="rango.nombre == 'rango #4'">
													<div class="text-center">
														<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
														<h3><b>IV</b></h3>
													</div>
												</div>
											</div>
											<div v-if="usuario.puntos >= 5000 && usuario.puntos < 10000">
												<div v-if="rango.nombre == 'rango #5'">
													<div class="text-center">
														<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
														<h3><b>V</b></h3>
													</div>
												</div>
											</div>
											<div v-if="usuario.puntos >=10000">
												<div v-if="rango.nombre == 'rango #6'">
													<div class="text-center">
														<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
														<h3><b>VI</b></h3>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane" id="datos">
									<div class="row">
										<div class="col-sm-12">
											<form v-on:submit.prevent="updateUsuario(fillUsuario)" enctype="multipart/form-data">
												<div class="form-group row">
													<label class="col-form-label col-md-3">Nombre</label>
													<div class="col-md-8">
														<input type="text"  class="form-control" v-model="fillUsuario.name" placeholder="Escriba su nombre" required>
													</div>
												</div>
												<div class="form-group row">
													<label class="col-form-label col-md-3">Apellido Paterno</label>
													<div class="col-md-8">
														<input type="text" class="form-control" v-model="fillUsuario.apellido_paterno" placeholder="Apellido paterno" required>
													</div>
												</div>
												<div class="form-group row">
													<label class="col-form-label col-md-3">Apellido Materno</label>
													<div class="col-md-8">
														<input type="text"class="form-control" v-model="fillUsuario.apellido_materno" placeholder="Apellido materno" required>
													</div>
												</div>
												<div class="form-group row">
													<label class="col-form-label col-md-3">Curso</label>
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
													</div>
												</div>
												<div class="form-group row">
													<div class="offset-sm-2 col-sm-10">
														<button type="submit" class="btn btn-success">Actualizar</button>
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
				this.showRango();
			},
			data(){
				return{
					usuario :{},
					rangos:[],
					insignias:[],
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
				showRango(){
					var url ="/rank"
					axios.get(url).then(res =>{
						this.rangos = res.data
					})
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
					this.fillUsuario.puntos = this.usuario.puntos;
					this.fillUsuario.rango_id = this.usuario.rango_id;
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
						icon: 'success',
						title: 'Actualizado Correctamente'
					})
				},
				updateUsuario:function(fillUsuario){
					let data = new FormData();
					data.append('name', this.fillUsuario.name);
					data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
					data.append('apellido_materno', this.fillUsuario.apellido_materno);
					data.append('curso', this.fillUsuario.curso);
					if (this.fillUsuario.puntos<100) {
						data.append('rango_id', 1);
					}else if (this.fillUsuario.puntos >= 100 && this.fillUsuario.puntos < 500) {
						data.append('rango_id', 2);
					}else if (this.fillUsuario.puntos >= 500 && this.fillUsuario.puntos < 1000) {
						data.append('rango_id', 3);
					}else if (this.fillUsuario.puntos >= 1000&& this.fillUsuario.puntos < 5000) {
						data.append('rango_id', 4);
					}else if (this.fillUsuario.puntos >= 5000&& this.fillUsuario.puntos < 10000) {
						data.append('rango_id', 5);
					}else if (this.fillUsuario.puntos > 10000) {
						data.append('rango_id', 6);
					}
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
		bottom: 15px;
		left: 70px;
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
	.description-block {
		display: block;
		margin: 10px 0;
		text-align: center;
	}
	.widget-user .widget-user-image {
		left: 50%;
		margin-left: -45px;
		position: absolute;
		top: 80px;
	}
	.widget-user .widget-user-header {
		border-top-left-radius: .25rem;
		border-top-right-radius: .25rem;
		height: 135px;
		padding: 1rem;
		text-align: center;
	}
	.widget-user .widget-user-image>img {
		border: 3px solid #fff;
		height: 100px;
		width: 100px;
	}
	.elevation-2 {
		box-shadow: 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)!important;
	}
	.img-circle {
		border-radius: 50%;
	}
	img {
		vertical-align: middle;
		border-style: none;
	}
	.profundidad{
		padding-top: 50px;
	}
	.bg-info {
		background-color: #2A6988 !important;
		color: #fff;
	}
	h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
		margin-bottom: 0.5rem;
		font-weight: 500;
		line-height: 1.2;
	}

	/***********TOOLTIPS***********/
	.tooltipP{
		cursor: pointer;
		position: relative;
		text-align: center;
	}
	.tooltipP:hover .ttip{
		display: block;
	}
	.ttip:before{
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid #777777;
		bottom: -6px;
		content: "";
		height: 0;
		left: 50%;
		margin-left: -6px;
		position: absolute;
		width: 0;
	}
	.ttip{
		background: #777777;
		color: #fff;
		display: none;
		left: 30%;
		padding: 10px 10px;
		position: absolute;
		width: 200px;
		top: -70px;
		z-index: 1000;
	}
	.rank{
		background: #477DD9;
	}
</style>