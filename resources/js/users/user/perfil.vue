<template>
    <div>
        <spinner v-if="loading"></spinner>
        <div v-else>
            <nav class="navbar navbar-expand-md navbar-dark bg-primary">
                <div class="container">
                    <a class="navbar-brand text-white">Lectura Veloz</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item px-md-3">
                                <h5 class="mb-0">
                                    <a class="nav-link text-warning">{{ usuario.puntos }} Pts.</a>
                                </h5>
                            </li>
                            <li class="nav-item">
                                <img :src="`/imagenes/usuario/${usuario.avatar}`" class="rounded-circle pb-0" height="40" width="40">
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{usuario.name}}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <router-link class="dropdown-item" to="/profile">
                                        Mi perfil
                                    </router-link>
                                    <a class="dropdown-item" href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Cerrar Sesión
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
			<div class="container-fluid">
				<router-link class="btn btn-dark text-uppercase" to="/home">
					Regresar
				</router-link>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-12 col-md-6 mb-3">
						<div class="card shadow">
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
												</div>
												<div class="modal-body">
													<div class="form-group">
														<div class="form-group">
															<input type="file" @change="obtenerImagenNueva" class="form-control-file" ref="img" accept="image/*" required>
														</div>
														<figure>
															<img width="200" height="200" :src="imagen" v-show="estado == true" accept="image/*">
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
												{{ usuario.apellido_paterno }}
											</h5>
											<span class="description-text">APELLIDO PATERNO</span>
										</div>
									</div>
									<div class="col-sm-4 border-right">
										<div class="description-block">
											<h5 class="description-header font-weight-bold">{{ usuario.puntos }}</h5>
											<span class="description-text">PUNTOS</span>
										</div>
									</div>
									<div class="col-sm-4 border-right">
										<div class="description-block">
											<h5 class="description-header">{{ usuario.apellido_materno }}</h5>
											<span class="description-text">APELLIDO MATERNO</span>
										</div>
									</div>
									<div class="col-6">
										<div class="description-block">
											<h5 class="description-header">
												<span>{{ usuario.ppm_inicial }} ppm</span>
											</h5>
											<span class="description-text">VELOCIDAD INICIAL</span>
										</div>
									</div>
									<div class="col-6">
										<div class="description-block">
											<h5 class="description-header">
												<span>{{ usuario.comprension_inicial }} %</span>
											</h5>
											<span class="description-text">COMPRENSION INICIAL</span>
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
									<li class="nav-item"><a class="nav-link active" href="#rango" data-toggle="tab">Rango</a></li>
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
														<div v-if="rango.nombre == 'Rango #1'">
															<div class="text-center">
																<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
																<h3><b>Bronce</b></h3>
															</div>
														</div>
													</div>
													<div v-if="usuario.puntos >= 100 && usuario.puntos <500">
														<div v-if="rango.nombre == 'Rango #2'">
															<div class="text-center">
																<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
																<h3><b>Plata</b></h3>
															</div>
														</div>
													</div>
													<div v-if="usuario.puntos >= 500 && usuario.puntos <1000">
														<div v-if="rango.nombre == 'Rango #3'">
															<div class="text-center">
																<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
																<h3><b>Oro</b></h3>
															</div>
														</div>
													</div>
													<div v-if="usuario.puntos >= 1000 && usuario.puntos < 5000">
														<div v-if="rango.nombre == 'Rango #4'">
															<div class="text-center">
																<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
																<h3><b>Platino</b></h3>
															</div>
														</div>
													</div>
													<div v-if="usuario.puntos >= 5000 && usuario.puntos < 10000">
														<div v-if="rango.nombre == 'Rango #5'">
															<div class="text-center">
																<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
																<h3><b>Diamante</b></h3>
															</div>
														</div>
													</div>
													<div v-if="usuario.puntos >=10000">
														<div v-if="rango.nombre == 'Rango #6'">
															<div class="text-center">
																<img :src="`imagenes/rangos/${rango.avatar}`" class="img-responsive" width="50%">
																<h3><b>Campeones</b></h3>
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
																<input type="text" class="form-control" v-model="fillUsuario.apellido_paterno" placeholder="Apellido paterno">
															</div>
														</div>
														<div class="form-group row">
															<label class="col-form-label col-md-3">Apellido Materno</label>
															<div class="col-md-8">
																<input type="text"class="form-control" v-model="fillUsuario.apellido_materno" placeholder="Apellido materno">
															</div>
														</div>
														<div class="form-group row">
															<div class="offset-sm-2 col-sm-10">
																<button type="submit" class="btn btn-primary text-white">Actualizar</button>
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
			</div>
		</div>
	</template>
	<script>
		export default{
			created() {
				this.showUser()
				this.showRango()
			},
			data(){
				return{
					usuario :{},
					rangos:[],
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
						this.loading = false
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
					if (this.fillUsuario.apellido_materno == null) {
						this.fillUsuario.apellido_materno = ""
					}
					if (this.fillUsuario.apellido_paterno == null) {
						this.fillUsuario.apellido_paterno = ""
					}
					let data = new FormData();
					data.append('name', this.fillUsuario.name);
					data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
					data.append('apellido_materno', this.fillUsuario.apellido_materno);
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
						this.showUser()
						this.alerta() 
					})
				},
				editarAvatar:function(){
					this.fillUsuario.avatar = this.usuario.avatar;
					this.fillUsuario.id = this.usuario.id;
					this.estado = false
					this.$refs.img.value = null
					$('#editAvatar').modal('show');
				},
				updateAvatar:function(fillUsuario){
					let data = new FormData();
					data.append('avatar', this.fillUsuario.avatar);
					data.append('_method','PUT');
					var url = `/profile/${fillUsuario.id}`;
					axios.post(url, data).then(res=>{
						this.showUser()
						this.alerta()
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