<template>
  <div class="col-12">
    <!-- crear rango -->
    <form v-on:submit.prevent="agregarRango" enctype="multipart/form-data">
      <div class="modal fade" id="createRango">
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
                  <input
                    type="text"
                    class="form-control"
                    v-model="rango.nombre"
                    placeholder="Nombre de la rango"
                    required
                  />
                  <span v-if="errors.nombre" class="text-danger">{{
                    errors.nombre[0]
                  }}</span>
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label for="imagen"></label>
                  <input
                    type="file"
                    @change="obtenerImagencrear"
                    class="form-control-file"
                    ref="img"
                    accept="image/*"
                    required
                  />
                </div>
                <figure>
                  <img width="200" height="200" :src="imagen" />
                </figure>
                <span v-if="errors.avatar" class="text-danger">{{
                  errors.avatar[0]
                }}</span>
              </div>
            </div>
            <div class="modal-footer pb-0">
              <div class="form-group row">
                <div class="col-lg-6">
                  <input
                    type="submit"
                    name="enviar"
                    value="Crear Registro"
                    class="btn btn-primary pull-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- editar registro -->
    <form
      v-on:submit.prevent="updateRango(fillRango)"
      enctype="multipart/form-data"
    >
      <div class="modal fade" id="editRango">
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
                  <input
                    type="text"
                    class="form-control"
                    v-model="fillRango.nombre"
                    required
                  />
                  <span v-if="errors.nombre" class="text-danger">{{
                    errors.nombre[0]
                  }}</span>
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    @change="obtenerImagen"
                    accept="image/*"
                    ref="imagenEdit"
                    v-if="estado == true"
                    equired
                  />
                  <input
                    type="file"
                    class="form-control-file"
                    @change="obtenerImagenNueva"
                    accept="image/*"
                    ref="imagenEdit"
                    v-if="estado == false"
                    equired
                  />

                  <figure>
                    <img
                      v-if="estado == true"
                      width="200"
                      height="200"
                      :src="`imagenes/rangos/${fillRango.avatar}`"
                    />
                    <img
                      v-if="estado == false"
                      width="200"
                      height="200"
                      :src="imagen"
                    />
                  </figure>
                  <span v-if="errors.avatar" class="text-danger">{{
                    errors.avatar[0]
                  }}</span>
                </div>
              </div>
            </div>
            <div class="modal-footer pb-0">
              <div class="form-group row">
                <div class="col-lg-6">
                  <input
                    type="submit"
                    name="enviar"
                    value="Actualizar Registro"
                    class="btn btn-primary pull-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- listar las rangos -->
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Rangos</h2>
        <a
          class="btn btn-success float-right text-white"
          v-on:click="crearRango()"
          ><i class="fas fa-plus"></i> Crear Nuevo</a
        >
      </div>
      <spinner v-if="loading"></spinner>
      <div class="card-body" v-else>
        <paginate name="rangos" :list="rangos" :per="6">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th class="text-center">Imagen</th>
                <th class="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rango, index) in paginated('rangos')" :key="index">
                <td width="8px">{{ index + 1 }}</td>
                <td>{{ rango.nombre }}</td>
                <td class="text-center">
                  <img
                    :src="`/imagenes/rangos/${rango.avatar}`"
                    class="img-responsive"
                    height="60"
                    width="70"
                  />
                </td>
                <td class="text-center">
                  <a
                    class="btn btn-warning text-white"
                    @click.prevent="editarRango(rango)"
                    ><i class="fas fa-pencil-alt"></i> Editar</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </paginate>
        <paginate-links
          for="rangos"
          :classes="{ ul: 'pagination', li: 'page-item', a: 'page-link' }"
        ></paginate-links>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../event-bus";
export default {
  mounted() {
    this.getRango();
    EventBus.$on("agregado", (data) => {
      this.rangos.push(data);
    });
  },
  data() {
    return {
      rangos: [],
      rango: { nombre: "", avatar: "" },
      fillRango: { nombre: "", avatar: "" },
      imagenMiniatura: "",
      loading: true,
      paginate: ["rangos"],
      estado: true,
      errors: [],
    };
  },
  methods: {
    getRango() {
      axios.get("/rango").then((res) => {
        this.rangos = res.data;
        this.loading = false;
      });
    },
    crearRango() {
      $("#createRango").modal("show");
    },
    obtenerImagencrear(e) {
      let file = e.target.files[0];
      this.rango.avatar = file;
      this.cargarImagen(file);
    },
    obtenerImagen(e) {
      this.estado = false;
      let file = e.target.files[0];
      this.fillRango.avatar = file;
      this.cargarImagen(file);
    },
    obtenerImagenNueva(e) {
      let file = e.target.files[0];
      this.fillRango.avatar = file;
      this.cargarImagen(file);
    },
    cargarImagen(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.imagenMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    validarEspacios(parametro) {
      var patron = /^\s+$/;
      if (patron.test(parametro)) {
        return false;
      } else {
        return true;
      }
    },
    alerta: function (icono, titulo) {
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
        icon: icono,
        title: titulo,
      });
    },
    agregarRango() {
      if (
        this.validarEspacios(this.rango.nombre) == false ||
        this.validarEspacios(this.rango.avatar) == false
      ) {
        alert("los campos no pueden estar vacios");
      } else {
        let formData = new FormData();
        formData.append("nombre", this.rango.nombre);
        formData.append("avatar", this.rango.avatar);

        axios
          .post("/rango", formData)
          .then((res) => {
            EventBus.$emit("agregado", res.data.rango);
            this.rango.nombre = "";
            this.$refs.img.value = "";
            this.imagenMiniatura = "";
            this.errors = [];
            this.alerta("success", "Se a agregado correctamente");
            $("#createRango").modal("hide");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            console.log(this.errors);
          });
      }
    },
    editarRango: function (rango) {
      this.estado = true;
      this.fillRango.nombre = rango.nombre;
      this.fillRango.avatar = rango.avatar;
      this.fillRango.id = rango.id;
      $("#editRango").modal("show");
    },
    updateRango: function (fillRango) {
      if (
        this.validarEspacios(this.fillRango.nombre) == false ||
        this.validarEspacios(this.fillRango.avatar) == false
      ) {
        alert("los campos no pueden estar vacios");
      } else {
        let data = new FormData();
        data.append("nombre", this.fillRango.nombre);
        data.append("avatar", this.fillRango.avatar);
        data.append("_method", "PUT");
        var url = `/rango/${fillRango.id}`;
        axios
          .post(url, data)
          .then((res) => {
            this.errors = [];
            this.$refs.imagenEdit.value = null;
            this.getRango();
            this.alerta("warning", "Se a modificado el registro");
            $("#editRango").modal("hide");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            console.log(this.errors);
          });
      }
    },
  },
  computed: {
    imagen() {
      return this.imagenMiniatura;
    },
  },
};
</script>
<style>
a {
  color: #fff;
}
</style>
