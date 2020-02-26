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
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="ejercicio.description" placeholder="Describa la ejercicio" maxlength="150" required></textarea>
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="imagen"></label>
									<input type="file" @change="obtenerImagencrear" class="form-control-file" ref="img" accept="image/*" required>
								</div>
								<figure>
									<img width="200" height="200" :src="imagen">
								</figure>
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
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="fillEjercicio.description" placeholder="Describa la insignia" maxlength="150"  required></textarea>
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label></label>
									<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false" accept="image/*" equired>
									<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else accept="image/*" equired>
								</div>
								<figure>
									<img width="200" height="200" :src="imagen" v-if="estado == false">
									<img width="200" height="200" :src="`imagenes/ejercicios/${fillEjercicio.icon}`" v-else>
								</figure>
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
								<th>Descripcion</th>
								<th class="text-center">Imagen</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(ejercicio, index) in paginated('ejercicios')" :key="index" >
								<td width="10px">{{ index+1}}</td>
								<td>{{ejercicio.name}}</td>
								<td>{{ejercicio.description}}</td>
								<td class="text-center"><img :src="`imagenes/ejercicios/${ejercicio.icon}`" class="img-responsive" height="60" width="70"></td>
								<td class="float-right">
									<a href="#" class="btn btn-warning" @click="editarEjercicio(ejercicio)"><i class="fas fa-pencil-alt"></i> Editar</a>
									<a href="#" class="btn btn-danger" v-on:click="eliminarEjercicio(ejercicio,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
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
				ejercicio: {name: '',description:'', icon:'',categoria_id:''},
				fillEjercicio: {name: '',description:'', icon:'',categoria_id:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
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
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillEjercicio.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.ejercicio.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagencrear(e){
				let file = e.target.files[0];
				this.ejercicio.icon = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			validarEspacios(parametro){
				var patron = /^\s+$/;
				if (patron.test(parametro)) {
					return false
				}else{return true}
			},
			confirmarDelete(){
				var resp = confirm("Estas seguro que deseas eliminarlo?");
				if (resp == true) {
					return true
				}else{ return false }
			},
			eliminarEjercicio:function(ejercicio,index){
				if (this.confirmarDelete()==true) {
					axios.delete(`/ejercicio/${ejercicio.id}`)
					.then(()=>{
						this.ejercicios.splice(index,1); 
					})
				}
			},
			editarEjercicio:function (ejercicio){
				this.estado = true;
				this.fillEjercicio.name = ejercicio.name;
				this.fillEjercicio.description = ejercicio.description;
				this.fillEjercicio.icon = ejercicio.icon;
				this.fillEjercicio.id = ejercicio.id;
				$('#editarEjercicio').modal('show');
			},
			updateEjercicio:function(fillEjercicio){
				if (this.validarEspacios(this.fillEjercicio.name)==false||this.validarEspacios(this.fillEjercicio.description)==false||this.validarEspacios(this.fillEjercicio.icon)==false||this.validarEspacios(this.fillEjercicio.categoria_id)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let data = new FormData();
					data.append('name', this.fillEjercicio.name);
					data.append('description', this.fillEjercicio.description);
					data.append('icon', this.fillEjercicio.icon);
					data.append('_method','PUT');
					var url = `/ejercicio/${fillEjercicio.id}`;
					axios.post(url, data).then(res=>{
						this.mostrarEjercicio();
						$('#editarEjercicio').modal('hide');
					})
				}
			},
			agregarEjercicio(){
				let formData = new FormData();
				formData.append('name', this.ejercicio.name);
				formData.append('description', this.ejercicio.description);
				formData.append('icon', this.ejercicio.icon);
				axios.post('ejercicio',formData)
				.then(res=>{
					EventBus.$emit('agregado', res.data.ejercicio);
					this.ejercicio.name = "";
					this.ejercicio.description = "";
					this.$refs.img.value = "";
					this.imagenMiniatura = "";
					$('#createEjercicio').modal('hide')
				})
			},
		},
		computed:{
			imagen(){
				this.estado = false;
				return this.imagenMiniatura;
			} 
		}
	}
</script>