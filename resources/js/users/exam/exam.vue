<template>
    <spinner v-if="loading"></spinner>
    <div class="container" v-else>
        <h3>este son los examen</h3>
        <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card" v-for="(examen, index) in examens" :key="index">
                <img class="card-img-top img-responsive" :src="`/imagenes/examen/${examen.icon}`">
                <div class="card-block">
                    <h5 class="text-bold text-center">{{ examen.name }}</h5>
                </div>
                <div class="card-footer text-center">
                    <router-link :to="{name : 'showing',params:{id:examen.id}}" class="btn btn-info">Dar Examen</router-link>
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