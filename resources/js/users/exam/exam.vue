<template>
    <spinner v-if="loading"></spinner>
    <div v-else>
        <div class="col-12 container-fluid">
            <button type="button" class="btn btn-dark text-uppercase" onClick="history.back()">Regresar</button>
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
</template>
<script>
 export default{
  created() {
    this.mostrarExamen()
    this.mostrar_examen_dado()
},
data() {
    return { 
        examens: [],
        examen_dado:[],
        loading:true,
    }
},
methods:{
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