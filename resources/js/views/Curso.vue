<template>
  <div>
    <div class="container-fluid">
      <router-link class="btn btn-dark text-uppercase" to="/home"
      >Regresar</router-link
      >
    </div>
    <h3 class="text-center">Curso</h3>
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-6 col-lg-4 mb-3" v-for="curso in cursos" :key="curso.id">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-4 text-center">
                  <div id="circulo">
                    <b class="text-white">{{ curso.id }}</b>
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-right">
                    <h5 class="text-danger"><b>{{ curso.name }}</b></h5>
                  </div>
                </div>
              </div>
              <div class="card border-primary">
                <div class="card-body pb-0">
                  <div class="row">
                    <div class="col-6 text-center">
                      <h4 class="text-center text-danger">
                        <b>{{ curso.requiere }} pts</b>
                      </h4>
                      <p>Requiere</p>
                    </div>
                    <div class="col-6 text-center">
                      <h4 class="text-warning">
                        <b v-if="currentUser.avance_curso <= curso.id">+ {{ curso.aumenta }}</b>
                          <b v-else>Obtenido</b>
                        </h4>
                        <p>Aumento</p>
                      </div>
                    </div>
                    <span class="px-0">
                      <router-link
                      :to="curso.url"
                      class="btn btn-block btn-primary text-white"
                      :class="disabledClass(curso)"
                      >
                      <span>{{ mensaje(curso) }}</span>
                    </router-link>
                  </span>
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
  data() {
    return {
      exam_id: null,
      cursos:[
      {id:1, name:'Examen 1', requiere:10, aumenta:50, url:'/darExamen'},
      {id:2, name: 'Schulte', requiere:50, aumenta:10, url:'/schulte'},
      {id:3, name: 'Schulte', requiere:50, aumenta:10, url:'/schulte'},
      {id:4, name: 'Schulte Letra', requiere:50, aumenta:20, url:'/shultele-curso'},
      {id:5, name: 'Schulte Letra', requiere:50, aumenta:20, url:'/shultele-curso'},
      {id:6, name:'Examen 2', requiere:300, aumenta:50, url:'/darExamen'},
      {id:7, name:'Buscar numeros', requiere:300, aumenta:10, url:'/search-course-numbers'},
      {id:8, name:'Buscar numeros', requiere:300, aumenta:15, url:'/search-course-numbers'},
      {id:9, name:'Buscar palabras', requiere:300, aumenta:20, url:'/search-words-course'},
      {id:10, name:'Buscar palabras', requiere:350, aumenta:25, url:'/search-words-course'},
      {id:11, name:'Examen 3', requiere:500, aumenta:100, url:'/darExamen'},
      {id:12, name:'Recordar numeros', requiere:500, aumenta:55, url:'/remember-numbers'},
      {id:13, name:'Recordar numeros', requiere:500, aumenta:70, url:'/remember-numbers'},
      {id:14, name:'Recordar palabras', requiere:600, aumenta:75, url:'/remember-words'},
      {id:15, name:'Recordar palabras', requiere:650, aumenta:80, url:'/remember-words'},
      {id:16, name:'Schulte', requiere:650, aumenta:90, url:'/schulte'},
      {id:17, name:'Schulte', requiere:650, aumenta:90, url:'/schulte'},
      {id:18, name:'Examen 4', requiere:800, aumenta:200, url:'/darExamen'},
      {id:19, name:'Schulte Letra', requiere:850, aumenta:80, url:'/shultele-curso'},
      {id:20, name:'Schulte Letra', requiere:850, aumenta:80, url:'/shultele-curso'},
      {id:21, name:'Buscar numeros', requiere:850, aumenta:100, url:'/search-course-numbers'},
      {id:22, name:'Buscar numeros', requiere:900, aumenta:100, url:'/search-course-numbers'},
      {id:23, name:'Examen 5', requiere:1100, aumenta:250, url:'/darExamen'},
      {id:24, name:'Buscar numeros', requiere:1100, aumenta:150, url:'/search-words-course'},
      {id:25, name:'Par - Impar', requiere:1200, aumenta:150, url:'/odd-even'},
      {id:26, name:'Campo visual', requiere:1200, aumenta:150, url:'/visual-field'},
      {id:27, name:'Campo visual', requiere:1500, aumenta:200, url:'/visual-field'},
      {id:28, name:'Examen 5', requiere:2000, aumenta:300, url:'/darExamen'},
      ]
    };
  },
  methods: {
    mensaje(curso){
      if(this.currentUser.avance_curso > curso.id){
        return 'Completado';
      }else if(this.currentUser.avance_curso == curso.id){
        return 'Empezar';
      }else if(this.currentUser.avance_curso < curso.id){
        return 'Bloqueado';
      }
    },
    disabledClass(curso){
      return this.currentUser.avance_curso >= curso.id && this.currentUser.puntos >= curso.requiere
      ? 'actividad'
      : 'disabled';
    }
  }
};
</script>
<style>
.actividad {
  cursor: hand;
}
#progreso_1,
#progreso_2 {
  width: 0%;
}
#circulo {
  background: #ffbc5b;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
</style>
