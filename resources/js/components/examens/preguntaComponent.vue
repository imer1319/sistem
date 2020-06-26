<template>
	<div class="col-12">
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
									<input type="text"  class="form-control" v-model="pregunta.enunciado" placeholder="Nombre de la pregunta" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaA</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaA" placeholder="Nombre de la pregunta" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaB</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaB" placeholder="Nombre de la pregunta" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaC</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaC" placeholder="Nombre de la pregunta" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaD</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="pregunta.respuestaD" placeholder="Nombre de la pregunta" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Correcta</label>
								<div class="col-md-10">
									<select v-model="pregunta.esCorrecto" class="form-control">
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
		<!-- editar preguntas -->
		<form v-on:submit.prevent="updatePregunta(fillpregunta)" enctype="multipart/form-data">
			<div class="modal fade" id="editarPregunta">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Editar Preguntas</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body pb-0">
							<div class="form-group row">
								<label class="col-form-label col-md-2">Enunciado</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.enunciado" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaA</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaA" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">RespuestaB</label>
								<div class="col-md-10">
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaB" required>
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
									<input type="text"  class="form-control" v-model="fillpregunta.respuestaD" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Correcta</label>
								<div class="col-md-10">
									<select v-model="fillpregunta.esCorrecto" class="form-control">
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
				<h3 class="card-title">Preguntas <span>{{ contador }}</span> de 10</h3>
				<a class="btn btn-success float-right" id="btn_agragar" @click.prevent="crearPregunta()"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="preguntas" :list="preguntas" :per="5">
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>ID</th>
								<th>Enunciado</th>
								<th>Respuestas</th>
								<th>Correcto</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(pregunta, index) in paginated('preguntas')" :key="index" >
								<td width="10px">{{ index+1 }}</td>
								<td>{{pregunta.enunciado}}</td>
								<td><span><b>A) </b></span>{{ pregunta.respuestaA }}<br>
									<span><b>B) </b></span>{{ pregunta.respuestaB }}<br>
									<span><b>C) </b></span>{{ pregunta.respuestaC }}<br>
									<span><b>D) </b></span>{{ pregunta.respuestaD }}<br>
								</td>
								<td>{{ pregunta.esCorrecto }}</td>
								<td class="text-center">
									<a href="#" class="btn btn-warning color-letra" @click.prevent="editarPregunta(pregunta)"><i class="fas fa-pencil-alt"></i> Editar</a>
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
					enunciado:'',respuestaA:'',respuestaB:'',respuestaC:'',respuestaD:'',esCorrecto:''
				},
				fillpregunta: {
					enunciado: '',respuestaA:'',respuestaB:'',respuestaC:'',respuestaD:'',esCorrecto:''
				},
				loading:true,
				paginate:['preguntas'],
				options:[
				{value: 'A'},
				{value: 'B'},
				{value: 'C'},
				{value: 'D'},
				],
				contador:0,
			}
		},
		methods:{
			mostrarPregunta (){
				var url = "/pregunta/"+this.$route.params.id;
				axios.get(url).then(res =>{
					this.preguntas = res.data;
					this.loading = false;
					this.contador = this.preguntas.length;
					if (this.contador >= 10 ) {
						document.getElementById("btn_agragar").classList.add('disabled')
					}
				})
			},
			crearPregunta(){
				$('#createPregunta').modal('show');
			},
			validarEspacios(parametro){
				var patron = /^\s+$/;
				if (patron.test(parametro)) {
					return false
				}else{return true}
			},
			alerta:function(icono,titulo){
				const Toast = this.$swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 2000,
					onOpen: (toast) => {
						toast.addEventListener('mouseenter', this.$swal.stopTimer)
						toast.addEventListener('mouseleave', this.$swal.resumeTimer)
					}
				})
				Toast.fire({
					icon: icono,
					title: titulo
				})
			},
			agregarPregunta(){
				if (this.validarEspacios(this.pregunta.enunciado)==false||this.validarEspacios(this.pregunta.respuestaA)==false||this.validarEspacios(this.pregunta.respuestaB)==false||this.validarEspacios(this.pregunta.respuestaC)==false||this.validarEspacios(this.pregunta.respuestaD)==false||this.validarEspacios(this.pregunta.esCorrecto)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let formData = new FormData();
					formData.append('enunciado', this.pregunta.enunciado);
					formData.append('exam_id', this.$route.params.id);
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
						$('#createPregunta').modal('hide');
						EventBus.$emit('add-pregunta', res.data.pregunta);
						this.pregunta.enunciado = "";
						this.pregunta.respuestaA = "";
						this.pregunta.respuestaB = "";
						this.pregunta.respuestaC = "";
						this.pregunta.respuestaD = "";
						this.pregunta.esCorrecto = "";
						this.mostrarPregunta()
						this.alerta('success','Se a agregado correctamente')
					})
				}
			},
			editarPregunta:function (pregunta){
				this.fillpregunta.id = pregunta.id;
				this.fillpregunta.enunciado = pregunta.enunciado;
				this.fillpregunta.exam_id = this.$route.params.id;
				this.fillpregunta.respuestaA = pregunta.respuestaA;
				this.fillpregunta.respuestaB = pregunta.respuestaB;
				this.fillpregunta.respuestaC = pregunta.respuestaC;
				this.fillpregunta.respuestaD = pregunta.respuestaD;
				if(pregunta.esCorrecto == pregunta.respuestaA){this.fillpregunta.esCorrecto = "A"}
				else if(pregunta.esCorrecto == pregunta.respuestaB){this.fillpregunta.esCorrecto = "B"}
				else if(pregunta.esCorrecto == pregunta.respuestaC){this.fillpregunta.esCorrecto = "C"}
				else if(pregunta.esCorrecto == pregunta.respuestaD){this.fillpregunta.esCorrecto = "D"}
				$('#editarPregunta').modal('show');
			},
			updatePregunta:function(fillpregunta){
				if (this.validarEspacios(this.fillpregunta.enunciado)==false||this.validarEspacios(this.fillpregunta.respuestaA)==false||this.validarEspacios(this.fillpregunta.respuestaB)==false||this.validarEspacios(this.fillpregunta.respuestaC)==false||this.validarEspacios(this.fillpregunta.respuestaD)==false||this.validarEspacios(this.fillpregunta.esCorrecto)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let data = new FormData();
					data.append('enunciado', this.fillpregunta.enunciado);
					data.append('exam_id', this.fillpregunta.exam_id);
					data.append('respuestaA', this.fillpregunta.respuestaA);
					data.append('respuestaB', this.fillpregunta.respuestaB);
					data.append('respuestaC', this.fillpregunta.respuestaC);
					data.append('respuestaD', this.fillpregunta.respuestaD);
					if (this.fillpregunta.esCorrecto == "A") {data.append('esCorrecto', this.fillpregunta.respuestaA);}
					if (this.fillpregunta.esCorrecto == "B") {data.append('esCorrecto', this.fillpregunta.respuestaB);}
					if (this.fillpregunta.esCorrecto == "C") {data.append('esCorrecto', this.fillpregunta.respuestaC);}
					if (this.fillpregunta.esCorrecto == "D") {data.append('esCorrecto', this.fillpregunta.respuestaD);}
					data.append('_method','PUT');
					var url = `/pregunta/${fillpregunta.id}`;
					axios.post(url, data).then(res=>{
						this.mostrarPregunta();
						this.alerta('warning','Se a modificado el registro')
						$('#editarPregunta').modal('hide');
					})
				}
			},
		}
	}
</script>

<style>
.color-letra, .color-letra:hover{
	color: white;
}
#btn_agragar, #btn_agragar:hover{
	color: white;
}
</style>