<template>
    <spinner v-if="loading"></spinner>
    <div class="container" v-else>
        <h3>este son los examen</h3>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="(examen, index) in examens" :key="index">
                <div class="card card-primary card-outline">
                    <img class="img-responsive p-2 m-auto" :src="`/imagenes/examen/${examen.icon}`" height="180" width="80%">
                    <div>
                        <h5 class="text-bold text-center">{{ examen.name }}</h5>
                    </div>
                    <div class="mx-2">
                        <router-link :to="{name : 'showing',params:{id:examen.id}}" class="btn btn-info btn-block">Dar Examen</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 export default{
  name:'exam',
  created:function() {
    this.mostrarExamen();
},
data() {
    return { 
        examens: [],
        examen: {name: '',content:'', icon:''},
        loading:true,
    }
},
methods:{
    mostrarExamen:function(){
        axios.get('exam').then(res =>{
            this.examens = res.data
            this.loading = false;
        })
    },

}
}
</script>
<style>

</style>