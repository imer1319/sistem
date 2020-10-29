<template>
	<div class="col-12">
		<!-- crear registro -->
		<form v-on:submit.prevent="agregarExamen" enctype="multipart/form-data">
			<div class="modal fade" id="creaExamen">
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
									<input type="text"  name="name" class="form-control" v-model="examen.name" placeholder="Nombre de la examen" required>
								</div>
							</div>
							<div class="form-group">
								<label>Contenido</label>
								<textarea class="form-control" rows="5" v-model="examen.content"></textarea>
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
		<!-- Editar registro -->
		<form v-on:submit.prevent="updateExamen(fillExamen)" enctype="multipart/form-data">
			<div class="modal fade" id="edit">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4>Editar</h4>
							<button type="button" class="close" data-dismiss="modal">
								<span>&times;</span>
							</button>
						</div>
						<div class="modal-body pb-0">
							<div class="form-group row">
								<label class="col-form-label col-md-2">Nombre</label>
								<div class="col-md-10">
									<input type="text"  name="name" class="form-control" v-model="fillExamen.name" placeholder="Nombre de la examen" required>
								</div>
							</div>
							<div class="form-group">
								<label>Contenido</label>
								<textarea class="form-control" rows="5" v-model="fillExamen.content"></textarea>
							</div>
							<div class="modal-footer pb-0">
								<div class="form-group row">
									<div class="col-lg-6">
										<input type="submit" name="enviar" value="Editar Registro" class="btn btn-primary pull-right">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<!-- listar los examenes -->
		<div class="card">
			<div class="card-header">
				<h2 class="card-title">Examenes</h2>
				<a class="btn btn-success float-right text-white" v-on:click="crearExamen()"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="examens" :list="examens" :per="4">
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(examen, index) in paginated('examens')" :key="index" >
								<td width="10px">{{ index+1}}</td>
								<td>{{examen.name}}</td>
								<td class="text-center" colspan="2">
									<router-link :to="{name : 'show',params:{id:examen.id}}" class="btn btn-info"><i class="fas fa-eye"></i> Ver
									</router-link>
									<a class="btn btn-warning text-white" @click="editarExamen(examen)"><i class="fas fa-pencil-alt"></i> Editar</a>
								</td>
							</tr>
						</tbody>
					</table>
				</paginate>
				<paginate-links for="examens" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
			</div>
		</div>
	</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default {
		created:function() {
			this.mostrarExamen();
			EventBus.$on('agregado',data =>{
				this.examens.push(data)
			});
		},
		data() {
			return { 
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				examens: [],
				examen: {name: '',content:''},
				fillExamen: {name: '',content:''},
				respuestas: [],
				respuesta: {respuesta:'', examen_id:''},
				loading:true,
				estado:false,
				id_examen:'',
				paginate:['examens'],

			}
		},
		methods:{
			crearExamen:function(){
				$('#creaExamen').modal('show');
			},
			mostrarExamen:function(){
				axios.get('examen').then(res =>{
					this.examens = res.data
					this.loading = false;
				})
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
			agregarExamen(){
				if (this.validarEspacios(this.examen.name)==false||this.validarEspacios(this.examen.content)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let formData = new FormData()
					formData.append('name', this.examen.name)
					formData.append('content', this.examen.content)
					axios.post('/examen',formData)
					.then(res=>{
						EventBus.$emit('agregado', res.data.examen)
						this.examen.name = ""
						this.examen.content = ""
						this.alerta('success','Se a agregado correctamente')
						$('#creaExamen').modal('hide')
					})
				}	
			},
			editarExamen:function (examen){
				this.estado = true;
				this.fillExamen.name = examen.name;
				this.fillExamen.content = examen.content;
				this.fillExamen.id = examen.id;
				$('#edit').modal('show');
			},
			updateExamen:function(fillExamen){
				if (this.validarEspacios(this.fillExamen.name)==false||this.validarEspacios(this.fillExamen.content)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let data = new FormData();
					data.append('name', this.fillExamen.name);
					data.append('content', this.fillExamen.content);
					data.append('_method','PUT');
					var url = `/examen/${fillExamen.id}`;
					axios.post(url, data).then(res=>{
						this.mostrarExamen();
						this.alerta('warning','Se a modificado el registro')
						$('#edit').modal('hide');
					})
				}
			},
		}
	}
</script>
