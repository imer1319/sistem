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
    			<div class="container-fluid">
    				<router-link class="btn btn-dark text-uppercase" to="/home">Regresar</router-link>
    			</div>
    			<h3 class="text-center">Curso</h3>
    			<div class="container-fluid">
    				<div class="row">
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">1</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Examen</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>50 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 1"> + 50</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a :href="'exam/'+exams" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso == 1) && (usuario.puntos >= 50) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 1">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 1">Empezar</span>
                                                <span v-if="usuario.avance_curso < 1">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">2</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>50 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 2">+ 10</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shulte-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 2) && (usuario.puntos >= 50) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 2">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 2">Empezar</span>
                                                <span v-if="usuario.avance_curso < 2">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">3</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>50 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 3">+ 15</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shulte-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 3) && (usuario.puntos >= 50) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 3">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 3">Empezar</span>
                                                <span v-if="usuario.avance_curso < 3">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">4</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte Letra</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>50 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 4">+ 20</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shultele-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 4) && (usuario.puntos >= 50) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 4">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 4">Empezar</span>
                                                <span v-if="usuario.avance_curso < 4">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">5</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte Letra</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>50 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 5">+ 20</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shultele-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 5) && (usuario.puntos >= 50) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 5">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 5">Empezar</span>
                                                <span v-if="usuario.avance_curso < 5">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">6</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Examen</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>250 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 6">+ 50</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a :href="'exam/'+exams" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso == 6) && (usuario.puntos >= 250) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 6">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 6">Empezar</span>
                                                <span v-if="usuario.avance_curso < 6">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">7</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar numeros</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>300 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 7">+ 10</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-course-numbers" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 7) && (usuario.puntos >= 300) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 7">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 7">Empezar</span>
                                                <span v-if="usuario.avance_curso < 7">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">8</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar numeros</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>300 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 8">+ 15</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-course-numbers" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 8) && (usuario.puntos >= 350) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 8">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 8">Empezar</span>
                                                <span v-if="usuario.avance_curso < 8">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">9</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar palabras</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>300 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 9">+ 20</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-words-course" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 9) && (usuario.puntos >= 300) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 9">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 9">Empezar</span>
                                                <span v-if="usuario.avance_curso < 9">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">10</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar palabras</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>350 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 10">+ 25</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-words-course" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 10) && (usuario.puntos >= 350) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 10">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 10">Empezar</span>
                                                <span v-if="usuario.avance_curso < 10">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">11</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Examen</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>500 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 11">+ 100</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a :href="'exam/'+exams" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso == 11) && (usuario.puntos >= 500) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 11">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 11">Empezar</span>
                                                <span v-if="usuario.avance_curso < 11">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">12</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Recordar numeros</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>500 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 12">+ 55</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/remember-numbers" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 12) && (usuario.puntos >= 500) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 12">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 12">Empezar</span>
                                                <span v-if="usuario.avance_curso < 12">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">13</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Recordar numeros</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>500 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 13">+ 70</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/remember-numbers" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 13) && (usuario.puntos >= 500) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 13">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 13">Empezar</span>
                                                <span v-if="usuario.avance_curso < 13">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">14</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Recordar palabras</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>600 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 14">+ 75</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/remember-words" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 14) && (usuario.puntos >= 600) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 14">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 14">Empezar</span>
                                                <span v-if="usuario.avance_curso < 14">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">15</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Recordar palabras</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>650 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 15">+ 80</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/remember-words" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 15) && (usuario.puntos >= 650) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 15">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 15">Empezar</span>
                                                <span v-if="usuario.avance_curso < 15">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">16</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>650 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 16">+ 90</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shulte-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 16) && (usuario.puntos >= 650) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 16">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 16">Empezar</span>
                                                <span v-if="usuario.avance_curso < 16">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">17</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>650 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 17">+ 90</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shulte-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 17) && (usuario.puntos >= 650) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 17">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 17">Empezar</span>
                                                <span v-if="usuario.avance_curso < 17">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">18</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Examen</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>800 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 18">+ 200</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a :href="'exam/'+exams" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso == 18) && (usuario.puntos >= 800) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 18">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 18">Empezar</span>
                                                <span v-if="usuario.avance_curso < 18">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">19</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte Letra</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>850 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 19">+ 80</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shultele-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 19) && (usuario.puntos >= 850) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 19">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 19">Empezar</span>
                                                <span v-if="usuario.avance_curso < 19">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">20</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Schulte Letra</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>850 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 20">+ 80</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/shultele-curso" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 20) && (usuario.puntos >= 850) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 20">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 20">Empezar</span>
                                                <span v-if="usuario.avance_curso < 20">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">21</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar numeros</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>850 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 21">+ 100</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-course-numbers" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 21) && (usuario.puntos >= 850) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 21">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 21">Empezar</span>
                                                <span v-if="usuario.avance_curso < 21">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">22</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar numeros</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>900 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 22">+ 100</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-course-numbers" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 22) && (usuario.puntos >= 900) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 22">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 22">Empezar</span>
                                                <span v-if="usuario.avance_curso < 22">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">23</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Examen</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>1100 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 23">+ 250</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a :href="'exam/'+exams" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso == 23) && (usuario.puntos >= 1100) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 23">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 23">Empezar</span>
                                                <span v-if="usuario.avance_curso < 23">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">24</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Buscar palabras</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>1100 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 24">+ 150</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/search-words-course" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 24) && (usuario.puntos >= 1100) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 24">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 24">Empezar</span>
                                                <span v-if="usuario.avance_curso < 24">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">25</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Par impar</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>1200 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 25">+ 150</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/odd-even" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 25) && (usuario.puntos >= 1200) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 25">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 25">Empezar</span>
                                                <span v-if="usuario.avance_curso < 25">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">26</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Campo visual</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>1200 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 26">+ 150</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/visual-field" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 26) && (usuario.puntos >= 1200) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 26">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 26">Empezar</span>
                                                <span v-if="usuario.avance_curso < 26">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">27</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Campo visual</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>1500 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 27">+ 200</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a href="/visual-field" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso >= 27) && (usuario.puntos >= 1500) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 27">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 27">Empezar</span>
                                                <span v-if="usuario.avance_curso < 27">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="circulo">
                                                <b class="text-white">28</b>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="text-right">
                                                <h5 class="text-danger"><b>Examen</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card border-primary">
                                        <div class="card-body pb-0">
                                            <div class="row">
                                                <div class="col-6 text-center">
                                                    <h4 class="text-center text-danger">
                                                        <b>2000 pts</b>
                                                    </h4>
                                                    <p>Requiere</p>
                                                </div>
                                                <div class="col-6 text-center" >
                                                    <h4 class="text-warning">
                                                        <b v-if="usuario.avance_curso <= 28">+ 300</b>
                                                        <b v-else>Obtenido</b>
                                                    </h4>
                                                    <p>Aumento</p>
                                                </div>
                                            </div>
                                            <span class="px-0">
                                            <a :href="'exam/'+exams" class="btn btn-block btn-primary text-white" :class="[(usuario.avance_curso == 28) && (usuario.puntos >= 2000) ? 'actividad':'disabled']">
                                                <span v-if="usuario.avance_curso > 28">Completado</span>
                                                <span v-else-if="usuario.avance_curso == 28">Empezar</span>
                                                <span v-if="usuario.avance_curso < 28">Bloqueado</span>
                                            </a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    </template>
    <script>
    	export default{
            beforeCreate: function(){
            },
    		created(){
    			this.showUser()
                this.getExamsDoesntHave()
    		},
    		mounted(){
    			this.bajarScroll()
    		},
    		data(){
    			return{
    				usuario:{},
    				exams:1,
    				loading:true,
    			}
    		},
    		methods:{
    			showUser(){
    				var url ="/profile"
    				axios.get(url).then(res =>{
    					this.usuario = res.data
    					this.loading = false
    				})
    			},
    			getExamsDoesntHave(){
    				var url ="/dadosExams"
    				axios.get(url).then(res =>{
    					this.exams = res.data.id
    				})
    			},
    			bajarScroll(){
    				var contador = 0
    				setTimeout(function(){
    					$('html,body').animate({
    						scrollTop: $("#div1").offset().top
    					}, 1500);
    				},1000);
    			}
    		},
            computed:{
                numero(){
                    return "exam/"+this.exams
                }
            }
    	}
    </script>
    <style>
    .actividad{
    	cursor: hand;
    }
    #progreso_1, #progreso_2{
    	width: 0%;
    }
    #circulo{
    	background: #FFBC5B;
    	height: 40px;
    	width: 40px;
    	border-radius: 50%;
    	line-height: 40px;
    	text-align: center;
    }
    </style>