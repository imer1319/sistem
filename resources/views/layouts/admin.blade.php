<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- start: Css -->
    <link rel="stylesheet" type="text/css" href="asset/css/bootstrap.min.css">

    <!-- plugins -->
    <link rel="stylesheet" type="text/css" href="asset/css/plugins/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="asset/css/plugins/simple-line-icons.css"/>
    <link rel="stylesheet" type="text/css" href="asset/css/plugins/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="asset/css/plugins/fullcalendar.min.css"/>
    <link href="asset/css/style.css" rel="stylesheet">
    <!-- end: Css -->
</head>
<body id="mimin" class="dashboard">
  <!-- start: Header -->
  <nav class="navbar navbar-default header navbar-fixed-top">
      <div class="col-md-12 nav-wrapper">
        <div class="navbar-header" style="width:100%;">
          <div class="opener-left-menu is-open">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
        <a href="#" class="navbar-brand"> 
            <b>SLV</b>
        </a>
        <ul class="nav navbar-nav navbar-right user-nav">
            <li class="user-name"><span>{{ Auth::user()->name }}</span></li>
            <li class="dropdown avatar-dropdown">
             <img src="asset/img/avatar.jpg" class="img-circle avatar" alt="user name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"/>
             <ul class="dropdown-menu user-dropdown">
               <li><a href="#"><span class="fa fa-user"></span> Mi Perfil</a></li>
               <li><a href="{{ route('logout') }}"
                 onclick="event.preventDefault();
                 document.getElementById('logout-form').submit();"><span class="fa fa-power-off ">
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>Cerrar Sesión
                </span></a></li>
        </ul>
    </li>
    <li ><a href="#" class="opener-right-menu"><span class="fa fa-coffee"></span></a></li>
</ul>
</div>
</div>
</nav>
<!-- end: Header -->

<div class="container-fluid mimin-wrapper">

  <!-- start:Left Menu -->
  <div id="left-menu">
      <div class="sub-left-menu scroll">
        <ul class="nav nav-list">
            <li><div class="left-bg"></div></li>
            <li class="time">
              <h1 class="animated fadeInLeft">21:00</h1>
          </li>
          <li class="active ripple">
              <a class="tree-toggle nav-header"><span class="fa-home fa"></span> Dashboard 
                <span class="fa-angle-right fa right-arrow text-right"></span>
            </a>
            <ul class="nav nav-list tree">
              <li><a href="dashboard-v1.html">Dashboard v.1</a></li>
              <li><a href="dashboard-v2.html">Dashboard v.2</a></li>
          </ul>
      </li>
      <li class="ripple">
          <a class="tree-toggle nav-header">
            <span class="fa-diamond fa"></span> Layout
            <span class="fa-angle-right fa right-arrow text-right"></span>
        </a>
        <ul class="nav nav-list tree">
            <li><a href="topnav.html">Top Navigation</a></li>
            <li><a href="boxed.html">Boxed</a></li>
        </ul>
    </li>
    <!-- end: Left Menu --> 
</div>
</ul>
</div>
</div>
</div>
<main id="app">
    @yield('admin')
</main>

<!-- start: Javascript -->
<script src="asset/js/jquery.min.js"></script>
<script src="asset/js/jquery.ui.min.js"></script>
<script src="asset/js/bootstrap.min.js"></script>


<!-- plugins -->
<script src="asset/js/plugins/moment.min.js"></script>
<script src="asset/js/plugins/fullcalendar.min.js"></script>
<script src="asset/js/plugins/jquery.nicescroll.js"></script>
<script src="asset/js/plugins/jquery.vmap.min.js"></script>
<script src="asset/js/plugins/maps/jquery.vmap.world.js"></script>
<script src="asset/js/plugins/jquery.vmap.sampledata.js"></script>
<script src="asset/js/plugins/chart.min.js"></script>


<!-- custom -->
<script src="asset/js/main.js"></script>
</body>
</html>
