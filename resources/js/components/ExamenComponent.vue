<template>
	<div class="row">
		<div class="col-sm-6">
			<form @submit.prevent="editarExamen(examen)" v-if="modoEditar">
				<h3>Editar examen</h3>
				<input type="text" class="form-control mb-2" 
				placeholder="Nombre del examen" v-model="examen.title">
				<input type="text" class="form-control mb-2" 
				placeholder="Descripción del examen" v-model="examen.descripcion">
				<button class="btn btn-warning" type="submit">Editar</button>
				<button class="btn btn-danger" type="submit" 
				@click="cancelarEdicion">Cancelar</button>
			</form>
			<form @submit.prevent="agregar" v-else>
				<h3>Agregar examen</h3>
				<input type="text" class="form-control mb-2" 
				placeholder="titulo del examen" v-model="examen.title">
				<input type="text" class="form-control mb-2" 
				placeholder="Descripción del examen" v-model="examen.descripcion">
				<button class="btn btn-primary" type="submit">Agregar</button>
			</form>
			<hr>
			<h3>Lista de examenes:</h3>
			<ul class="list-group">
				<li class="list-group-item" 
				v-for="(item, index) in exams" :key="index" >
				<span class="badge badge-primary float-right">
					{{item.updated_at}}
				</span>
				<p>{{item.title}}</p>
				<p>{{item.descripcion}}</p>
				<p>
					<button class="btn btn-warning btn-sm" 
					@click="editarFormulario(item)">Editar</button>
					<button class="btn btn-danger btn-sm" 
					@click="eliminarExamen(item, index)">Eliminar</button>
				</p>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				exams: [],
				modoEditar: false,
				examen: {title: '', descripcion: ''}
			}
		},
		created(){
			axios.get('/examen').then(res=>{
				this.exams = res.data;
			})
		},
		methods:{
			agregar(){
				if(this.examen.title.trim() === '' || this.examen.descripcion.trim() === ''){
					alert('Debes completar todos los campos antes de guardar');
					return;
				}
				const nuevoExamen = this.examen;
				this.examen = {title: '', descripcion: ''};    
				axios.post('/examen', nuevoExamen)
				.then((res) =>{
					const examServidor = res.data;
					this.exams.push(examServidor);
				})
			},
			editarFormulario(item){
				this.examen.title = item.title;
				this.examen.descripcion = item.descripcion;
				this.examen.id = item.id;
				this.modoEditar = true;
			},
			editarExamen(examen){
				const params = {title: examen.title, descripcion: examen.descripcion};
				axios.put(`/examen/${examen.id}`, params)
				.then(res=>{
					this.modoEditar = false;
					const index = this.exams.findIndex(item => item.id === examen.id);
					this.exams[index] = res.data;
					this.examen = {title: '', descripcion: ''}
					axios.get('/examen').then(res=>{
						this.exams = res.data;
					})
				})
			},
			eliminarExamen(item, index){
				axios.delete(`/examen/${item.id}`)
				.then(()=>{
					this.exams.splice(index, 1);
				})
			},
			cancelarEdicion(){
				this.modoEditar = false;
				this.examen = {title: '', descripcion: ''};
			}
		}
	}
</script>