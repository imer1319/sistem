<template>
	<div>
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
									<input type="text"  name="name" class="form-control" v-model="ejercicio.name" placeholder="Nombre de la ejercicio">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-form-label col-md-2">Descripcion</label>
								<div class="col-md-10">
									<textarea rows="3" cols="5" name="description" class="form-control" v-model="ejercicio.description" placeholder="Describa la ejercicio"></textarea>
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
				ejercicio: {name: '',description:'',icon:''},
				imagenMiniatura:'',
			}
		},
		methods:{
			obtenerImagen(e){
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
			agregarEjercicio(){
				let formData = new FormData();
				formData.append('name', this.ejercicio.name);
				formData.append('description', this.ejercicio.description);
				formData.append('icon', this.ejercicio.icon);

				axios.post('/ejercicio',formData)
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
				return this.imagenMiniatura;
			} 
		}
	}
</script>