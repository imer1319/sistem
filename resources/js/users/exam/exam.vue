<template>
    <div>
        <spinner v-if="loading"></spinner>
        <div v-else>
            <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #2B6A88;">
                <div class="container">
                    <a class="navbar-brand" href="/">Laravel</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <img :src="`/imagenes/usuario/${usuario.avatar}`" class="rounded-circle pb-0" height="40" width="40">
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{usuario.name}}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                  <a class="dropdown-item" href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Cerrar Sesión
                                  </a>
                                  <form id="logout-form" action="/logout" method="POST" style="display: none;">
                                  @csrf</form>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div class="container-fluid">
            <router-link class="btn btn-dark text-uppercase" to="/home">
                Regresar
            </router-link>
        </div>
        <h3 class="text-center"> Examenes</h3>
        <div class="row container m-auto">
            <div class="col-6 col-md-4 col-lg-3 mt-4" v-for="(examen, index) in examens" :key="index">
                <div class="card card-primary card-outline">
                    <img class="img-responsive p-2 m-auto" :src="`/imagenes/examen/${examen.icon}`" height="180" width="80%">
                    <div>
                        <h5 class="text-bold text-center">{{ examen.name }}</h5>
                    </div>
                    <div class="mx-2">
                        <router-link :to="{name : 'showing',params:{id:examen.id}}" class="btn btn-info btn-block text-white">
                            <span>Dar examen</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="text-center mt-3"> Examenes Dados</h3>
        <div class="row container m-auto">
            <div class="col-6 col-md-4 col-lg-3 mt-4" v-for="(examen, index) in examen_dado" :key="index">
                <div class="card card-primary card-outline">
                    <img class="img-responsive p-2 m-auto" :src="`/imagenes/examen/${examen.icon}`" height="180" width="80%">
                    <div>
                        <h5 class="text-bold text-center">{{ examen.name }}</h5>
                    </div>
                    <div class="mx-2">
                        <router-link :to="{name : 'showing',params:{id:examen.id}}" class="btn btn-info btn-block text-white">
                            <span>Ver puntucion</span>
                        </router-link>
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
    this.showUser()
    this.mostrarExamen()
    this.mostrar_examen_dado()
},
data() {
    return { 
        examens: [],
        examen_dado:[],
        loading:true,
        usuario:{}
    }
},
methods:{
    showUser(){
        var url ="/profile"
        axios.get(url).then(res =>{
            this.usuario = res.data
            this.loading = false;
        })
    },
    mostrarExamen(){
        axios.get('exam').then(res =>{
            this.examens = res.data
            this.loading = false;
        })
    },
    mostrar_examen_dado(){
        axios.get('examen_dado').then(res =>{
            this.examen_dado = res.data
        })
    },
}
}
</script>
<style>
router-link{
    color: #fff;
}
</style>