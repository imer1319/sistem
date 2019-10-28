<template>
	<div>
		<!-- crear registro de pregunta-->
		<form v-on:submit.prevent="agregarPregunta" enctype="multipart/form-data">
			<div class="modal fade" id="create-pregunta">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Crear</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body pb-0">
							<div class="form-group row">
								<label class="col-form-label col-md-2">Nombre</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.enunciado" placeholder="Nombre de la pregunta">
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="respuesta"></label>
									<select v-model="pregunta.respuesta_id" class="custom-select">
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
									<input type="submit" name="enviar" value="Crear Registro" class="btn btn-primary pull-right">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import EventBus from '../../event-bus'
	export default{
		created:function(){
			this.mostrarRespuestas();
		},
		data(){
			return{
				respuestas: [],
				preguntas:[],
				pregunta:{enunciado:'',examen_id:'',respuesta_id:''},
				respuesta: {respuesta:'', examen_id:''},
			}
		},
		methods:{
			agregarPregunta(){
				let formData = new FormData();
				formData.append('enunciado', this.pregunta.enunciado);
				formData.append('examen_id', this.$route.params.id);
				formData.append('respuesta_id', this.pregunta.respuesta_id);
				axios.post('/pregunta',formData)
				.then(res=>{
					EventBus.$emit('add-pregunta', res.data.pregunta);
					this.pregunta.enunciado = "";
					this.pregunta.respuesta_id = "";
					$('#create-pregunta').modal('hide');
				})
			},
			mostrarRespuestas(){
				var url = '/respuesta';
				axios.get(url).then(res =>{
					this.respuestas = res.data
				})
			},
		}
	}
</script>