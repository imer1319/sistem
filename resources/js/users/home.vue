<template>
    <div>
        <spinner v-if="loading"></spinner>
        <div v-else>
            <nav class="navbar navbar-expand-md navbar-dark bg-primary">
                <div class="container">
                    <a class="navbar-brand text-white">Lectura Veloz</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item px-md-3">
                                <h5 class="mb-0">
                                    <a class="nav-link text-warning">{{ usuario.puntos }} Pts.</a>
                                </h5>
                            </li>
                            <li class="nav-item">
                                <img :src="`/imagenes/usuario/${usuario.avatar}`" class="rounded-circle pb-0" height="40" width="40">
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{usuario.name}}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <router-link class="dropdown-item" to="/profile">
                                        Mi perfil
                                    </router-link>
                                    <a class="dropdown-item" href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Cerrar Sesión
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container my-2">
                <div class="consejo">{{ consejo }}</div>
                <div class="row">
                    <div class="col-6 col-md-4 col-lg-4" v-for="(contenido, index) in content" :key="index">
                        <div class="text-center">
                            <router-link :to="contenido.url">
                                <div class="my-2">
                                    <div class="card" :class="contenido.background">
                                        <div class="card-body box-profile pb-2">
                                            <img class="card-img-top img-responsive imagen-tamaño" :src="`/imagenes/${contenido.icono}`">
                                        </div>                                        
                                        <span class=" pb-3 text-center text-uppercase">{{ contenido.nombre }}</span>
                                        <span></span>
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
        created(){
            this.obtener_consejo()
            this.showUser()
        },
        data(){
            return {
                starsRelleno:4,
                content :[
                {nombre:'Perfil',icono:'profile.png',url:'/profile',background:'color8'},
                {nombre:'Curso',icono:'curso.png',url:'/curso',background:'color8'},
                {nombre:'ejercicio',icono:'game.png',url:'game',background:'color8'},
                {nombre:'ranking',icono:'ranking.png',url:'/ranking',background:'color8'},
                {nombre:'Puntuaciones',icono:'puntuaciones.png',url:'/puntuacionExamen',background:'color8'},
                {nombre:'Preguntas',icono:'lecciones.png',url:'/lecciones',background:'color8'},
                ],
                consejos:['Aprende a usar tus ojos para leer más rápido',
                'Ponte en forma, para darle más oxígeno a tu cerebro',
                'Lee sobre el cerebro y su funcionamiento',
                'No le digas a alguien que lea, primero que vea como lo disfrutas y él lo hará solo.',
                'Aleja cualquier distraccion mientras lees',
                'No te preocupes de la velocidad de lectura',
                'Si lees lo que te gusta no te aburriras',
                'La practica hace al maestro'],
                consejo:null,
                usuario:{},
                loading:true,
            }
        },
        methods:{
            obtener_consejo(){
                var ram = Math.floor(Math.random()*this.consejos.length)
                this.consejo = this.consejos[ram]
            },
            showUser(){
                var url ="/profile"
                axios.get(url).then(res =>{
                    this.usuario = res.data
                    this.loading = false
                })
            },
        }
    }
</script>
<style>
.imagen-tamaño{
    height: 170px;
}
@media (max-width: 768px)
{
    .imagen-tamaño{
        height: 110px;
    }
}
</style>