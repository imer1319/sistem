<template>
	<div class="col-12">
		<!-- listar las usuarios -->
		<div class="card">
			<div class="card-header">
				<h2 class="card-title">Usuarios</h2>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<div class="col-md-7 mb-3">
					<select v-model="selected" class="form-control">
						<option>Todos los usuarios</option>
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
				<paginate name="usuarios" :list="usuarios" :per="12">
					<div class="row">
						<div class="col-6 col-md-3" 
						v-for="(usuario, index) in paginated('usuarios')" :key="index" 
						v-if="usuario.curso == selected">
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
					<div class=" col-6 col-md-3"
					v-for="(usuario, index) in paginated('usuarios')" :key="index" 
					v-if="selected == 'Todos los usuarios'">
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
				selected: 'Todos los usuarios',
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