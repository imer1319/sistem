<template>
	<div class="col-12">
		<createEjercicio/>
		<!-- editar registro -->
		<form v-on:submit.prevent="updateEjercicio(fillEjercicio)" enctype="multipart/form-data">
			<div class="modal fade" id="editarEjercicio">
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
									<input type="text"  name="name" class="form-control" v-model="fillEjercicio.name">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="fillEjercicio.description" placeholder="Describa la insignia"></textarea>
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
									<img width="200" height="200" :src="`imagenes/ejercicios/${fillEjercicio.icon}`" v-else>
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
		<!-- listar las ejercicios -->
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">ejercicios</h3>
				<a href="#" class="btn btn-success float-right" data-toggle="modal" data-target="#createEjercicio"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="ejercicios" :list="ejercicios" :per="5">
				<table class="table table-bordered table-striped py-5">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Descripcion</th>
							<th class="text-center">Imagen</th>
							<th class="text-center">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(ejercicio, index) in paginated('ejercicios')" :key="index" >
							<td width="10px">{{ index+1}}</td>
							<td>{{ejercicio.name}}</td>
							<td>{{ejercicio.description}}</td>
							<td class="text-center"><img :src="`imagenes/ejercicios/${ejercicio.icon}`" class="img-responsive" height="60" width="70"></td>
							<td class="float-right">
								<a href="#" class="btn btn-warning" @click="editarEjercicio(ejercicio)"><i class="fas fa-pencil-alt"></i> Editar</a>
								<a href="#" class="btn btn-danger" v-on:click="eliminarEjercicio(ejercicio,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
							</td>
						</tr>
					</tbody>
				</table>
				</paginate>
				<paginate-links for="ejercicios" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import EventBus from '../../event-bus';
	import createEjercicio from '../ejercicios/createEjercicio.vue';
	export default {
		components:{
			createEjercicio:createEjercicio,
		},
		created:function() {
			this.mostrarInsignia();
			EventBus.$on('agregado',data =>{
				this.ejercicios.push(data)
			});
		},
		data() {
			return { 
				ejercicios: [],
				ejercicio: {name: '',description:'', icon:''},
				fillEjercicio: {name: '',description:'', icon:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
				paginate:['ejercicios'],
			}
		},
		methods:{
			mostrarInsignia:function(){
				axios.get('ejercicio').then(res =>{
					this.ejercicios = res.data
					this.loading = false;
				})
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillEjercicio.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.ejercicio.icon = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			eliminarEjercicio:function(ejercicio,index){
				axios.delete(`/ejercicio/${ejercicio.id}`)
				.then(()=>{
					this.ejercicios.splice(index,1); 
				})
			},
			editarEjercicio:function (ejercicio){
				this.estado = true;
				this.fillEjercicio.name = ejercicio.name;
				this.fillEjercicio.description = ejercicio.description;
				this.fillEjercicio.icon = ejercicio.icon;
				this.fillEjercicio.id = ejercicio.id;
				$('#editarEjercicio').modal('show');
			},
			updateEjercicio:function(fillEjercicio){
				let data = new FormData();
				data.append('name', this.fillEjercicio.name);
				data.append('description', this.fillEjercicio.description);
				data.append('icon', this.ejercicio.icon);
				data.append('_method','PUT');
				var url = `/ejercicio/${fillEjercicio.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarInsignia();
					$('#editarEjercicio').modal('hide');
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