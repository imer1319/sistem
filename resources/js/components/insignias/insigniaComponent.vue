<template>
	<div>
		<!-- editar registro -->
		<form v-on:submit.prevent="updateInsignia(fillInsignia)" enctype="multipart/form-data">
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
									<input type="text"  name="name" class="form-control" v-model="fillInsignia.name">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="fillInsignia.description" placeholder="Describa la insignia"></textarea>
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
									<img width="200" height="200" :src="`imagenes/insignias/${fillInsignia.icon}`" v-else>
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
				<h1 class="page-header">Insignias</h1>
			</div>
			<div class="col-sm-7">
				<a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">Crear Nuevo</a>
				<spinner v-show="loading"></spinner>
				<table class="table table-hover table-striped py-5">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Descripcion</th>
							<th>Imagen</th>
							<th colspan="2">
								&nbsp;
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(insignia, index) in insignias" :key="index" >
							<td width="10px">{{ insignia.id}}</td>
							<td>{{insignia.name}}</td>
							<td>{{insignia.description}}</td>
							<td><img :src="`imagenes/insignias/${insignia.icon}`" class="img-responsive" height="40" width="40"></td>
							<td width="10px">
								<a href="#" class="btn btn-warning float-right" @click="editarInsignia(insignia)">Editar</a>
							</td>
							<td width="10px">
								<a href="#" class="btn btn-danger" v-on:click="eliminarInsignia(insignia,index)">Eliminar</a>
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
			this.mostrarInsignia();
			EventBus.$on('agregado',data =>{
				this.insignias.push(data)
			});
		},
		data() {
			return { 
				insignias: [],
				insignia: {name: '',description:'', icon:''},
				fillInsignia: {name: '',description:'', icon:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
			}
		},
		methods:{
			mostrarInsignia:function(){
				axios.get('insignia').then(res =>{
					this.insignias = res.data
					this.loading = false;
				})
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillInsignia.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.insignia.icon = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			eliminarInsignia:function(insignia,index){
				axios.delete(`/insignia/${insignia.id}`)
				.then(()=>{
					this.insignias.splice(index,1); 
				})
			},
			editarInsignia:function (insignia){
				this.estado = true;
				this.fillInsignia.name = insignia.name;
				this.fillInsignia.description = insignia.description;
				this.fillInsignia.icon = insignia.icon;
				this.fillInsignia.id = insignia.id;
				$('#edit').modal('show');
			},
			updateInsignia:function(fillInsignia){
				let data = new FormData();
				data.append('name', this.fillInsignia.name);
				data.append('description', this.fillInsignia.description);
				data.append('icon', this.insignia.icon);
				data.append('_method','PUT');
				var url = `/insignia/${fillInsignia.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarInsignia();
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