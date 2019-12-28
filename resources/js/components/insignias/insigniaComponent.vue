<template>
	<div class="col-12">
		<!-- crear Insignia -->
		<form v-on:submit.prevent="agregarInsignia" enctype="multipart/form-data">
			<div class="modal fade" id="createInsignia">
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
									<input type="text"  name="name" class="form-control" v-model="insignia.name" placeholder="Nombre de la insignia" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="insignia.description" placeholder="Describa la insignia" maxlength="150"  required></textarea>
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
		<form v-on:submit.prevent="updateInsignia(fillInsignia)" enctype="multipart/form-data">
			<div class="modal fade" id="editInsignia">
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
									<input type="text"  name="name" class="form-control" v-model="fillInsignia.name" required>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="fillInsignia.description" placeholder="Describa la insignia"maxlength="150"  required></textarea>
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label></label>
									<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false" accept="image/*" equired>
									<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else  accept="image/*" equired>
								</div>
								<figure>
									<img width="200" height="200" :src="imagen" v-if="estado == false">
									<img width="200" height="200" :src="`imagenes/insignias/${fillInsignia.icon}`" v-else>
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
		<!-- listar las insignias -->
		<div class="card">
			<div class="card-header">
				<h3 class="card-title">Insignias</h3>
				<a href="#" class="btn btn-success float-right"  v-on:click="crearInsignia()"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="insignias" :list="insignias" :per="5">
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
							<tr v-for="(insignia, index) in paginated('insignias')" :key="index" >
								<td width="10px">{{ index+1}}</td>
								<td>{{insignia.name}}</td>
								<td>{{insignia.description}}</td>
								<td class="text-center"><img :src="`imagenes/insignias/${insignia.icon}`" class="img-responsive" height="60" width="70"></td>
								<td class="float-right">
									<a href="#" class="btn btn-warning" @click="editarInsignia(insignia)"><i class="fas fa-pencil-alt"></i> Editar</a>
									<a href="#" class="btn btn-danger" v-on:click="eliminarInsignia(insignia,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
								</td>
							</tr>
						</tbody>
					</table>
				</paginate>
				<paginate-links for="insignias" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default {
		created:function() {
			this.mostrarInsignia();
			EventBus.$on('agregado',data =>{
				this.insignias.push(data)
			});
		},
		data() {
			return { 
				insignias: [],
				insignia: {name: '',description:'', icon:''},
				fillInsignia: {name: '',description:'', icon:''},
				imagenMiniatura:'',
				loading:true,
				estado:false,
				paginate:['insignias'],
			}
		},
		methods:{
			confirmarDelete(){
				var resp = confirm("Estas seguro que deseas eliminarlo?");
				if (resp == true) {
					return true
				}else{ return false }
			},
			mostrarInsignia:function(){
				axios.get('insignia').then(res =>{
					this.insignias = res.data
					this.loading = false;
				})
			},
			crearInsignia(){
				$('#createInsignia').modal('show')
			},
			obtenerImagencrear(e){
				let file = e.target.files[0];
				this.insignia.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillInsignia.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.insignia.icon = file;
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
			agregarInsignia(){
				if (this.validarEspacios(this.insignia.name)==false||this.validarEspacios(this.insignia.description)==false||this.validarEspacios(this.insignia.icon)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let formData = new FormData();
					formData.append('name', this.insignia.name);
					formData.append('description', this.insignia.description);
					formData.append('icon', this.insignia.icon);

					axios.post('/insignia',formData)
					.then(res=>{
						EventBus.$emit('agregado', res.data.insignia);
						this.insignia.name = "";
						this.insignia.description = "";
						this.$refs.img.value = "";
						this.imagenMiniatura = "";
						$('#createInsignia').modal('hide')
					})
				}
			},
			eliminarInsignia:function(insignia,index){
				if (this.confirmarDelete()==true) {
					axios.delete(`/insignia/${insignia.id}`)
					.then(()=>{
						this.insignias.splice(index,1); 
					})
				}
			},
			editarInsignia:function (insignia){
				this.estado = true;
				this.fillInsignia.name = insignia.name;
				this.fillInsignia.description = insignia.description;
				this.fillInsignia.icon = insignia.icon;
				this.fillInsignia.id = insignia.id;
				$('#editInsignia').modal('show');
			},
			updateInsignia:function(fillInsignia){
				if (this.validarEspacios(this.fillInsignia.name)==false||this.validarEspacios(this.fillInsignia.description)==false||this.validarEspacios(this.fillInsignia.icon)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let data = new FormData();
					data.append('name', this.fillInsignia.name);
					data.append('description', this.fillInsignia.description);
					data.append('icon', this.insignia.icon);
					data.append('_method','PUT');
					var url = `/insignia/${fillInsignia.id}`;
					axios.post(url, data).then(res=>{
						this.mostrarInsignia();
						$('#editInsignia').modal('hide');
					})
				}
			}
		},
		computed:{
			imagen(){
				this.estado = false;
				return this.imagenMiniatura;
			} 
		}
	}
</script>