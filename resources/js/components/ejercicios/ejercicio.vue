<template>
	<div class="col-12">
		<!-- crear Ejercicio -->
		<form v-on:submit.prevent="agregarEjercicio" enctype="multipart/form-data">
			<div class="modal fade" id="createEjercicio">
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
									<input type="text"  class="form-control" v-model="ejercicio.name" placeholder="Nombre de la ejercicio" required>
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
		<!-- editar registro -->
		<form v-on:submit.prevent="updateEjercicio(fillEjercicio)" enctype="multipart/form-data">
			<div class="modal fade" id="editarEjercicio">
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
									<input type="text"  name="name" class="form-control" v-model="fillEjercicio.name" required>
								</div>
							</div>
						</div>
						<div class="modal-footer pb-0">
							<div class="form-group row">
								<div class="col-lg-6">
									<input type="submit" name="enviar" value="Actualizar Registro" class="btn btn-primary pull-right">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<!-- listar las ejercicios -->
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">ejercicios</h3>
				<a href="#" class="btn btn-success float-right" v-on:click="crearEjercicio()"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="ejercicios" :list="ejercicios" :per="5">
					<table class="table table-bordered table-striped py-5">
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(ejercicio, index) in paginated('ejercicios')" :key="index" >
								<td width="10px">{{ index+1}}</td>
								<td>{{ejercicio.name}}</td>
								<td class="float-right">
									<a href="#" class="btn btn-warning" @click="editarEjercicio(ejercicio)"><i class="fas fa-pencil-alt"></i> Editar</a>
								</td>
							</tr>
						</tbody>
					</table>
				</paginate>
				<paginate-links for="ejercicios" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default {
		created:function() {
			this.mostrarEjercicio();
			EventBus.$on('agregado',data =>{
				this.ejercicios.push(data)
			});
		},
		data() {
			return { 
				ejercicios: [],
				ejercicio: {name: ''},
				fillEjercicio: {name: ''},
				estado:false,
				loading:true,
				paginate:['ejercicios'],
			}
		},
		methods:{
			mostrarEjercicio:function(){
				axios.get('ejercicio').then(res =>{
					this.ejercicios = res.data
					this.loading = false;
				})
			},
			crearEjercicio(){
				$('#createEjercicio').modal('show');			
			},
			validarEspacios(parametro){
				var patron = /^\s+$/;
				if (patron.test(parametro)) {
					return false
				}else{return true}
			},
			editarEjercicio:function (ejercicio){
				this.estado = true;
				this.fillEjercicio.name = ejercicio.name;
				this.fillEjercicio.id = ejercicio.id;
				$('#editarEjercicio').modal('show');
			},
			updateEjercicio:function(fillEjercicio){
				if (this.validarEspacios(this.fillEjercicio.name)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let data = new FormData();
					data.append('name', this.fillEjercicio.name)
					data.append('_method','PUT')
					var url = `/ejercicio/${fillEjercicio.id}`
					axios.post(url, data).then(res=>{
						this.mostrarEjercicio()
						$('#editarEjercicio').modal('hide')
					})
				}
			},
			agregarEjercicio(){
				let formData = new FormData();
				formData.append('name', this.ejercicio.name)
				axios.post('ejercicio',formData)
				.then(res=>{
					EventBus.$emit('agregado', res.data.ejercicio)
					this.ejercicio.name = ""
					$('#createEjercicio').modal('hide')
				})
			},
		},
	}
</script>