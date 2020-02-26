<template>
    <spinner v-if="loading"></spinner>
    <div v-else>
        <h3 class="titulo">Examen</h3>
        <div class="row container">
            <div class="col-6 col-md-4 col-lg-3 mt-4" v-for="(examen, index) in examens" :key="index">
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
      created() {
        this.mostrarExamen()
    },
    data() {
        return { 
            examens: [],
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

    }
}
</script>
<style>

</style>