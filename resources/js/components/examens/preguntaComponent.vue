<template>
	<!-- listar las respuestas -->
	<div>
		<form v-on:submit.prevent="updatePregunta(fillpregunta)" enctype="multipart/form-data">
			<div class="modal fade" id="editarPregunta">
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
									<input type="text"  class="form-control" v-model="fillpregunta.enunciado">
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="respuesta"></label>
									<select v-model="fillpregunta.respuesta_id" class="custom-select">
										<option disabled value="">--Seleccione la respuesta correcta--</option>
										<option v-for="(respuesta,index) in respuestas" v-if="respuesta.examen_id == $route.params.id" :value="respuesta.id">
											{{ respuesta.respuesta }}
										</option>
									</select>
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
		<!-- listar preguntas -->
		<div class="col-md-12">
			<h3 class="page-header">Preguntas</h3>
		</div>
		<spinner v-if="loading"></spinner>
		<div class="col-md-12" v-else>
			<a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create-pregunta">Crear Nuevo</a>
			<table class="table table-hover table-striped py-5">
				<thead>
					<tr>
						<th>ID</th>
						<th>Enunciado</th>
						<th>Respuesta</th>
						<th colspan="2">
							&nbsp;
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(pregunta, index) in preguntas" :key="index" v-if="pregunta.examen_id == $route.params.id">
						<td width="10px">{{ index+1 }}</td>
						<td>{{pregunta.enunciado}}</td>
						<td><span v-for="(respuesta,index) in respuestas" v-if="respuesta.id == pregunta.respuesta_id">{{ respuesta.respuesta }}</span></td>
						<td>
							<a href="#" class="btn btn-warning float-right" @click.prevent="editarPregunta(pregunta)">Editar</a>
						</td>
						<td width="10px">
							<a href="#" class="btn btn-danger" v-on:click.prevent="eliminarPregunta(pregunta,index)">Eliminar</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import EventBus from '../../event-bus'
	export default{
		created(){
			this.mostrarPregunta();
			this.mostrarRespuestas();
			EventBus.$on('add-pregunta',data =>{
				this.preguntas.push(data)
			});
		},
		data(){
			return{
				preguntas:[],
				pregunta:{enunciado:'',examen_id:'',respuesta_id:''},
				fillpregunta: {enunciado: '',examen_id:'',respuesta_id:''},
				loading:true,
				respuestas:[]
			}
		},
		methods:{
			mostrarPregunta (){
				axios.get("/pregunta").then(res =>{
					this.preguntas = res.data
					this.loading = false;
				})
			},
			mostrarRespuestas(){
				var url = '/respuesta';
				axios.get(url).then(res =>{
					this.respuestas = res.data
				})
			},
			eliminarPregunta:function(pregunta,index){
				axios.delete(`/pregunta/${pregunta.id}`)
				.then(()=>{
					this.preguntas.splice(index,1); 
				})
			},
			editarPregunta:function (pregunta){
				this.mostrarRespuestas();
				this.fillpregunta.enunciado = pregunta.enunciado;
				this.fillpregunta.examen_id = this.$route.params.id;
				this.fillpregunta.respuesta_id = pregunta.respuesta_id;
				this.fillpregunta.id = pregunta.id;
				$('#editarPregunta').modal('show');
			},
			updatePregunta:function(fillpregunta){
				let data = new FormData();
				data.append('enunciado', this.fillpregunta.enunciado);
				data.append('examen_id', this.fillpregunta.examen_id);
				data.append('respuesta_id', this.fillpregunta.respuesta_id);
				data.append('_method','PUT');
				var url = `/pregunta/${fillpregunta.id}`;
				axios.post(url, data).then(res=>{
					this.mostrarPregunta();
					$('#editarPregunta').modal('hide');
				})
			},
		}
	}
</script>