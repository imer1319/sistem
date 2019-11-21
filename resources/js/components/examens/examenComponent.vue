<template>
	<div class="col-12">
		<createExamen></createExamen>
		<!-- Editar registro -->
		<form v-on:submit.prevent="updateExamen(fillExamen)" enctype="multipart/form-data">
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
									<input type="text"  name="name" class="form-control" v-model="fillExamen.name" placeholder="Nombre de la examen">
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="imagen">Contenido</label>
									<input type="file" @change="obtenerArchivo" class="form-control-file"  ref="texto">
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
									<img width="200" height="200" :src="`imagenes/examen/${fillExamen.icon}`" v-else>
								</figure>
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
				</div>
			</div>
		</form>
		<!-- listar los examenes -->
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">Examenes</h3>
				<a href="#" class="btn btn-success float-right" data-toggle="modal" data-target="#create"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="examens" :list="examens" :per="4">
				<table class="table table-bordered table-striped py-5">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Contenido</th>
							<th>Imagen</th>
							<th class="text-center">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(examen, index) in paginated('examens')" :key="index" >
							<td width="10px">{{ index+1}}</td>
							<td>{{examen.name}}</td>
							<td><span v-text="examen.content.substr(10,examen.name.length+4)"></span></td>
							<td><img :src="`/imagenes/examen/${examen.icon}`" class="img-responsive" height="40" width="40"></td>
							<td class="text-center" colspan="3">
								<router-link :to="{name : 'show',params:{id:examen.id}}" class="btn btn-info"><i class="fas fa-eye"></i> Ver
								</router-link>
								<a href="#" class="btn btn-warning color-letra" @click="editarExamen(examen)"><i class="fas fa-pencil-alt"></i> Editar</a>
								<a href="#" class="btn btn-danger color-letra" v-on:click="eliminarExamen(examen,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
							</td>
						</tr>
					</tbody>
				</table>
				</paginate>
				<paginate-links for="examens" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
			</div>
		</div>
	</div>
</template>

<script>
	import EventBus from '../../event-bus';
	import createExamen from '../examens/createExamenComponent.vue';
	export default {
		components:{
			createExamen:createExamen,
		},
		created:function() {
			this.mostrarExamen();
			EventBus.$on('agregado',data =>{
				this.examens.push(data)
			});
		},
		data() {
			return { 
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				examens: [],
				examen: {name: '',content:'', icon:''},
				fillExamen: {name: '',content:'', icon:''},
				imagenMiniatura:'',
				respuestas: [],
				respuesta: {respuesta:'', examen_id:''},
				loading:true,
				estado:false,
				id_examen:'',
				paginate:['examens'],

			}
		},
		methods:{
			mostrarExamen:function(){
				axios.get('examen').then(res =>{
					this.examens = res.data
					this.loading = false;
				})
			},
			obtenerArchivo(e){
				let arch = e.target.files[0];
				this.fillExamen.content = arch;
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillExamen.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.examen.icon = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			eliminarExamen:function(examen,index){
				axios.delete(`/examen/${examen.id}`)
				.then(()=>{
					this.examens.splice(index,1); 
				})
			},
			editarExamen:function (examen){
				this.estado = true;
				this.fillExamen.name = examen.name;
				this.fillExamen.content = examen.content;
				this.fillExamen.icon = examen.icon;
				this.fillExamen.id = examen.id;
				$('#edit').modal('show');
			},
			updateExamen:function(fillExamen){
				let data = new FormData();
				data.append('name', this.fillExamen.name);
				data.append('content', this.fillExamen.content);
				data.append('icon', this.examen.icon);
				data.append('_method','PUT');
				var url = `/examen/${fillExamen.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarExamen();
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

<style>
.color-letra, .color-letra:hover{
	color: white;
}
</style>