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
										<h4>EMAIL</h4>
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
			<div class="col-12">
				<div class="card">
					<div class="card-header p-2">
						<ul class="nav nav-pills">
							<li class="nav-item"><a class="nav-link active" href="#rango" data-toggle="tab">Rango</a></li>
							<li class="nav-item"><a class="nav-link" href="#perfil" data-toggle="tab" @click.prevent="editarUsuario()">Editar Perfil</a></li>
						</ul>
					</div>
					<div class="card-body">
						<div class="tab-content">
							<div class="active tab-pane" id="rango">
								<div class="text-center">
									<div v-for="rango in rangos">
										<div v-if="usuario.puntos < 100">
											<div v-if="rango.nombre == 'rango #1'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>I</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 100 && usuario.puntos <500">
											<div v-if="rango.nombre == 'rango #2'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>II</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 500 && usuario.puntos <1000">
											<div v-if="rango.nombre == 'rango #3'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>III</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 1000 && usuario.puntos < 5000">
											<div v-if="rango.nombre == 'rango #4'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>IV</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 5000 && usuario.puntos < 10000">
											<div v-if="rango.nombre == 'rango #5'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>V</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >=10000">
											<div v-if="rango.nombre == 'rango #6'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>VI</b></h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="perfil">
								<form v-on:submit.prevent="updateUsuario(fillUsuario)" enctype="multipart/form-data">
									<div class="form-group row">
										<label class="col-form-label col-md-2">Nombre</label>
										<div class="col-md-10">
											<input type="text"  class="form-control" v-model="fillUsuario.name" required>
										</div>
									</div>
									<div class="form-group row">
										<label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
										<div class="col-sm-10">
											<input type="email" class="form-control" v-model="fillUsuario.email" required>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Apellido Paterno</label>
										<div class="col-md-10">
											<input type="text" class="form-control" v-model="fillUsuario.apellido_paterno">
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Apellido Materno</label>
										<div class="col-md-10">
											<input type="text"class="form-control" v-model="fillUsuario.apellido_materno">
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Curso</label>
										<div class="col-md-10">
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
									<div class="form-group">
										<div class="form-group">
											<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false" accept="image/*" equired>
											<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else accept="image/*" equired>
										</div>
										<figure>
											<img width="200" height="200" :src="imagen" v-if="estado == false" accept="image/*" equired>
											<img width="200" height="200" :src="`/imagenes/usuario/${fillUsuario.avatar}`"v-else accept="image/*" equired>
										</figure>
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
</template>
<script>
	export default{
		created() {
			this.showRango()
			this.showUser()
		},
		data(){
			return{
				usuario :{},
				rangos:[],
				loading:true,
				fillUsuario: {name: '',apellido_paterno:null, avatar:null,email:'',
				apellido_materno:null,rango_id:'',curso:'',puntos:''},
				estado:false,
				imagenMiniatura:'',
			}
		},
		methods:{
			showRango(){
				axios.get("/rango").then(res =>{
					this.rangos = res.data
				})
			},
			showUser(){
				var url =this.$route.params.id;
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false
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
			editarUsuario:function (){
				this.estado = true;
				this.fillUsuario.name = this.usuario.name;
				this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
				this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
				this.fillUsuario.email = this.usuario.email;
				this.fillUsuario.avatar = this.usuario.avatar;
				this.fillUsuario.curso = this.usuario.curso;
				this.fillUsuario.rango_id = this.usuario.rango_id;
				this.fillUsuario.puntos = this.usuario.puntos;
				this.fillUsuario.id = this.usuario.id;
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
				data.append('email', this.fillUsuario.email);
				data.append('avatar', this.fillUsuario.avatar);
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
				var url = `/usuario/${fillUsuario.id}`;
				axios.post(url, data).then(res=>{
					this.showUser()
					this.alerta()
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