<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="shortcut icon" href="imagenes/logo.png">
  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>
  <script src="https://code.jquery.com/jquery-3.4.1.js"integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">    

  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">
  <style>
    .nav-link{
      color:#fff !important;
    }
    .wraper{
      margin: 30px auto 50px;
      border-radius: 10px;
      padding-top: 40px;
      padding-bottom: 40px;
      box-shadow: 0 0 40px 2px rgba(37,73,214,0.18);
    }
    .wraper .img-future{
      width: 100%;
      padding: 40px;
      height: 400px;
      margin: auto;
    }
    .img-second{
      width: 100%;
      height: 120px;
    }
  </style>
</head>
<body style="overflow-x: hidden;">
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark shadow-sm bg-primary">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto">
            <li class="navbar-brand">Lectura Veloz</li>
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->

            @if (Route::has('login'))
            <li class="nav-item">
              @auth
              <a class="nav-link" href="{{ route('/home') }}">{{ __('Inicio') }}</a>
            </li>
            @else
            <li class="nav-item">
              <a class="nav-link" href="{{ route('login') }}">{{ __('Iniciar Sesión') }}</a>  
            </li>
            @if (Route::has('register'))
            <li class="nav-item">
              <a class="nav-link" href="{{ route('register') }}">{{ __('Registrarse') }}</a>
            </li>
            @endif
            @endauth
            @endif
          </ul>
        </div>
      </div>
    </nav>
    <main class="py-4">
      <div class="container">
        <div class="wraper bg-white">
          <div class="row">
            <div class="col-md-6 my-auto">
              <h1 class="px-5 text-primary font-weight-bold">Sistema Entrenador de Lectura Veloz</h1>
              <p class="lead text-justify px-5 pt-5">Este es un curso inspirado para que puedas mejorar a grandes escalas la velocidad de lectura actual que tienes en este momento.
              Ayudado con tecnicas de gamificación</p>
            </div>
            <div class="col-md-6">
              <img src="imagenes/fondo.png" class="img-future">
            </div>
          </div>
        </div>
      </div>
      <!--  ====================== Cards segunda parte =============================  -->
      <div class="container text-center pb-5">
        <h1>¿Que se necesita para aumentar la velocidad de lectura?</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 mb-4">
            <div class="card">
              <div class="card-body">
                <img src="imagenes/inicio/leer.png" class="img-second">
                <div class="card-title text-center">
                  <b>Utiliza el diccionario para aumentar tu vocabulario</b>
                </div>
                <div class="text-justify card-text text-secondary">
                 <p>Utiliza un diccionario para tener una mejor comprension de lo que estas leyendo.</p>
               </div>
             </div>
           </div>
         </div>
         <div class="col-6 col-md-3 mb-4">
          <div class="card">
            <div class="card-body">
              <img src="imagenes/inicio/leer.png" class="img-second">
              <div class="card-title text-center">
                <b>Utiliza el diccionario para aumentar tu vocabulario</b>
              </div>
              <div class="text-justify card-text text-secondary">
               <p>Utiliza un diccionario para tener una mejor comprension de lo que estas leyendo.</p>
             </div>
           </div>
         </div>
       </div>
       <div class="col-6 col-md-3 mb-4">
        <div class="card">
          <div class="card-body">
            <img src="imagenes/inicio/leer.png" class="img-second">
            <div class="card-title text-center">
              <b>Utiliza el diccionario para aumentar tu vocabulario</b>
            </div>
            <div class="text-justify card-text text-secondary">
             <p>Utiliza un diccionario para tener una mejor comprension de lo que estas leyendo.</p>
           </div>
         </div>
       </div>
     </div>
     <div class="col-6 col-md-3 mb-4">
      <div class="card">
        <div class="card-body">
          <img src="imagenes/inicio/leer.png" class="img-second">
          <div class="card-title text-center">
            <b>Utiliza el diccionario para aumentar tu vocabulario</b>
          </div>
          <div class="text-justify card-text text-secondary">
           <p>Utiliza un diccionario para tener una mejor comprension de lo que estas leyendo.</p>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</main>
<footer class="text-white text-center py-4 bg-danger">
  <div class="col-md-9 m-auto">
    <h4>Sistema lectura veloz para estudiantes de la U.E. Pdte. German Busch Nocturno.</h4>
  </div>
</footer>
</div>
</body>
</html>
