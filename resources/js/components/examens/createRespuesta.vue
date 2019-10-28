<template>
	<div>
		<form @submit="agregarRespuesta" id="dynamic_form">
			<div class="modal fade" id="create-respuesta">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Crear</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<div class="btn btn-primary" @click="addNewRespuesta">Agregar </div>
							</div>
							<div class="form-group row">
								<table class="table table-bordered">
									<thead>
										<th class="col-9">Respuesta</th>
										<th >Accion</th>
									</thead>
									<tbody>
										<tr v-for="(resp,index) in count_resp">
											<td>
												<input type="text" class="form-control" name="respuesta[]" placeholder="Respuesta de la respuesta">
												<input type="hidden" class="form-control" name="examen_id[]" :value="$route.params.id">
											</td>
											<td>
												<div class="btn btn-danger" @click="removeRespuesta(index)">Borrar</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<input type="hidden" name="_token" :value="csrf">
							<input type="submit" name="save" id="save" class="btn btn-primary" value="Save" />
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default{
		mounted(){
			this.mostrarRespuestas();
		},
		data(){
			return{
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				respuestas: [],
				respuesta: {respuesta:'', examen_id:''},
				count_resp:1,
			}
		},
		methods:{
			mostrarRespuestas(){
				var url = '/respuesta';
				axios.get(url).then(res =>{
					this.respuestas = res.data
				})
			},
			agregarRespuesta(){
				let formData = new FormData($('#dynamic_form')[0]);
				axios.post('/respuesta',formData)
				.then(res=>{
					EventBus.$emit('add-respuesta', res.data.respuesta);
					this.respuestas = [],
					$('#create-respuesta').modal('hide')
				})
			},
			addNewRespuesta() {
				this.count_resp++;
				this.respuestas.push({
					respuesta:'', examen_id:''
				});
			},
			removeRespuesta(index){
				this.count_resp--;
				this.respuestas.splice(index,1);
			},
		}
	}
</script>