<template>
	<div class="col-12">
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
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">Respuestas</h3>
				<a href="#" class="btn btn-success float-right" data-toggle="modal" data-target="#create-respuesta"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="respuestas" :list="respuestas" :per="4">
					<table class="table table-bordered table-striped py-5">
						<thead>
							<tr>
								<th>ID</th>
								<th>Respuesta</th>
								<th class="text-center" colspan="2">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(respuesta, index) in paginated('respuestas')" :key="index" v-if="respuesta.examen_id == $route.params.id">
								<td width="10px">{{ index+1 }}</td>
								<td>{{respuesta.respuesta}}</td>
								<td class="text-center" colspan="2">
									<a href="#" class="btn btn-warning color-letra" @click.prevent="editarRespuesta(respuesta)"><i class="fas fa-pencil-alt"></i> Editar</a>
									<a href="#" class="btn btn-danger color-letra" @click.prevent="eliminarRespuesta(respuesta,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
								</td>
							</tr>
						</tbody>
					</table>
				</paginate>
				<paginate-links for="respuestas" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
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
				paginate:['respuestas'],
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

<style>
.color-letra, .color-letra:hover{
	color: white;
}
</style>