<template>
	<div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4"
            v-for="contenido in content">
            <div class="text-center">
                <router-link :to="contenido.url">
                    <div class="my-2">
                        <div class="card card-primary card-outline m-auto"style="box-shadow: 2px 2px 10px #666; width: 80%; border-radius: 4%;"
                        :class="[contenido.numero%2==1?'color1':'color2']">
                        <span class="text-center text-uppercase">{{ contenido.nombre }}</span>
                        <div class="card-body box-profile text-center">
                            <img :src="`/imagenes/${contenido.icono}`" height="140">
                        </div>
                    </div>
                </div>
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
        data() {
            return { 
                content :[
                {nombre:'Lecciones',icono:'lecciones.png',url:'',numero:1},
                {nombre:'examen',icono:'examen.png',url:'/exam',numero:2},
                {nombre:'ejercicio',icono:'ejercicios.png',url:'game',numero:1},
                {nombre:'puntuaciones',icono:'puntuaciones.png',url:'',numero:2},
                {nombre:'posicion',icono:'posicion.png',url:'',numero:1},
                {nombre:'insignia',icono:'premios.png',url:'',numero:2},
                ]
            }
        },
    }
</script>
<style>
a:link 
{ 
text-decoration:none; 
} 
.color1{
    background-color: #277D96;
    color: white;
}
.color2{
    background-color: #FE4C7C;
    color: white;
}
</style>