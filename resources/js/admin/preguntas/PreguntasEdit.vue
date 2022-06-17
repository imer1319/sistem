<template>
	<div class="modal fade" id="preguntasEdit" tabindex="-1" role="dialog" aria-labelledby="preguntasEditLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<form @submit.prevent="updatePregunta">
					<div class="modal-header">
						<h5 class="modal-title" id="preguntasEditLabel">Editar pregunta</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="enunciado">Enunciado</label>
							<input v-model="pregunta.enunciado" class="form-control" placeholder="Enunciado de la pregunta">
							<span v-if="errors.enunciado" class="text-danger">{{ errors.enunciado[0] }}</span>
						</div>
						<div class="form-group">
							<label for="respuestaA">Respuesta A</label>
							<input v-model="pregunta.respuestaA" id="respuestaA" class="form-control" placeholder="Inciso A">
							<span v-if="errors.respuestaA" class="text-danger">{{ errors.respuestaA[0] }}</span>
						</div>
						<div class="form-group">
							<label for="respuestaB">Respuesta B</label>
							<input v-model="pregunta.respuestaB" id="respuestaB" class="form-control" placeholder="Inciso B">
							<span v-if="errors.respuestaB" class="text-danger">{{ errors.respuestaB[0] }}</span>
						</div>
						<div class="form-group">
							<label for="respuestaC">Respuesta C</label>
							<input v-model="pregunta.respuestaC" id="respuestaC" class="form-control" placeholder="Inciso C">
							<span v-if="errors.respuestaC" class="text-danger">{{ errors.respuestaC[0] }}</span>
						</div>
						<div class="form-group">
							<label for="respuestaD">Respuesta D</label>
							<input v-model="pregunta.respuestaD" id="respuestaD" class="form-control" placeholder="Inciso D">
							<span v-if="errors.respuestaD" class="text-danger">{{ errors.respuestaD[0] }}</span>
						</div>
						<div class="form-group">
							<label>Respuesta Correcta</label>
							<select v-model="pregunta.esCorrecto" class="form-control">
								<option v-for="option in options" :value="option">{{ option }}</option>
							</select>
							<span v-if="errors.esCorrecto" class="text-danger">{{ errors.esCorrecto[0] }}</span>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="submit" class="btn btn-primary">Guardar pregunta</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import EventBus from '../../event-bus'
export default{
	props:['pregunta'],
	data(){
		return {
			opciones:[],
			errors:[]
		}
	},
	methods:{
		updatePregunta(){
			let formData = new FormData();
			formData.append('enunciado', this.pregunta.enunciado);
			formData.append('respuestaA', this.pregunta.respuestaA);
			formData.append('respuestaB', this.pregunta.respuestaB);
			formData.append('respuestaC', this.pregunta.respuestaC);
			formData.append('respuestaD', this.pregunta.respuestaD);
			formData.append('esCorrecto', this.pregunta.esCorrecto);
			formData.append('_method','PUT');
			axios.post(`/api/preguntas/${this.pregunta.id}`,formData)
			.then(res=>{
				$('#preguntasEdit').modal('hide');
				EventBus.$emit('edit-pregunta', res.data);
				this.errors = []
			})
			.catch(err => {
				console.log(err.response.data.errors)
				this.errors = err.response.data.errors;
			})
		}
	},
	computed:{
		options(){
			return this.opciones = [
			this.pregunta.respuestaA,
			this.pregunta.respuestaB,
			this.pregunta.respuestaC,
			this.pregunta.respuestaD
			]
		}
	}
}
</script>