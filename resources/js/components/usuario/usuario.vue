<template>
	<div class="col-12">
		<!-- editar registro -->
		<form v-on:submit.prevent="updateUsuario(fillUsuario)" enctype="multipart/form-data">
			<div class="modal fade" id="editUsuarios">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Editar</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body pb-0">
							<div class="form-group row">
								<label class="col-form-label col-md-2">Nombre</label>
								<div class="col-md-10">
									<input type="text"  name="name" class="form-control" v-model="fillUsuario.name">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Apellidos</label>
								<div class="col-md-10">
									<input class="form-control" v-model="fillUsuario.apellido_paterno"></input>
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label></label>
									<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false">
									<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else>
								</div>
								<figure>
									<img width="200" height="200" :src="imagen" v-if="estado == false">
									<img width="200" height="200" :src="`imagenes/usuario/${fillUsuario.avatar}`" v-else>
								</figure>
							</div>
						</div>
						<div class="modal-footer pb-0">
							<div class="form-group row">
								<div class="col-lg-6">
									<input type="submit" name="enviar" value="Actualizar Registro" class="btn btn-primary pull-right">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<!-- listar las usuarios -->
		<div class="card">
			<div class="card-header">
				<h2 class="card-title">Usuarios</h2>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="usuarios" :list="usuarios" :per="12">
					<div class="row">
						<div class="col-md-3" 
						v-for="(usuario, index) in paginated('usuarios')" :key="index">
						<div class="card card-primary card-outline">
							<div class="card-body box-profile">
								<div class="text-center">
									<img class="profile-user-img img-circle"
									:src="`imagenes/usuario/${usuario.avatar}`" height="120" width="120">
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
			<paginate-links for="usuarios" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
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
				usuarios: [],
				usuario: {name: '',apellido_paterno:'', avatar:''},
				fillUsuario: {name: '',apellido_paterno:'', avatar:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
				paginate:['usuarios'],
			}
		},
		methods:{
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
			} 
		}
	}
</script>