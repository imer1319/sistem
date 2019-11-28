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
									<select v-model="pregunta.esCorrecto">
										<option disabled value="">Seleccione un elemento</option>
										<option v-for="option in options" v-bind:value="option.value">{{ option.value }}</option>
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
		data(){
			return{
				preguntas:[],
				pregunta:{enunciado:'',respuestaA:'',respuestaB:'',respuestaC:'',respuestaD:'',esCorrecto:'',examen_id:''},
				options:[
					{value: 'A'},
					{value: 'B'},
					{value: 'C'},
					{value: 'D'},
				],
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
				if (this.pregunta.esCorrecto == "A") {formData.append('esCorrecto', this.pregunta.respuestaA);}
				if (this.pregunta.esCorrecto == "B") {formData.append('esCorrecto', this.pregunta.respuestaB);}
				if (this.pregunta.esCorrecto == "C") {formData.append('esCorrecto', this.pregunta.respuestaC);}
				if (this.pregunta.esCorrecto == "D") {formData.append('esCorrecto', this.pregunta.respuestaD);}
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