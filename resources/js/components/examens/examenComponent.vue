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
								<div class="form-group">
									<label for="imagen">Contenido</label>
									<input type="file" @change="obtenerArchivocrear" class="form-control-file" ref="txt" accept=".txt" required/>
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="imagen"></label>
									<input type="file" @change="obtenerImagencrear" id="f1" class="form-control-file" ref="img" accept="image/*" equired>
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
								<div class="form-group">
									<label for="imagen">Contenido</label>
									<input type="file" @change="obtenerArchivo" class="form-control-file"  ref="texto" accept=".txt">
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label></label>
									<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false" accept="image/*" equired>
									<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else accept="image/*" equired>
									<figure>
										<img width="200" height="200" :src="imagen" v-if="estado == false">
										<img width="200" height="200" :src="`imagenes/examen/${fillExamen.icon}`" v-else>
									</figure>
								</div>
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
				<h3 class="card-title">Examenes</h3>
				<a href="#" class="btn btn-success float-right" v-on:click="crearExamen()"><i class="fas fa-plus"></i> Crear Nuevo</a>
			</div>
			<spinner v-if="loading"></spinner>
			<div class="card-body" v-else>
				<paginate name="examens" :list="examens" :per="4">
					<table class="table table-bordered table-striped py-5">
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre</th>
								<th>Contenido</th>
								<th>Imagen</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(examen, index) in paginated('examens')" :key="index" >
								<td width="10px">{{ index+1}}</td>
								<td>{{examen.name}}</td>
								<td><span v-text="examen.content.substring(examen.content.length,10)"></span></td>
								<td><img :src="`/imagenes/examen/${examen.icon}`" class="img-responsive" height="40" width="40"></td>
								<td class="text-center" colspan="2">
									<router-link :to="{name : 'show',params:{id:examen.id}}" class="btn btn-info"><i class="fas fa-eye"></i> Ver
									</router-link>
									<a href="#" class="btn btn-warning color-letra" @click="editarExamen(examen)"><i class="fas fa-pencil-alt"></i> Editar</a>
									<a href="#" class="btn btn-danger color-letra" v-on:click="eliminarExamen(examen,index)"><i class="far fa-trash-alt"></i> Eliminar</a>
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
				examen: {name: '',content:'', icon:''},
				fillExamen: {name: '',content:'', icon:''},
				imagenMiniatura:'',
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
			obtenerArchivocrear(e){
				let arch = e.target.files[0];
				this.examen.content = arch;
			},
			obtenerImagencrear(e){
				let file = e.target.files[0];
				this.examen.icon = file;
				this.cargarImagen(file);
			},
			obtenerArchivo(e){
				let arch = e.target.files[0];
				this.fillExamen.content = arch;
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.fillExamen.icon = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.examen.icon = file;
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
			agregarExamen(){
				if (this.validarEspacios(this.examen.name)==false||this.validarEspacios(this.examen.content)==false||this.validarEspacios(this.examen.icon)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let formData = new FormData()
					formData.append('name', this.examen.name)
					formData.append('content', this.examen.content)
					formData.append('icon', this.examen.icon)
					axios.post('/examen',formData)
					.then(res=>{
						EventBus.$emit('agregado', res.data.examen)
						this.examen.name = ""
						this.$refs.txt.value=null
						this.$refs.img.value = null
						this.imagenMiniatura = null
						$('#creaExamen').modal('hide')
					})
				}	
			},
			confirmarDelete(){
				var resp = confirm("Estas seguro que deseas eliminarlo?");
				if (resp == true) {
					return true
				}else{ return false }
			},
			eliminarExamen:function(examen,index){
				if (this.confirmarDelete()==true) {
					axios.delete(`/examen/${examen.id}`)
					.then(()=>{
						this.examens.splice(index,1); 
					})
				}
			},
			editarExamen:function (examen){
				this.estado = true;
				this.fillExamen.name = examen.name;
				this.fillExamen.content = examen.content;
				this.fillExamen.icon = examen.icon;
				this.fillExamen.id = examen.id;
				$('#edit').modal('show');
			},
			updateExamen:function(fillExamen){
				if (this.validarEspacios(this.fillExamen.name)==false||this.validarEspacios(this.fillExamen.content)==false||this.validarEspacios(this.fillExamen.icon)==false) {
					alert("los campos no pueden estar vacios")
				}else{
					let data = new FormData();
					data.append('name', this.fillExamen.name);
					data.append('content', this.fillExamen.content);
					data.append('icon', this.examen.icon);
					data.append('_method','PUT');
					var url = `/examen/${fillExamen.id}`;
					axios.post(url, data).then(res=>{
						this.mostrarExamen();
						$('#edit').modal('hide');
					})
				}
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

<style>
.color-letra, .color-letra:hover{
	color: white;
}
</style>