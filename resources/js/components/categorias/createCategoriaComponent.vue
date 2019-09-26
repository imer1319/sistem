<template>
	<div>
		<!-- crear registro -->
		<form v-on:submit.prevent="agregarCategoria" enctype="multipart/form-data">
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
									<input type="text"  name="name" class="form-control" v-model="categoria.name" placeholder="Nombre de la categoria">
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
				categoria: {name: '',icon:''},
				imagenMiniatura:'',
			}
		},
		methods:{
			obtenerImagen(e){
				let file = e.target.files[0];
				this.categoria.icon = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			agregarCategoria(){
				let formData = new FormData();
				formData.append('name', this.categoria.name);
				formData.append('icon', this.categoria.icon);

				axios.post('/categoria',formData)
				.then(res=>{
					EventBus.$emit('agregado', res.data.categoria);
					this.categoria.name = "";
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