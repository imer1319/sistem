<template>
	<div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4"v-for="contenido in content">
                <div class="text-center">
                    <router-link :to="contenido.url">
                        <div class="my-2" >
                            <div class="card m-auto":class="contenido.background">
                                <div class="card-body">
                                    <img :src="`/imagenes/${contenido.icono}`" height="140">
                                </div>
                                <span class="text-center text-uppercase">{{ contenido.nombre }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	export default{
        data() {
            return { 
                content :[
                {nombre:'Lecciones',icono:'lecciones.png',url:'',numero:1,background:'color4'},
                {nombre:'examen',icono:'examen.png',url:'/exam',numero:2,background:'color4'},
                {nombre:'ejercicio',icono:'ejercicios.png',url:'game',numero:1,background:'color4'},
                {nombre:'puntuaciones',icono:'puntuaciones.png',url:'/profile',numero:2,background:'color4'},
                {nombre:'posicion',icono:'posicion.png',url:'/ranking',numero:1,background:'color4'},
                {nombre:'insignia',icono:'premios.png',url:'',numero:2,background:'color4'},
                ]
            }
        },
    }
</script>
<style>
.color4{
    color: white;
    background: #74bcc9;
    background: -moz-linear-gradient(top,  #74bcc9 0%, #fcb963 0%, #e03270 100%);
    background: -webkit-linear-gradient(top,  #74bcc9 0%,#fcb963 0%,#e03270 100%);
    background: linear-gradient(to bottom,  #74bcc9 0%,#fcb963 0%,#e03270 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#74bcc9', endColorstr='#e03270',GradientType=0 );
}
</style>