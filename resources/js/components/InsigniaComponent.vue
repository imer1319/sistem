<template>
  <div>
    <!-- editar registro -->
    <form v-on:submit.prevent="updateInsignia(fillInsignia)" enctype="multipart/form-data">
      <input type="hidden" name="update" method="PUT">
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
                  <input type="text"  name="name" class="form-control" v-model="fillInsignia.name">
                </div>
              </div>
              <div class="form-group row pb-0">
                <label class="col-form-label col-md-2">Descripcion</label>
                <div class="col-md-10">
                  <textarea rows="3" cols="5" name="description" class="form-control" v-model="fillInsignia.description"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label for="imagen"></label>
                  <input type="file" @change="obtenerImagen" class="form-control-file" > 
                </div>
                <figure>
                  <img width="200" height="200" :src="imagen" v-model="fillInsignia.icon" >
                </figure>
              </div>
            </div>
            <div class="modal-footer pb-0">
              <div class="form-group row">
                <div class="col-lg-6">
                  <input type="submit" name="enviar" value="Actualizar Registro" class="btn btn-primary pull-right">
                  <button class="btn btn-danger" type="submit" 
                  @click="cancelarEdicion">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <!-- crear registro -->
    <form v-on:submit.prevent="agregar" enctype="multipart/form-data">
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
                  <input type="text"  name="name" v-model="insignia.name"class="form-control" placeholder="Nombre de la insignia">
                </div>
              </div>
              <div class="form-group row pb-0">
                <label class="col-form-label col-md-2">Descripcion</label>
                <div class="col-md-10">
                  <textarea rows="3" cols="5" name="description" v-model="insignia.description"  class="form-control" placeholder="Describa la insignia"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label for="imagen"></label>
                  <input type="file" @change="obtenerImagen" class="form-control-file"> 
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
    <!-- listar las insignias -->
    <div class="row">
      <div class="col-md-12">
        <h1 class="page-header">Insignias</h1>
      </div>
      <div class="col-sm-7">
        <a href="#" class="btn btn-primary float-right" data-toggle="modal" data-target="#create">Crear Nuevo</a>
        <table class="table table-hover table-striped py-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th colspan="2">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(insignia, index) in insignias" :key="index" >
              <td width="10px">{{ insignia.id}}</td>
              <td>{{insignia.name}}</td>
              <td>{{ insignia.description}}</td>
              <td><img :src="`imagenes/${insignia.icon}`" class="img-responsive" height="40" width="40"></td>
              <td width="10px">
                <a href="#" class="btn btn-warning float-right" @click="editarInsignia(insignia)">Editar</a>
              </td>
              <td width="10px">
                <a href="#" class="btn btn-danger" @click="eliminarInsignia(insignia,index)">Eliminar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        insignias: [],
        insignia: {name: '', description: '',icon:''},
        fillInsignia:{name: '', description: '',icon:''},
        imagenMiniatura:'',
      }
    },
    mounted(){
      axios.get('insignia').then(res =>(
        this.insignias = res.data
        ))
    },
    methods:{
      obtenerImagen(e){
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
      agregar(){
        var formData = new FormData();
        formData.append('name', this.insignia.name);
        formData.append('description', this.insignia.description);
        formData.append('icon', this.insignia.icon);
        
        axios.post('/insignia',formData)
        .then(res=>{
          console.log(res.data);
          $('#create').modal('hide')
        })
      },
      editarInsignia:function (insignia){
        this.fillInsignia.name = insignia.name;
        this.fillInsignia.description = insignia.description;
        this.fillInsignia.icon = insignia.icon;
        this.fillInsignia.id = insignia.id;
        $('#edit').modal('show');
      },
      updateInsignia:function(fillInsignia){
        var formData = new FormData();
        formData.append('name', this.fillInsignia.name);
        formData.append('description', this.fillInsignia.description);
        formData.append('icon', this.fillInsignia.icon);
        var url = `/insignia/${fillInsignia.id}`;
        console.log("url : "+this.fillInsignia.name);
        axios.put(url, formData).then(res=>{
          $('#edit').modal('hide');
        })
      }, //fin del metodo actualizar
      eliminarInsignia:function(insignia,index){
        axios.delete(`/insignia/${insignia.id}`)
        .then(res=>()=>{
          this.insignias.splice(index,1);
        })
      },
      cancelarEdicion:function(){
        this.insignia= {name: '', description: '',icon:''};
        $('#edit').modal('hide');
      }
    },
    computed:{
      imagen(){
        return this.imagenMiniatura;
      } 
    }
  }
</script>