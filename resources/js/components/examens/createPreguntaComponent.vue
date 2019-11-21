<template>
	<div>
		<!-- crear registro de pregunta-->
		<form v-on:submit.prevent="agregarPregunta" enctype="multipart/form-data">
			<div class="modal fade" id="createPregunta">
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
								<label class="col-form-label col-md-2">Enunciado</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.enunciado" placeholder="Nombre de la pregunta">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaA</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaA" placeholder="Nombre de la pregunta">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaB</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaB" placeholder="Nombre de la pregunta">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaC</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaC" placeholder="Nombre de la pregunta">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaD</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaD" placeholder="Nombre de la pregunta">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Correcta</label>
								<div class="col-md-10">
									<select v-model="selected">
										<option disabled value="">Seleccione un elemento</option>
										<option>A</option>
										<option>B</option>
										<option>C</option>
										<option>D</option>
									</select>
									<span>Seleccionado: {{ selected }}</span>
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
		data(){
			return{
				selected: '',
				preguntas:[],
				pregunta:{enunciado:'',respuestaA:'',respuestaB:'',respuestaC:'',respuestaCorrecta:'',examen_id:''},
			}
		},
		methods:{
			agregarPregunta(){
				let formData = new FormData();
				formData.append('enunciado', this.pregunta.enunciado);
				formData.append('examen_id', this.$route.params.id);
				formData.append('respuestaA', this.pregunta.respuestaA);
				formData.append('respuestaB', this.pregunta.respuestaB);
				formData.append('respuestaC', this.pregunta.respuestaC);
				formData.append('respuestaD', this.pregunta.respuestaD);
				formData.append('esCorrecto', this.pregunta.esCorrecto);
				axios.post('/pregunta',formData)
				.then(res=>{
					EventBus.$emit('add-pregunta', res.data.pregunta);
					this.pregunta.enunciado = "";
					this.pregunta.respuestaA = "";
					this.pregunta.respuestaB = "";
					this.pregunta.respuestaC = "";
					this.pregunta.respuestaD = "";
					this.pregunta.esCorrecto = "";
					$('#createPregunta').modal('hide');
				})
			},
		}
	}
</script>