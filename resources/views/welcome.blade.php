<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="shortcut icon" href="imagenes/logo.png">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <script src="{{ asset('js/app.js') }}" defer></script>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body style="overflow-x: hidden;">
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark shadow-sm" style="background-color: #2B6A88;">
      <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}">
          {{ config('app.name', 'Sistema Lectura Veloz') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

          </ul>
          <ul class="navbar-nav ml-auto">
            @guest
            <li class="nav-item">
              <a class="nav-link" href="{{ route('login') }}">{{ __('Iniciar Sesión') }}</a>
            </li>
            @if (Route::has('register'))
            <li class="nav-item">
              <a class="nav-link" href="{{ route('register') }}">{{ __('Registrarse') }}</a>
            </li>
            @endif
            @else
            <li class="nav-item dropdown">
              <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {{ Auth::user()->name }} <span class="caret"></span>
              </a>

              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
                {{ __('Cerrar Sesión') }}
              </a>

              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
              </form>
            </div>
          </li>
          @endguest
        </ul>
      </div>
    </div>
  </nav>
  <main class="py-4">
    <div class="row container">
      <div class="col-5 text-center d-none d-md-block">
        <img src="imagenes/inicio/fondo.png" alt="" width="80%">
      </div>
      <div class="col-md-7 my-auto">
        <h2>Entrena con los diferentes tipos de ejercicios que te esperan...</h2><br>
        <h5 class="text-justify">Este es un curso inspirado para que puedas mejorar a grandes escalas la velocidad de lectura actual que tienes en este momento.</h5>
      </div>
    </div>
    <h4 class="text-center p-4 text-white mt-3" style="background: #2E7294">¿Que se necesita para leer mas rapido?</h4>
    <div class="row container">
     <div class="col-6 col-md-3 text-center my-auto">
       <img src="imagenes/inicio/leer.png" alt="" width="80%">
     </div>
     <div class="col-6 col-md-3 text-justify my-auto">
       <h6>Utiliza un diccionario para tener una mejor comprension de lo que estas leyendo.</h6>
     </div>
     <div class="col-6 col-md-3 text-center my-auto">
       <img src="imagenes/inicio/leer2.png" alt="" width="80%">
     </div>
     <div class="col-6 col-md-3 text-justify my-auto">
       <h6>Utiliza alguna herramienta o incluso tus dedos para guiarte</h6>
     </div>
   </div>
 </main>
 <footer style="background: #163747" class="text-white text-center py-4">
  <div class="col-md-9 m-auto">
    <h4>Sistema lectura veloz para estudiantes de la U.E. Pdte. German Busch Nocturno.</h4>
  </div>
</footer>
</div>
</body>
</html>
