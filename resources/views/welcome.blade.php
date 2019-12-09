<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>
  <style>
    html,body{
      height: 100%;
      width: 100%;
    }
    .navbar{
      background:#2F6988;
      padding: 1% 0;
      font-size: 1.2em;
    }
    .navbar-nav li a {
      color: #d5d5d5;
    }
    .navbar-nav li a:hover{
      color:#fff;
    }
    #home{
      background: url(imagenes/landing/mountains.jpg) no-repeat center fixed;
      display: table;
      height: 100%;
      position: relative;
      width: 100%;
      background-size: cover;
    }
    .loading-text{
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      color: white
    }
    .loading-text h1{
      font-size: 500%;
      font-weight: 700;
    }
    .padding{
      padding: 50px 0;
    }
    #fixed{
      background: url(imagenes/landing/background.jpg) no-repeat center center fixed;
      display: table;
      height: 60%;
      position: relative;
      width:100%;
      background-size: cover;
    }
    footer{
      width: 100%;
      background-color: #23415c;
      padding: 5% 5% 6% 5%;
      color: #fff;
    }
    .fa{
      padding: 15px;
      font-size: 25px;
      color: #fff;
    }
    .fa:hover{
      color: #d5d5d5;
      text-decoration: none;
    }
    .icon{
      max-width: 200px;
    }
    @media (max-width: 768px) {
      .loading-text h1{
        font-size: 300%;
      }
      .fa{
        font-size: 20px;
        padding: 10px;
      }
    }
  </style>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #25546D;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ml-auto">
        @if (Route::has('login'))
        @auth
        <li class="nav-item">
          <a href="{{ url('/home') }}" class="nav-link">Inicio</a>
        </li>
        @else
        <li class="nav-item">
          <a href="{{ route('login') }}" class="nav-link">Iniciar Sesión</a>
        </li>
        <li>
          @if (Route::has('register'))
          <a href="{{ route('register') }}" class="nav-link">Registrarse</a>
        </li>
        @endif
        @endauth
        @endif
      </ul>
    </div>
  </nav>
  <div id="home">
    <div class="loading-text">
      <h1>Lectura veloz</h1>
      <h3>empezar con los ejercicios</h3>
    </div>
  </div>
  <div class="padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img src="imagenes/landing/bootstrap.jpg" width="100%">
        </div>
        <div class="col-sm-6 text-center">
          <h2>All About Using Bootstrap.</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore debitis facere perspiciatis sunt, incidunt a illo, quasi deserunt adipisci atque, optio tempore molestiae expedita, dolor suscipit asperiores nam est nihil!</p>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore debitis facere perspiciatis sunt, incidunt a illo, quasi deserunt adipisci atque, optio tempore molestiae expedita, dolor suscipit asperiores nam est nihil!</p>
        </div>
      </div>
    </div>
  </div>
  <div class="padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>Built With Sass</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maxime earum, maiores dolores. Numquam a unde officia, deserunt accusamus, eius tenetur aut dicta cum error repudiandae sapiente iure minima quos?</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <img src="imagenes/landing/ficha01.png" class="img-responsive" width="100%">
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4>And Less</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis tempora eligendi odio dicta incidunt dolore, repellat. Blanditiis aspernatur modi velit mollitia? Dignissimos eaque nesciunt quos voluptatibus aut minima. Beatae, alias!</p>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <img src="imagenes/landing/ficha02.png" class="img-responsive" width="100%">
        </div>
      </div>
    </div>
  </div>
  <div id="fixed"></div>
  <div class="padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h4>Here the cool thing about Bootstrap.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ut, magni eius, sunt similique sit porro possimus laboriosam, rerum modi laudantium soluta excepturi non aliquid illum. Iste praesentium, officiis facilis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quo omnis accusamus placeat ducimus ea quaerat, vero odit velit praesentium, at, dolor est neque commodi tempore quasi rem, vitae. Beatae?</p>
        </div>
        <div class="col-sm-6">
          <img src="imagenes/landing/bootstrap2.png" width="100%">
        </div>
      </div>
    </div>
  </div>
  <footer class="container-fluid text-center">
    <div class="row">
      <div class="col-sm-4">
        <h3>Contacts Us</h3>
        <br>
        <h4>our address and contact info here.</h4>
      </div>
      <div class="col-sm-4">
        <h3>Connect</h3>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-linkedin"></a>
      </div>
      <div class="col-sm-4">
        <img src="imagenes/landing/b.png" width="100%" class="icon">
      </div>
    </div>
  </footer>

</body>
</html>
