<template>
	<div>
		<form v-on:submit.prevent="updateRespuesta(fillRespuesta)" enctype="multipart/form-data">
			<div class="modal fade" id="editarRespuesta">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Editar Respuesta</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body pb-0">
							<div class="form-group row">
								<label class="col-form-label col-md-2">Respuesta</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillRespuesta.respuesta">
								</div>
							</div>
							
						</div>
						<div class="modal-footer pb-0">
							<div class="form-group row">
								<div class="col-lg-6">
									<input type="submit" name="enviar" value="Actualizar registro" class="btn btn-primary pull-right">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<!-- listar las respuestas -->
		<div class="row">
			<div class="col-12">
				<h1 class="page-header">Respuestas</h1>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="col-12" v-else>
				<a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create-respuesta">Crear Nuevo</a>
				<table class="table table-hover table-striped py-5">
					<thead>
						<tr>
							<th>ID</th>
							<th>Respuesta</th>
							<th colspan="2">
								&nbsp;
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(respuesta, index) in respuestas" :key="index" v-if="respuesta.examen_id == $route.params.id">
							<td width="10px">{{ index+1 }}</td>
							<td>{{respuesta.respuesta}}</td>
							<td>
								<a href="#" class="btn btn-warning" @click.prevent="editarRespuesta(respuesta)">Editar</a>
							</td>
							<td width="10px">
								<a href="#" class="btn btn-danger" @click.prevent="eliminarRespuesta(respuesta,index)">Eliminar</a>
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
		mounted() {
			this.mostrarRespuesta();
			EventBus.$on('add-respuesta',data =>{
				this.respuestas.push(data)
			});
		},
		data() {
			return {
				respuestas: [],
				examen:{},
				respuesta: {respuesta: '',examen_id:''},
				fillRespuesta: {respuesta: '',examen_id:''},
				loading:true,
			}
		},
		props:['examens'],
		methods:{
			mostrarRespuesta:function(){
				axios.get("/respuesta").then(res =>{
					this.respuestas = res.data
					this.loading = false;
				})
			},
			eliminarRespuesta:function(respuesta,index){
				axios.delete(`/respuesta/${respuesta.id}`)
				.then(()=>{
					this.respuestas.splice(index,1); 
				})
			},
			editarRespuesta:function (respuesta){
				this.fillRespuesta.respuesta = respuesta.respuesta;
				this.fillRespuesta.examen_id = respuesta.examen_id;
				this.fillRespuesta.id = respuesta.id;
				$('#editarRespuesta').modal('show');
			},
			updateRespuesta:function(fillRespuesta){
				let data = new FormData();
				data.append('respuesta', this.fillRespuesta.respuesta);
				data.append('examen_id', this.fillRespuesta.examen_id);
				data.append('_method','PUT');
				var url = `/respuesta/${fillRespuesta.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarRespuesta();
					$('#editarRespuesta').modal('hide');
				})
			},
		}
	}
</script>