<template>
  <div>
    <spinner v-if="loading"></spinner>
    <div v-else>
      <div class="container-fluid">
        <router-link class="btn btn-dark text-uppercase" to="/home">
          Regresar
        </router-link>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-6 mb-3">
            <div class="card shadow">
              <div class="card-widget widget-user">
                <div class="widget-user-header bg-info">
                  <h3 class="widget-user-username">{{ currentUser.name }}</h3>
                  <h5 class="widget-user-desc">Estudiante</h5>
                </div>
                <div class="widget-user-image cont">
                  <img
                  class="img-circle elevation-2"
                  :src="`/imagenes/usuario/${currentUser.avatar}`"
                  />
                  <a @click.prevent="editarAvatar()"
                  ><i class="fas fa-camera"></i
                  ></a>
                </div>
                <form
                v-on:submit.prevent="updateAvatar(editUser)"
                enctype="multipart/form-data"
                >
                <div class="modal fade" id="editAvatar">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Editar Avatar
                        </h5>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <div class="form-group">
                            <input
                            type="file"
                            @change="obtenerImagenNueva"
                            class="form-control-file"
                            ref="img"
                            accept="image/*"
                            required
                            />
                          </div>
                          <figure>
                            <img
                            width="200"
                            height="200"
                            :src="imagen"
                            v-show="estado == true"
                            accept="image/*"
                            />
                          </figure>
                          <span v-if="errors.avatar" class="text-danger">{{
                            errors.avatar[0]
                          }}</span>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <input
                        type="submit"
                        name="enviar"
                        class="btn btn-primary"
                        value="Guardar Cambios"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer profundidad">
              <div class="row">
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">
                      {{ currentUser.apellido_paterno }}
                    </h5>
                    <span class="description-text">APELLIDO PATERNO</span>
                  </div>
                </div>
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header font-weight-bold">
                      {{ currentUser.puntos }}
                    </h5>
                    <span class="description-text">PUNTOS</span>
                  </div>
                </div>
                <div class="col-sm-4 border-right">
                  <div class="description-block">
                    <h5 class="description-header">
                      {{ currentUser.apellido_materno }}
                    </h5>
                    <span class="description-text">APELLIDO MATERNO</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="description-block">
                    <h5 class="description-header">
                      <span>{{ exams.ppm }} ppm</span>
                    </h5>
                    <span class="description-text">VELOCIDAD INICIAL</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="description-block">
                    <h5 class="description-header">
                      <span>{{ exams.comprension }} %</span>
                    </h5>
                    <span class="description-text">COMPRENSION INICIAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card sombra">
            <div class="card-header p-2">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#rango" data-toggle="tab"
                  >Rango</a
                  >
                </li>
                <li class="nav-item">
                  <a
                  class="nav-link"
                  href="#datos"
                  data-toggle="tab"
                  @click="editarUsuario()"
                  >Datos</a
                  >
                </li>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active" id="rango">
                  <div class="text-center">
                    <!-- Rango del usuario -->
                    <div class="text-center">
                      <img
                      :src="`imagenes/rangos/${currentUser.rango.avatar}`"
                      class="img-responsive"
                      width="50%"
                      />
                      <h3><b>{{ currentUser.rango.nombre }}</b></h3>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="datos">
                  <div class="row">
                    <div class="col-sm-12">
                      <!-- Actualizar datos del usuario -->
                      <form
                      v-on:submit.prevent="updateUsuario(editUser)"
                      enctype="multipart/form-data"
                      >
                      <div class="form-group row">
                        <label class="col-form-label col-md-3"
                        >Nombre</label
                        >
                        <div class="col-md-8">
                          <input
                          type="text"
                          class="form-control"
                          v-model="editUser.name"
                          placeholder="Escriba su nombre"
                          required
                          />
                          <span v-if="errors.name" class="text-danger">{{
                            errors.name[0]
                          }}</span>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-md-3"
                        >Apellido Paterno</label
                        >
                        <div class="col-md-8">
                          <input
                          type="text"
                          class="form-control"
                          v-model="editUser.apellido_paterno"
                          placeholder="Apellido paterno"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-form-label col-md-3"
                        >Apellido Materno</label
                        >
                        <div class="col-md-8">
                          <input
                          type="text"
                          class="form-control"
                          v-model="editUser.apellido_materno"
                          placeholder="Apellido materno"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <button
                          type="submit"
                          class="btn btn-primary text-white"
                          >
                          Actualizar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>
