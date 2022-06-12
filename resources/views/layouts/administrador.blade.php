<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="shortcut icon" href="imagenes/logo.png">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <script src="{{ asset('js/app.js') }}" defer></script>
  <link rel="stylesheet" href="{{ asset('admin/plugins/fontawesome-free/css/all.min.css') }}">
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="{{ asset('admin/plugins/datatables-bs4/css/dataTables.bootstrap4.css') }}">
  <link rel="stylesheet" href="{{ asset('admin/css/adminlte.min.css') }}">
  <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini" style="overflow-x: hidden;">
  <div class="wrapper">
    <nav class="main-header navbar navbar-expand navbar-dark" style="background-color: #25546D;">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" style="background-color: #EBEBEC; border-radius: 30px;">
        <li class="nav-item">
          <a class="dropdown-item" style="border-radius: 15px;" href="{{ route('logout') }}"
          onclick="event.preventDefault();
          document.getElementById('logout-form').submit();"><i class="fas fa-power-off"></i>
          {{ __('Cerrar Sesión') }}
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          @csrf
        </form>
      </li>
    </ul>
  </nav>
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="background-color:#1f1f1f; ">
    <a href="#" class="brand-link">
      <img src="{{ asset('admin/img/AdminLTELogo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
      style="opacity: .8">
      <span class="brand-text font-weight-light">Sistema LV</span>
    </a>
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{ asset('admin/img/user2-160x160.png') }}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ Auth::user()->name }}</a>
        </div>
      </div>
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         <li class="nav-item">
          <a href="{{ route('admin') }}" class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              Inicio
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="{{ route('examen') }}" class="nav-link">
            <i class="fas fa-file-contract nav-icon"></i>
            <p>Examenes</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="{{ route('rango') }}" class="nav-link">
            <i class="nav-icon fas fa-trophy"></i>
            <p>Rangos</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="{{ route('ejercicio') }}" class="nav-link">
            <i class="nav-icon fas fa-gamepad"></i>
            <p>
              Ejercicios
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="{{ route('usuario') }}" class="nav-link">
            <i class="nav-icon fas fa-users"></i>
            <p>
              Usuarios
            </p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>

<div class="content-wrapper">
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
      </div>
    </div>
  </div>
  <div class="content" id="app">
    <div class="container-fluid">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>

<footer class="main-footer">
  <div class="float-right d-none d-sm-inline">
    UAJMS
  </div>
  <strong>Copyright &copy; 2020 Sistema Lectura Veloz.</strong>
</footer>
</div>

<script src="{{ asset('admin/plugins/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('admin/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('admin/plugins/datatables/jquery.dataTables.js') }}"></script>
<script src="{{ asset('admin/plugins/datatables-bs4/js/dataTables.bootstrap4.js') }}"></script>
<script src="{{ asset('admin/js/adminlte.min.js') }}"></script>
</body>
</html>
