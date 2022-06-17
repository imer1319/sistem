<template>
	<div class="card">
		<div class="card-body">
			<div class="d-flex justify-content-between align-items-center mb-3">
				<h5>
					Preguntas <span>{{ preguntas.length }}</span> de 10
				</h5>
				<a class="btn btn-success text-white" :class="disabledClass()" id="btn_agragar" @click.prevent="createPreguntas()"><i class="fas fa-plus"></i> Crear Nuevo</a>
				<preguntas-create :exam_id="exam_id"></preguntas-create>
			</div>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Enunciado</th>
						<th>Respuestas</th>
						<th>Correcto</th>
						<th class="text-center">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(pregunta, index) in preguntas" :key="index" >
						<td width="10px">{{ index+1 }}</td>
						<td>{{pregunta.enunciado}}</td>
						<td><span><b>A) </b></span>{{ pregunta.respuestaA }}<br>
							<span><b>B) </b></span>{{ pregunta.respuestaB }}<br>
							<span><b>C) </b></span>{{ pregunta.respuestaC }}<br>
							<span><b>D) </b></span>{{ pregunta.respuestaD }}<br>
						</td>
						<td>{{ pregunta.esCorrecto }}</td>
						<td class="text-center">
							<a href="#" class="btn btn-warning text-white" @click.prevent="editPreguntas(pregunta)"><i class="fas fa-pencil-alt"></i> Editar</a>
						</td>
					</tr>
				</tbody>
			</table>
			<preguntas-edit :pregunta="pregunta"></preguntas-edit>
		</div>
	</div>
</template>
<script>
import EventBus from '../../event-bus'

export default{
	props:['exam_id'],
	mounted(){
		this.getPreguntas();
		EventBus.$on('add-pregunta',data =>{
			this.preguntas.push(data)
		});
		EventBus.$on('edit-pregunta', ()=>{
			this.pregunta = {}
		});
	},
	data(){
		return {
			preguntas:[],
			pregunta:{}
		}
	},
	methods:{
		getPreguntas(){
			axios.get(`/api/preguntas/${this.exam_id}`)
			.then(res =>{
				this.preguntas = res.data;
			})
			.catch(err => {
				console.log(err.response.data)
			})
		},
		createPreguntas(){
			$('#preguntasCreate').modal('show');
		},
		editPreguntas(pregunta){
			this.pregunta = pregunta
			$('#preguntasEdit').modal('show');
		},
		disabledClass(){
			return this.preguntas.length >= 10
			? 'disabled'
			: '';
		}
	}
}
</script>