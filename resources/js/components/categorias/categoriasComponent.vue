<template>
	<div>
		<!-- editar registro -->
		<form v-on:submit.prevent="updateCategoria(fillCategoria)" enctype="multipart/form-data">
			<div class="modal fade" id="edit">
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
									<input type="text"  name="name" class="form-control" v-model="fillCategoria.name">
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
									<img width="200" height="200" :src="`imagenes/categorias/${fillCategoria.icon}`" v-else>
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
		<!-- listar las insignias -->
		<div class="row">
			<div class="col-md-12">
				<h1 class="page-header">Categorias</h1>
			</div>
			<div class="col-sm-7">
				<a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">Crear Nuevo</a>
				<spinner v-show="loading"></spinner>
				<table class="table table-hover table-striped py-5">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Imagen</th>
							<th colspan="2">
								&nbsp;
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(categoria, index) in categorias" :key="index" >
							<td width="10px">{{ categoria.id}}</td>
							<td>{{categoria.name}}</td>
							<td><img :src="`imagenes/categorias/${categoria.icon}`" class="img-responsive" height="40" width="40"></td>
							<td width="10px">
								<a href="#" class="btn btn-warning float-right" @click="editarCategoria(categoria)">Editar</a>
							</td>
							<td width="10px">
								<a href="#" class="btn btn-danger" v-on:click="eliminarCategoria(categoria,index)">Eliminar</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default {
		created:function() {
			this.mostrarCategoria();
			EventBus.$on('agregado',data =>{
				this.categorias.push(data)
			});
		},
		data() {
			return { 
				categorias: [],
				categoria: {name: '', icon:''},
				fillCategoria: {name: '', icon:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
			}
		},
		methods:{
			mostrarCategoria:function(){
				axios.get('categoria').then(res =>{
					this.categorias = res.data
					this.loading = false;
				})
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillCategoria.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.categoria.icon = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			eliminarCategoria:function(categoria,index){
				axios.delete(`/categoria/${categoria.id}`)
				.then(()=>{
					this.categorias.splice(index,1); 
				})
			},
			editarCategoria:function (categoria){
				this.estado = true;
				this.fillCategoria.name = categoria.name;
				this.fillCategoria.icon = categoria.icon;
				this.fillCategoria.id = categoria.id;
				$('#edit').modal('show');
			},
			updateCategoria:function(fillCategoria){
				let data = new FormData();
				data.append('name', this.fillCategoria.name);
				data.append('icon', this.categoria.icon);
				data.append('_method','PUT');
				var url = `/categoria/${fillCategoria.id}`;
				console.log('icono : '+this.categoria .icon);
				axios.post(url, data).then(res=>{
					this.mostrarCategoria();
					$('#edit').modal('hide');
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