<template>
	<div class="col-12">
		<spinner v-if="loading"></spinner>
		<div class="row" v-else>
			<div class="col-12">
				<div class="card card-primary card-outline">
					<div class="card-body">
						<div class="row">
							<div class="col-4">
								<div class="text-center">
									<img class="img-responsive"
									:src="`/imagenes/usuario/${usuario.avatar}`" height="120" width="120">
								</div>
								<h2 class="profile-username text-center">{{usuario.name}}</h2>
							</div>
							<div class="col-8">
								<h6 class="text-center">DATOS DEL USUARIO</h6>
								<div class="row">
									<div class="col-6">
										<h5>APELLIDOS</h5>
										<h6>{{ usuario.apellido_paterno }} {{ usuario.apellido_materno }}</h6>
									</div>
									<div class="col-6">
										<h5>PUNTOS</h5>
										<h6>{{ usuario.puntos }}</h6>
									</div>
									<div class="col-6">
										<h5>Contraseña</h5>
										<h6>{{ usuario.hash_password }}</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12">
				<div class="card">
					<div class="card-header p-2">
						<ul class="nav nav-pills">
							<li class="nav-item"><a class="nav-link active" href="#rango" data-toggle="tab">Rango</a></li>
							<li class="nav-item"><a class="nav-link" href="#perfil" data-toggle="tab" @click.prevent="editarUsuario()">Editar Perfil</a></li>
							<li class="nav-item"><a class="nav-link" href="#avanceE" data-toggle="tab" @click.prevent="
							getDataExamUser(usuario.id)">Avances Examen</a></li>
							<li class="nav-item"><a class="nav-link" href="#avanceG" data-toggle="tab" @click.prevent="
							getDataGame1Sum(usuario.id)">Avances Ejercicios</a></li>
						</ul>
					</div>
					<div class="card-body">
						<div class="tab-content">
							<div class="active tab-pane" id="rango">
								<div class="text-center">
									<div v-for="(rango, index) in rangos" :key="index">
										<div v-if="usuario.puntos < 100">
											<div v-if="rango.nombre == 'Rango #1'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>Bronce</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 100 && usuario.puntos <300">
											<div v-if="rango.nombre == 'Rango #2'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>Plata</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 300 && usuario.puntos <700">
											<div v-if="rango.nombre == 'Rango #3'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>Oro</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 700 && usuario.puntos < 1000">
											<div v-if="rango.nombre == 'Rango #4'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>Platino</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >= 1000 && usuario.puntos < 2000">
											<div v-if="rango.nombre == 'Rango #5'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>Diamante</b></h3>
												</div>
											</div>
										</div>
										<div v-if="usuario.puntos >=2000">
											<div v-if="rango.nombre == 'Rango #6'">
												<div class="text-center">
													<img :src="`../imagenes/rangos/${rango.avatar}`" class="img-responsive" width="30%">
													<h3><b>Campeones</b></h3>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="perfil">
								<form v-on:submit.prevent="updateUsuario(fillUsuario)" enctype="multipart/form-data">
									<div class="form-group row">
										<label class="col-form-label col-md-2">Nombre</label>
										<div class="col-md-10">
											<input type="text"  class="form-control" v-model="fillUsuario.name" required>
											<span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Apellido Paterno</label>
										<div class="col-md-10">
											<input type="text" class="form-control" v-model="fillUsuario.apellido_paterno">
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-md-2">Apellido Materno</label>
										<div class="col-md-10">
											<input type="text" class="form-control" v-model="fillUsuario.apellido_materno">
										</div>
									</div>
									<div class="form-group">
										<div class="form-group">
											<input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false" accept="image/*" equired>
											<input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else accept="image/*" equired>
										</div>
										<figure>
											<img width="200" height="200" :src="imagen" v-if="estado == false" accept="image/*" equired>
											<img width="200" height="200" :src="`/imagenes/usuario/${fillUsuario.avatar}`" v-else accept="image/*" equired>
										</figure>
									</div>
									<div class="form-group row">
										<div class="offset-sm-2 col-sm-10">
											<button type="submit" class="btn btn-primary">Actualizar</button>
										</div>
									</div>
								</form>
							</div>
							<div class="tab-pane" id="avanceE">
								<h4 class="text-center">Avance de Examenes</h4>
								<div class="row">
									<div v-for="(examen,index) in examenes" :key="index" class="col-12 col-md-6 mb-2 shadow">
										<div class="card">
											<div class="card-body">
												<span class="float-rigth badge">{{ index+1 }}</span>
												<h4 class="text-center text-danger">{{ examen.name }}</h4>
												<div class="row">
													<h5 class="col-8 col-md-6 text-success"><i class="fab fa-accessible-icon"></i> PPM</h5>
													<h5 class="col-4 col-md-6">{{ examen.pivot.ppm }}</h5>
													<hr>
													<h5 class="col-8 col-md-6 text-info"><i class="fas fa-brain"></i> Comprension</h5>
													<h5 class="col-4 col-md-6">{{ examen.pivot.comprension }}<b class="h5"> %</b></h5>
													<hr>
													<h5 class="col-8 col-md-6 text-warning"><i class="far fa-clock"></i> Tiempo</h5>
													<h5 class="col-4 col-md-6">{{ examen.pivot.tiempo }}<b class="h5"> s</b></h5>
													<hr>
													<h5 class="col-8 col-md-6 text-gray-dark"><i class="far fa-sun"></i> Fecha</h5>
													<h5 class="col-4 col-md-6">{{ obtenerFecha(examen.pivot.created_at) }}</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane" id="avanceG">
								<table class="table table-bordered table-hover">
									<thead>
										<tr>
											<th>#</th>
											<th>Nombre</th>
											<th>Maximo punto</th>
											<th>Record</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td width="8px">1</td>
											<td>Ejercicio #1</td>
											<td>{{ games1 }}</td>
											<td>{{ record1.name }} : {{ record1.puntuacion }}</td>

										</tr>
										<tr>
											<td width="8px">2</td>
											<td>Ejercicio #2</td>
											<td>{{ games2 }}</td>
											<td>{{ record2.name }} : {{ record2.puntuacion }}</td>
										</tr>
										<tr>
											<td width="8px">3</td>
											<td>Ejercicio #3</td>
											<td>{{ games3 }}</td>
											<td>{{ record3.name }} : {{ record3.puntuacion }}</td>
										</tr>
										<tr>
											<td width="8px">4</td>
											<td>Ejercicio #4</td>
											<td>{{ games4 }}</td>
											<td>{{ record4.name }} : {{ record4.puntuacion }}</td>
										</tr>
										<tr>
											<td width="8px">5</td>
											<td>Ejercicio #5</td>
											<td>{{ games5 }}</td>
											<td>{{ record5.name }} : {{ record5.puntuacion }}</td>
										</tr>
										<tr>
											<td width="8px">6</td>
											<td>Ejercicio #6</td>
											<td>{{ games6 }}</td>
											<td>{{ record6.name }} : {{ record6.puntuacion }}</td>
										</tr>
										<tr>
											<td width="8px">7</td>
											<td>Ejercicio #7</td>
											<td>{{ games7 }}</td>
											<td>{{ record7.name }} : {{ record7.puntuacion }}</td>
										</tr>
										<tr>
											<td width="8px">8</td>
											<td>Ejercicio #8</td>
											<td>{{ games8 }}</td>
											<td>{{ record8.name }} : {{ record8.puntuacion }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		created() {
			this.showRango()
			this.showUser()
		},
		data(){
			return{
				usuario :{},
				rangos:[],
				loading:true,
				fillUsuario: {name: '',apellido_paterno:null, avatar:null,
				apellido_materno:null,rango_id:'',curso:'',puntos:''},
				estado:false,
				imagenMiniatura:'',
				errors:[],
				examenes:[],
				games1:null,
				games2:null,
				games3:null,
				games4:null,
				games5:null,
				games6:null,
				games7:null,
				games8:null,
				record1:{},
				record2:{},
				record3:{},
				record4:{},
				record5:{},
				record6:{},
				record7:{},
				record8:{},
			}
		},
		methods:{
			getDataGame1Sum(usuario){
				var url = 'games/'+usuario+'/'+1
				axios.get(url).then(res =>{
					this.games1 = res.data
					this.getDataGame2Sum(usuario)
					this.getDataGame3Sum(usuario)
					this.getDataGame4Sum(usuario)
					this.getDataGame5Sum(usuario)
					this.getDataGame6Sum(usuario)
					this.getDataGame7Sum(usuario)
					this.getDataGame8Sum(usuario)
					this.getDataGameRecord1(usuario)
					this.getDataGameRecord2(usuario)
					this.getDataGameRecord3(usuario)
					this.getDataGameRecord4(usuario)
					this.getDataGameRecord5(usuario)
					this.getDataGameRecord6(usuario)
					this.getDataGameRecord7(usuario)
					this.getDataGameRecord8(usuario)
				})
			},
			getDataGame2Sum(usuario){
				var url = 'games/'+usuario+'/'+2
				axios.get(url).then(res =>{
					this.games2 = res.data
				})
			},
			getDataGame3Sum(usuario){
				var url = 'games/'+usuario+'/'+3
				axios.get(url).then(res =>{
					this.games3 = res.data
				})
			},
			getDataGame4Sum(usuario){
				var url = 'games/'+usuario+'/'+4
				axios.get(url).then(res =>{
					this.games4 = res.data
				})
			},
			getDataGame5Sum(usuario){
				var url = 'games/'+usuario+'/'+5
				axios.get(url).then(res =>{
					this.games5 = res.data
				})
			},
			getDataGame6Sum(usuario){
				var url = 'games/'+usuario+'/'+6
				axios.get(url).then(res =>{
					this.games6 = res.data
				})
			},
			getDataGame7Sum(usuario){
				var url = 'games/'+usuario+'/'+7
				axios.get(url).then(res =>{
					this.games7 = res.data
				})
			},
			getDataGame8Sum(usuario){
				var url = 'games/'+usuario+'/'+8
				axios.get(url).then(res =>{
					this.games8 = res.data
				})
			},
			getDataGameRecord1(usuario){
				var url = 'game/'+usuario+'/'+1
				axios.get(url).then(res =>{
					this.record1 = res.data
				})
			},
			getDataGameRecord2(usuario){
				var url = 'game/'+usuario+'/'+2
				axios.get(url).then(res =>{
					this.record2 = res.data
				})
			},
			getDataGameRecord3(usuario){
				var url = 'game/'+usuario+'/'+3
				axios.get(url).then(res =>{
					this.record3 = res.data
				})
			},
			getDataGameRecord4(usuario){
				var url = 'game/'+usuario+'/'+4
				axios.get(url).then(res =>{
					this.record4 = res.data
				})
			},
			getDataGameRecord5(usuario){
				var url = 'game/'+usuario+'/'+5
				axios.get(url).then(res =>{
					this.record5 = res.data
				})
			},
			getDataGameRecord6(usuario){
				var url = 'game/'+usuario+'/'+6
				axios.get(url).then(res =>{
					this.record6 = res.data
				})
			},
			getDataGameRecord7(usuario){
				var url = 'game/'+usuario+'/'+7
				axios.get(url).then(res =>{
					this.record7 = res.data
				})
			},
			getDataGameRecord8(usuario){
				var url = 'game/'+usuario+'/'+8
				axios.get(url).then(res =>{
					this.record8 = res.data
				})
			},
			obtenerFecha(fecha){
				return moment(fecha).fromNow()
			},
			showRango(){
				axios.get("/rango").then(res =>{
					this.rangos = res.data
				})
			},
			showUser(){
				var url =this.$route.params.id;
				axios.get(url).then(res =>{
					this.usuario = res.data
					this.loading = false
				})
			},
			obtenerImagen(e){
				this.estado = true;
				let file = e.target.files[0];
				this.usuario.avatar = file;
				this.cargarImagen(file);
			},
			obtenerImagenNueva(e){
				this.estado = false;
				let file = e.target.files[0];
				this.fillUsuario.avatar = file;
				this.cargarImagen(file);
			},
			cargarImagen(file){
				let reader = new FileReader();
				reader.onload = (e) => {
					this.imagenMiniatura = e.target.result;
				}
				reader.readAsDataURL(file);
			},
			alerta:function(){
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
					icon: 'success',
					title: 'Actualizado Correctamente'
				})
			},
			editarUsuario:function (){
				this.estado = true;
				this.fillUsuario.name = this.usuario.name;
				this.fillUsuario.apellido_paterno = this.usuario.apellido_paterno;
				this.fillUsuario.apellido_materno = this.usuario.apellido_materno;
				this.fillUsuario.avatar = this.usuario.avatar;
				this.fillUsuario.curso = this.usuario.curso;
				this.fillUsuario.rango_id = this.usuario.rango_id;
				this.fillUsuario.puntos = this.usuario.puntos;
				this.fillUsuario.id = this.usuario.id;
			},
			updateUsuario:function(fillUsuario){
				if (this.fillUsuario.apellido_materno == null) {
					this.fillUsuario.apellido_materno = ""
				}
				if (this.fillUsuario.apellido_paterno == null) {
					this.fillUsuario.apellido_paterno = ""
				}
				let data = new FormData();
				data.append('name', this.fillUsuario.name);
				data.append('apellido_paterno', this.fillUsuario.apellido_paterno);
				data.append('apellido_materno', this.fillUsuario.apellido_materno);
				data.append('avatar', this.fillUsuario.avatar);
				data.append('curso', this.fillUsuario.curso);
				if (this.fillUsuario.puntos<100) {
					data.append('rango_id', 1);
				}else if (this.fillUsuario.puntos >= 100 && this.fillUsuario.puntos < 500) {
					data.append('rango_id', 2);
				}else if (this.fillUsuario.puntos >= 500 && this.fillUsuario.puntos < 1000) {
					data.append('rango_id', 3);
				}else if (this.fillUsuario.puntos >= 1000&& this.fillUsuario.puntos < 5000) {
					data.append('rango_id', 4);
				}else if (this.fillUsuario.puntos >= 5000&& this.fillUsuario.puntos < 10000) {
					data.append('rango_id', 5);
				}else if (this.fillUsuario.puntos > 10000) {
					data.append('rango_id', 6);
				}
				data.append('_method','PUT');
				var url = `/usuario/${fillUsuario.id}`;
				axios.post(url, data).then(res=>{
					this.errors = []
					this.showUser()
					this.alerta()
				}).catch(error => {
		          		this.errors = error.response.data.errors;
		          		console.log(this.errors)
			        })
			},
			getDataExamUser(usuario){
				var url = 'user/'+usuario;
				axios.get(url).then(res =>{
					this.examenes = res.data
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
