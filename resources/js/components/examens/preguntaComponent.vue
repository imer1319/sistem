<template>
	<!-- listar las respuestas -->
	<div class="col-12">
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
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaA</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaA">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaB</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaB">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaC</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaC">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaD</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaD">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Correcta</label>
								<div class="col-md-10">
									<select v-model="fillpregunta.esCorrecto">
										<option disabled value="">Seleccione un elemento</option>
										<option v-for="option in options" v-bind:value="option.value">{{ option.value }}</option>
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
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">Preguntas</h3>
				<a href="#" class="btn btn-success float-right" data-toggle="modal" data-target="#createPregunta"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="preguntas" :list="preguntas" :per="4">
					<table class="table table-bordered table-striped py-5">
						<thead>
							<tr>
								<th>ID</th>
								<th>Enunciado</th>
								<th>RespuestaA</th>
								<th>RespuestaB</th>
								<th>RespuestaC</th>
								<th>RespuestaD</th>
								<th>Correcto</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(pregunta, index) in paginated('preguntas')" :key="index" v-if="pregunta.examen_id == $route.params.id">
								<td width="10px">{{ index+1 }}</td>
								<td>{{pregunta.enunciado}}</td>
								<td>{{ pregunta.respuestaA }}</td>
								<td>{{ pregunta.respuestaB }}</td>
								<td>{{ pregunta.respuestaC }}</td>
								<td>{{ pregunta.respuestaD }}</td>
								<td>{{ pregunta.esCorrecto }}</td>
								<td class="text-center">
									<a href="#" class="btn btn-warning color-letra" @click.prevent="editarPregunta(pregunta)"><i class="fas fa-pencil-alt"></i> Editar</a>
									<a href="#" class="btn btn-danger color-letra" v-on:click.prevent="eliminarPregunta(pregunta,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
								</td>
							</tr>
						</tbody>
					</table>
				</paginate>
				<paginate-links for="preguntas" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
			</div>
		</div>
	</div>
</template>
<script>
	import EventBus from '../../event-bus'
	export default{
		created(){
			this.mostrarPregunta();
			EventBus.$on('add-pregunta',data =>{
				this.preguntas.push(data)
			});
		},
		data(){
			return{
				preguntas:[],
				pregunta:{
					enunciado:'',examen_id:'',respuestaA:'',respuestaB:'',respuestaC:'',respuestaD:'',esCorrecto:''
				},
				fillpregunta: {
					enunciado: '',examen_id:'',respuestaA:'',respuestaB:'',respuestaC:'',respuestaD:'',esCorrecto:''
				},
				loading:true,
				paginate:['preguntas'],
				options:[
				{value: 'A'},
				{value: 'B'},
				{value: 'C'},
				{value: 'D'},
				],
			}
		},
		methods:{
			mostrarPregunta (){
				axios.get("/pregunta").then(res =>{
					this.preguntas = res.data
					this.loading = false;
				})
			},
			eliminarPregunta:function(pregunta,index){
				axios.delete(`/pregunta/${pregunta.id}`)
				.then(()=>{
					this.preguntas.splice(index,1); 
				})
			},
			editarPregunta:function (pregunta){
				this.fillpregunta.id = pregunta.id;
				this.fillpregunta.enunciado = pregunta.enunciado;
				this.fillpregunta.examen_id = this.$route.params.id;
				this.fillpregunta.respuestaA = pregunta.respuestaA;
				this.fillpregunta.respuestaB = pregunta.respuestaB;
				this.fillpregunta.respuestaC = pregunta.respuestaC;
				this.fillpregunta.respuestaD = pregunta.respuestaD;
				this.fillpregunta.esCorrecto = pregunta.esCorrecto;
				$('#editarPregunta').modal('show');
			},
			updatePregunta:function(fillpregunta){
				let data = new FormData();
				data.append('enunciado', this.fillpregunta.enunciado);
				data.append('examen_id', this.fillpregunta.examen_id);
				data.append('respuestaA', this.fillpregunta.respuestaA);
				data.append('respuestaB', this.fillpregunta.respuestaB);
				data.append('respuestaC', this.fillpregunta.respuestaC);
				data.append('respuestaD', this.fillpregunta.respuestaD);
				data.append('esCorrecto', this.fillpregunta.esCorrecto);
				if (this.fillpregunta.esCorrecto == "A") {data.append('esCorrecto', this.fillpregunta.respuestaA);}
				if (this.fillpregunta.esCorrecto == "B") {data.append('esCorrecto', this.fillpregunta.respuestaB);}
				if (this.fillpregunta.esCorrecto == "C") {data.append('esCorrecto', this.fillpregunta.respuestaC);}
				if (this.fillpregunta.esCorrecto == "D") {data.append('esCorrecto', this.fillpregunta.respuestaD);}
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

<style>
.color-letra, .color-letra:hover{
	color: white;
}
</style>