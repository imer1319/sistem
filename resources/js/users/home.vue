<template>
	<div class="container">
        <div class="row">
            <div class="col-md-4 col-lg-4 col-sm-4 ">
                <div>
                    <img src="imagenes/lecciones.png" 
                    style="height: 200px; width: 200px;" alt="Card image cap">
                </div>
                <div class="text-center">
                    Lecciones
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
                <div>
                    <img src="imagenes/examen.png" 
                    style="height: 200px; width: 200px;" alt="Card image cap">
                </div>
                <div class="text-center">
                    <router-link :to="{name:'exam'}" class="btn btn-info"> Examen</router-link>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
                <div>
                    <img src="imagenes/ejercicios.png" 
                    style="height: 200px; width: 200px;" alt="Card image cap">
                </div>
                <div class="text-center">
                    <a href="#">Ejercicio</a>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
                <div>
                    <img src="imagenes/puntuaciones.png" 
                    style="height: 200px; width: 200px;" alt="Card image cap">
                </div>
                <div class="text-center">
                    Puntuaciones
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
                <div>
                    <img src="imagenes/posicion.png" 
                    style="height: 200px; width: 200px;" alt="Card image cap">
                </div>
                <div class="text-center">
                    Posicion
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4">
                <div>
                    <img src="imagenes/premios.png" 
                    style="height: 200px; width: 200px;" alt="Card image cap">
                </div>
                <div class="text-center">
                    Insignias
                </div>
            </div>

        </div>
    </div>
</template>
<script>
	export default{
		name:'home'
	}
</script>
<style>

</style>