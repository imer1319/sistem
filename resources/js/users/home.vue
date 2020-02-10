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
                {nombre:'Lecciones',icono:'lecciones.png',url:'/ejercicios',background:'color1'},
                {nombre:'examen',icono:'examen.png',url:'/exam',background:'color1'},
                {nombre:'ejercicio',icono:'ejercicios.png',url:'game',background:'color1'},
                {nombre:'puntuaciones',icono:'puntuaciones.png',url:'/profile',background:'color1'},
                {nombre:'posicion',icono:'posicion.png',url:'/ranking',background:'color1'},
                {nombre:'insignia',icono:'premios.png',url:'',background:'color1'},
                ]
            }
        },
    }
</script>