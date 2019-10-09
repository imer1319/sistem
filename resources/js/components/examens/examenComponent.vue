<template>
	<div>
		<!-- crear registro REspuestas-->
		<form v-on:submit.prevent="agregarRespuesta" id="dynamic_form">
			<div class="modal fade" id="createRespuesta">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Crear</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<div class="btn btn-primary" @click="addNewRespuesta">Agregar </div>
							</div>
							<div class="form-group row">
								<table class="table table-bordered">
									<thead>
										<th class="col-9">Respuesta</th>
										<th >Accion</th>
									</thead>
									<tbody>
										<tr>
											<td>
												<input type="text" class="form-control" name="respuesta[]" placeholder="Respuesta de la respuesta">
												<input type="hidden" class="form-control" name="examen_id[]" v-model="id_examen">
											</td>
											<td></td>
										</tr>
										<tr v-for="(resp,index) in respuestas">
											<td>
												<input type="text" class="form-control" name="respuesta[]" placeholder="Respuesta de la respuesta">
												<input type="hidden" class="form-control" name="examen_id[]" v-model="id_examen">
											</td>
											<td>
												<div class="btn btn-danger" @click="removeRespuesta(index)">Borrar</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<input type="hidden" name="_token" :value="csrf">
							<input type="submit" name="save" id="save" class="btn btn-primary" value="Save" />
						</div>
					</div>
				</div>
			</div>
		</form>
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
		<div class="row">
			<div class="col-12">
				<h1 class="page-header">Examenes</h1>
			</div>
			<div class="col-12">
				<a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">Crear Nuevo</a>
				<spinner v-show="loading"></spinner>
				<table class="table table-hover table-striped py-5">
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Contenido</th>
							<th>Imagen</th>
							<th colspan="4">
								&nbsp;
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(examen, index) in examens" :key="index" >
							<td width="10px">{{ examen.id}}</td>
							<td>{{examen.name}}</td>
							<td>{{examen.content}}</td>
							<td><img :src="`/imagenes/examen/${examen.icon}`" class="img-responsive" height="40" width="40"></td>
							<td width="10px">
								<a :href="`examenes/${examen.id}`" class="btn btn-success float-right">Ver</a>
							</td>
							<td width="10px">
								<a href="#" class="btn btn-success float-right" data-toggle="modal" data-target="#createRespuesta" @click="crearRespuesta(examen)">Crear Respuestas</a>
							</td>
							<td width="10px">
								<a href="#" class="btn btn-warning float-right" @click="editarExamen(examen)">Editar</a>
							</td>
							<td width="10px">
								<a href="#" class="btn btn-danger" v-on:click="eliminarExamen(examen,index)">Eliminar</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default {
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
			}
		},
		methods:{
			mostrarExamen:function(){
				axios.get('examenes').then(res =>{
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
				axios.delete(`/examenes/${examen.id}`)
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
				var url = `/examenes/${fillExamen.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarExamen();
					$('#edit').modal('hide');
				})
			},
			crearRespuesta(respuesta){
				this.id_examen = respuesta.id;
				$('#createRespuesta').modal('show');
			},
			agregarRespuesta(){
				let formData = new FormData($('#dynamic_form')[0]);
				axios.post('/respuesta',formData)
				.then(res=>{
					EventBus.$emit('agregadoResp', res.data);
					this.respuestas = [],
					$('#createRespuesta').modal('hide')
				})
			},
			addNewRespuesta() {
				this.respuestas.push({
					respuesta:'', examen_id:''
				});
			},
			removeRespuesta(index){
				this.respuestas.splice(index,1);
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