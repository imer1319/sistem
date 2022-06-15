@extends('layouts.admin')

@section('content')
<h3 class="animated fadeInRight">Perfil del administrador</h3>
<div class="row">
	<div class="col-md-4 col-6">
		<div class="card border border-primary mb-3">
			<div class="m-auto card-header">Numero de usuarios</div>
			<div class="card-body d-flex justify-content-between align-items-center">
				<h1>{{ $count_users }}</h1>
				<h1>
					<i class="fas fa-user text-primary"></i>
				</h1>
			</div>
		</div>
	</div>
	<div class="col-md-4 col-6">
		<div class="card border border-success mb-3">
			<div class="text-center card-header">Numero de examenes</div>
			<div class="card-body d-flex justify-content-between align-items-center">
				<h1>{{ $count_exams }}</h1>
				<h1>
					<i class="fas fa-file-contract text-success"></i>
				</h1>
			</div>
		</div>
	</div>
	<div class="col-md-4 col-6">
		<div class="card border border-danger mb-3">
			<div class="m-auto card-header">Numero de ejercicios</div>
			<div class="card-body d-flex justify-content-between align-items-center">
				<h1>{{ $count_ejercicios }}</h1>
				<h1>
					<i class="fas fa-gamepad text-danger"></i>
				</h1>
			</div>
		</div>
	</div>
	<div class="col-6">
		<div class="card border border-danger mb-3">
			<div class="m-auto card-header">Estudiante con mayor puntuacion</div>
			<div class="card-body row">
				<div class="col-6">
					<div class="text-center"><b>Datos</b></div>
					<p>Nombre: {{ $mayor_puntuacion->name }}</p>
					<p>Puntos: {{ $mayor_puntuacion->puntos }}</p>
					<p>Rango: {{ $mayor_puntuacion->rango->nombre }}</p> 
				</div>
				<div class="col-6 text-center">
					<img class="profile-user-img rounded" src="imagenes/usuario/{{$mayor_puntuacion->avatar}}" height="120" width="100%"/>
					<b>
						<h4>Puntos: {{ $mayor_puntuacion->puntos }}</h4> 
					</b>
				</div>
			</div>
		</div>
	</div>
	<div class="col-6">
		<div class="card border border-primary mb-3">
			<div class="m-auto card-header">Estudiante con mayor velocidad</div>
			<div class="card-body row">
				<div class="col-6">
					<div class="text-center"><b>Datos</b></div>
					<p>Nombre: {{ $mayor_velocidad[0]->name }}</p>
					<p>Puntos: {{ $mayor_velocidad[0]->puntos }}</p>
					<p>Comprensión: {{ $mayor_velocidad[0]->comprension }}%</p>
				</div>
				<div class="col-6 text-center">
					<img class="profile-user-img rounded" 
					src="imagenes/usuario/{{$mayor_velocidad[0]->avatar}}" height="120" width="100%"/>
					<b>
						<h4>Ppm: {{ $mayor_velocidad[0]->ppm }}</h4>
					</b>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
@endsection