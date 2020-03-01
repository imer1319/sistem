<template>
    <div class="container">
        <div class="consejo">{{ consejo }}</div>
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3"v-for="contenido in content">
                <div class="text-center">
                    <router-link :to="contenido.url">
                        <div class="my-2">
                            <div class="card card-primary card-outline radio-card":class="contenido.background">
                                <div class="card-body box-profile">
                                    <img class="card-img-top img-responsive" :src="`/imagenes/${contenido.icono}`"height="170">
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
        created(){
            this.obtener_consejo()
        },
        data() {
            return { 
                content :[
                {nombre:'Lecciones',icono:'ejercicios.png',url:'/ejercicios',background:'color8'},
                {nombre:'examen',icono:'examen.png',url:'/exam',background:'color8'},
                {nombre:'ejercicio',icono:'ejercicios.png',url:'game',background:'color8'},
                {nombre:'Perfil',icono:'user.png',url:'/profile',background:'color8'},
                {nombre:'ranking',icono:'ranking.png',url:'/ranking',background:'color8'},
                {nombre:'Puntuaciones',icono:'puntuaciones.png',url:'/puntuacionExamen',background:'color8'},
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
            }
        },
        methods:{
            obtener_consejo(){
                var ram = Math.floor(Math.random()*this.consejos.length)
                this.consejo = this.consejos[ram]
            },
        }
    }
</script>