<script>
export default {
  created() {
    this.getExamsDoesntHave();
  },
  data() {
    return {
      loading: true,
      editUser: {
        name: "",
        apellido_paterno: "",
        avatar: "",
        apellido_materno: "",
        rango_id: "",
        curso: "",
      },
      estado: false,
      imagenMiniatura: "",
      selected: "",
      cursos: "",
      seccion: "",
      exams: null,
      errors: [],
    };
  },
  methods: {
    getExamsDoesntHave() {
      var url = "/examDado";
      axios.get(url).then((res) => {
        this.exams = res.data;
        this.loading = false;
      });
    },
    obtenerImagenNueva(e) {
      this.estado = true;
      let file = e.target.files[0];
      this.editUser.avatar = file;
      this.cargarImagen(file);
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.imagenMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    alerta() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        onOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Actualizado Correctamente",
      });
    },
    editarUsuario() {
      this.editUser.name = this.currentUser.name;
      this.editUser.apellido_paterno = this.currentUser.apellido_paterno;
      this.editUser.apellido_materno = this.currentUser.apellido_materno;
    },
    updateUsuario(editUser) {
      if (this.editUser.apellido_materno == null) {
        this.editUser.apellido_materno = "";
      }
      if (this.editUser.apellido_paterno == null) {
        this.editUser.apellido_paterno = "";
      }
      let data = new FormData();
      data.append("name", this.editUser.name);
      data.append("apellido_paterno", this.editUser.apellido_paterno);
      data.append("apellido_materno", this.editUser.apellido_materno);
      data.append("_method", "PUT");
      axios.post(`/profile`, data)
      .then(() => {
        this.alerta();
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
        console.log(this.errors);
      });
    },
    editarAvatar() {
      this.estado = false;
      this.$refs.img.value = null;
      $("#editAvatar").modal("show");
    },
    updateAvatar(editUser) {
      let data = new FormData();
      data.append("avatar", this.editUser.avatar);
      data.append("_method", "PUT");
      axios.post(`/profile`, data).then(() => {
        this.alerta();
        $("#editAvatar").modal("hide");
      });
    },
  },
  computed: {
    imagen() {
      return this.imagenMiniatura;
    },
  },
}
</script>

<style>
.cont {
  position: relative;
  height: 120px;
  width: 120px;
}
.cont img {
  height: 100%;
  width: 100%;
}
.cont a {
  position: absolute;
  bottom: 15px;
  left: 70px;
  text-shadow: 0 0 10px #000;
}
a i {
  cursor: pointer;
  font-size: 25px;
  color: #fff;
}
.border-right {
  border-right: 1px solid #dee2e6 !important;
}
.description-block {
  display: block;
  margin: 10px 0;
  text-align: center;
}
.widget-user .widget-user-image {
  left: 50%;
  margin-left: -45px;
  position: absolute;
  top: 80px;
}
.widget-user .widget-user-header {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  height: 135px;
  padding: 1rem;
  text-align: center;
}
.widget-user .widget-user-image > img {
  border: 3px solid #fff;
  height: 100px;
  width: 100px;
}
.elevation-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;
}
.img-circle {
  border-radius: 50%;
}
img {
  vertical-align: middle;
  border-style: none;
}
.profundidad {
  padding-top: 50px;
}
.bg-info {
  background-color: #2a6988 !important;
  color: #fff;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

/***********TOOLTIPS***********/
.tooltipP {
  cursor: pointer;
  position: relative;
  text-align: center;
}
.tooltipP:hover .ttip {
  display: block;
}
.ttip:before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #777777;
  bottom: -6px;
  content: "";
  height: 0;
  left: 50%;
  margin-left: -6px;
  position: absolute;
  width: 0;
}
.ttip {
  background: #777777;
  color: #fff;
  display: none;
  left: 30%;
  padding: 10px 10px;
  position: absolute;
  width: 200px;
  top: -70px;
  z-index: 1000;
}
.rank {
  background: #477dd9;
}
</style>
