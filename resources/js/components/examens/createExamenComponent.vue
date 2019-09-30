<template>
	<div>
		<!-- crear registro -->
		<form v-on:submit.prevent="agregarExamen" enctype="multipart/form-data">
			<div class="modal fade" id="create">
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
									<input type="text"  name="name" class="form-control" v-model="examen.name" placeholder="Nombre de la examen">
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="imagen">Contenido</label>
									<input type="file" @change="obtenerArchivo" class="form-control-file" ref="texto">
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<label for="imagen"></label>
									<input type="file" @change="obtenerImagen" class="form-control-file" ref="img">
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
	</div>
</template>

<script>
	import EventBus from '../../event-bus';
	export default{
		data(){
			return{
				examen: {name: '',content:'',icon:''},
				imagenMiniatura:'',
			}
		},
		methods:{
			obtenerArchivo(e){
				let arch = e.target.files[0];
				this.examen.content = arch;
			},
			obtenerImagen(e){
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
			agregarExamen(){
				let formData = new FormData();
				formData.append('name', this.examen.name);
				formData.append('content', this.examen.content);
				formData.append('icon', this.examen.icon);

				axios.post('/examenes',formData)
				.then(res=>{
					EventBus.$emit('agregado', res.data.examen);
					this.examen.name = "";
					this.$refs.texto.value="";
					this.$refs.img.value = "";
					this.imagenMiniatura = "";
					$('#create').modal('hide')
				})
			},
		},
		computed:{
			imagen(){
				return this.imagenMiniatura;
			} 
		}
	}
</script>