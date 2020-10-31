<template>
	<div class="container-fluid">
		<div class="modal fade" id="createdUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  		<div class="modal-dialog" role="document">
				<form v-on:submit.prevent="addUser">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4>Crear</h4>
								<button type="button" class="close" data-dismiss="modal">
									<span>&times;</span>
								</button>
							</div>
							<div class="modal-body pb-0">
								<div class="form-group row">
									<label class="col-form-label col-md-2">Nombre</label>
									<div class="col-md-10">
										<input type="text"  name="name" class="form-control" v-model="usuario.name" placeholder="Nombre del usuario" required>
										<span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-form-label col-md-2">Nombre</label>
									<div class="col-md-8">
										<input type="text"  name="password" class="form-control" v-model="password" placeholder="Contraseña del usuario" required>
									</div>
									<div class="col-md-2 btn btn-primary btn-sm" @click.prevent="createPasswordRandom()">Generar</div>
								</div>
							</div>
							<div class="modal-footer pb-0">
								<div class="form-group row">
									<div class="col-lg-6">
										<input type="submit" name="enviar" value="Crear Registro" class="btn btn-primary pull-right">
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="card">
			<div class="card-header">
				<h2 class="card-title">Usuarios</h2>
				<a class="btn btn-success float-right text-white" v-on:click="crearUser()"><i class="fas fa-plus"></i> Crear Usuario</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<div class="form-group">
					<input type="text" placeholder="Buscar" class="form-control" v-model="name">
				</div>
				<div v-if="name == ''">
					<paginate name="usuarios" :list="usuarios" :per="12">
						<div class="row">
							<div class="col-6 col-md-3" v-for="(usuario, index) in paginated('usuarios')" :key="index">
								<div class="card card-primary card-outline">
									<div class="card-body box-profile">
										<div class="text-center">
											<img class="profile-user-img rounded"
											:src="`imagenes/usuario/${usuario.avatar}`" height="120" width="100%">
										</div>
										<h3 class="profile-username text-center">{{usuario.name}}</h3>
										<div class="row">
											<router-link :to="{name:'shoex',params:{id:usuario.id}}" class="btn btn-primary btn-block"><i class="fas fa-eye"></i> <b>Ver</b></router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</paginate>
					<paginate-links for="usuarios" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}">
					</paginate-links>
				</div>
				<div v-else>
					<div class="row">
						<div class="col-6 col-md-3" v-for="(usuario, index) in searchUser" :key="index">
							<div class="card card-primary card-outline">
								<div class="card-body box-profile">
									<div class="text-center">
										<img class="profile-user-img rounded"
										:src="`imagenes/usuario/${usuario.avatar}`" height="120" width="100%">
									</div>
									<h3 class="profile-username text-center">{{usuario.name}}</h3>
									<div class="row">
										<router-link :to="{name:'shoex',params:{id:usuario.id}}" class="btn btn-primary btn-block"><i class="fas fa-eye"></i><b>Ver</b></router-link>
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
	import EventBus from '../../event-bus';
	export default {
		created:function() {
			this.mostrarUsuario();
			EventBus.$on('agregado',data =>{
				this.usuarios.push(data)
			});
		},
		data() {
			return {
				name:'',
				usuarios: [],
				usuario: {name: '',password:''},
				fillUsuario: {name: '',apellido_paterno:'', avatar:'',hash_password:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
				paginate:['usuarios'],
				abecedario : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",".","-","_","$","&","#","@"],
				password:[],
				random:null,
				errors: [],
			}
		},
		methods:{
			addUser(){	
				if (this.validarEspacios(this.usuario.name)==false||this.validarEspacios(this.password)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let formData = new FormData();
					formData.append('name', this.usuario.name);
					formData.append('password', this.password);
					formData.append('hash_password', this.password);
					axios.post('/createUser',formData)
					.then(response=>{
						this.usuario.name = "";
						this.password = "";
						this.errors = [];
						this.alerta('success','Se a agregado correctamente')
						this.mostrarUsuario()
						$('#createdUser').modal('hide')
					}).catch(error => {
		          		this.errors = error.response.data.errors;
		          		console.log(this.errors)
			        })
				}
			},
			createPasswordRandom(){
				for (var i = 1; i < 9; i++) {
					this.random = Math.floor(Math.random()*this.abecedario.length)
					if (this.abecedario[this.random] != null) {
						this.password += this.abecedario[this.random]	
					}
				}
			},
			crearUser(){
				$('#createdUser').modal('show')
			},
			mostrarUsuario:function(){
				axios.get('usuario').then(res =>{
					this.usuarios = res.data
					this.loading = false;
				})
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillUsuario.avatar = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.usuario.avatar = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			alerta:function(icono,titulo){
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
					icon: icono,
					title: titulo
				})
			},
			validarEspacios(parametro){
				var patron = /^\s+$/;
				if (patron.test(parametro)) {
					return false
				}else{return true}
			},
			editarUsuario:function (usuario){
				this.estado = true;
				this.fillUsuario.name = usuario.name;
				this.fillUsuario.apellido_paterno = usuario.apellido_paterno;
				this.fillUsuario.avatar = usuario.avatar;
				this.fillUsuario.id = usuario.id;
				$('#editUsuarios').modal('show');
			},
			updateUsuario:function(fillUsuario){
				let data = new FormData();
				data.append('name', this.fillUsuario.name);
				data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
				data.append('avatar', this.usuario.avatar);
				data.append('_method','PUT');
				var url = `/usuario/${fillUsuario.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarUsuario();
					$('#editUsuarios').modal('hide');
				})
			},
		},
		computed:{
			imagen(){
				this.estado = false;
				return this.imagenMiniatura;
			},
			searchUser: function () {
				return this.usuarios.filter((item) => item.name.includes(this.name));
			}
		}
	}
</script>