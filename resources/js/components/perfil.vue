<template>
  <div class="col-12">
    <h3 class="animated fadeInRight">Perfil del administrador</h3>
    <spinner v-if="loading"></spinner>
    <div class="row" v-else>
      <div class="col-md-4 col-6">
        <div class="card border border-primary mb-3">
          <div class="m-auto card-header">Numero de usuarios</div>
          <div class="card-body row text-center">
            <div class="col-6">
              <h1>{{ numero_usuarios }}</h1>
            </div>
            <div class="col-6">
              <h1><i class="fas fa-user text-primary"></i></h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-6">
        <div class="card border border-success mb-3">
          <div class="m-auto card-header">Numero de examenes</div>
          <div class="card-body row text-center">
            <div class="col-6">
              <h1>{{ numero_examenes }}</h1>
            </div>
            <div class="col-6">
              <h1><i class="fas fa-file-contract text-success"></i></h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-6">
        <div class="card border border-danger mb-3">
          <div class="m-auto card-header">Numero de ejercicios</div>
          <div class="card-body row text-center">
            <div class="col-6">
              <h1>{{ numero_ejercicios }}</h1>
            </div>
            <div class="col-6">
              <h1><i class="fas fa-gamepad text-danger"></i></h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card border border-danger mb-3">
          <div class="m-auto card-header">Estudiante con mayor puntuacion</div>
          <div class="card-body row">
            <div class="col-6">
              <div class="text-center"><b>Datos</b></div>
              <p>Nombre: {{ mayor_puntuacion.name }}</p>
              <p>Ppm: {{ mayor_puntuacion.pivot.ppm }}</p>
              <p>Comprensión: {{ mayor_puntuacion.pivot.comprension }}%</p>
            </div>
            <div class="col-6 text-center">
              <img
                class="profile-user-img rounded"
                :src="`imagenes/usuario/${mayor_puntuacion.avatar}`"
                height="120"
                width="100%"
              />
              <b
                ><h4>Puntos: {{ mayor_puntuacion.puntos }}</h4></b
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card border border-primary mb-3">
          <div class="m-auto card-header">Estudiante con mayor velocidad</div>
          <div class="card-body row">
            <div class="col-6">
              <div class="text-center"><b>Datos</b></div>
              <p>Nombre: {{ mayor_velocidad.name }}</p>
              <p>Puntos: {{ mayor_velocidad.puntos }}</p>
              <p>Comprensión: {{ mayor_velocidad.pivot.comprension }}%</p>
            </div>
            <div class="col-6 text-center">
              <img
                class="profile-user-img rounded"
                :src="`imagenes/usuario/${mayor_velocidad.avatar}`"
                height="120"
                width="100%"
              />
              <b
                ><h4>Ppm: {{ mayor_velocidad.pivot.ppm }}</h4></b
              >
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
    this.obtener_numero_usuarios();
    this.obtener_numero_examenes();
    this.obtener_numero_ejercicios();
    this.obtener_usuario_mayor_velocidad();
    this.obtener_usuario_mayor_puntos();
  },
  data() {
    return {
      numero_usuarios: null,
      numero_examenes: null,
      numero_ejercicios: null,
      mayor_velocidad: null,
      mayor_puntuacion: null,
      loading: true,
    };
  },
  methods: {
    obtener_numero_usuarios() {
      axios.get("/numero_usuarios").then((res) => {
          if (res.data === null) {
              this.numero_usuarios = 0;
          }
        this.numero_usuarios = res.data;
      });
    },
    obtener_numero_examenes() {
      axios.get("/numero_examenes").then((res) => {
        this.numero_examenes = res.data;
      });
    },
    obtener_numero_ejercicios() {
      axios.get("/numero_ejercicios").then((res) => {
        this.numero_ejercicios = res.data;
      });
    },
    obtener_usuario_mayor_velocidad() {
      axios.get("/mayor_velocidad").then((res) => {
        this.mayor_velocidad = res.data;
      });
    },
    obtener_usuario_mayor_puntos() {
      axios.get("/mayor_puntuacion").then((res) => {
        this.mayor_puntuacion = res.data;
        this.loading = false;
      });
    },
  },
};
</script>
