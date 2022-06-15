@extends('layouts.admin')

@section('content')
<div class="card shadow-sm">
	<div class="card-body">
		<div class="row">
			<div class="col-4">
				<div class="text-center">
					<img class="img-responsive" src="/imagenes/usuario/{{$usuario->avatar }}" height="130" width="120">
					<h2 class="profile-username">{{ $usuario->name }}</h2>
				</div>
			</div>
			<div class="col-8">
				<h6 class="text-center">DATOS DEL USUARIO</h6>
				<div class="row">
					<div class="col-6">
						<h5>APELLIDOS</h5>
						<h6>{{ $usuario->apellido_paterno }} {{ $usuario->apellido_materno }}</h6>
					</div>
					<div class="col-6">
						<h5>PUNTOS</h5>
						<h6>{{ $usuario->puntos }}</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="card">
	<div class="card-body">
		<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
			<li class="nav-item" role="presentation">
				<a class="nav-link active" id="pills-edit-tab" data-toggle="pill" href="#pills-edit" role="tab" aria-controls="pills-edit" aria-selected="true">Editar</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-rango-tab" data-toggle="pill" href="#pills-rango" role="tab" aria-controls="pills-rango" aria-selected="false">Rango</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-examen-tab" data-toggle="pill" href="#pills-examen" role="tab" aria-controls="pills-examen" aria-selected="false">Examenes</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-ejercicio-tab" data-toggle="pill" href="#pills-ejercicio" role="tab" aria-controls="pills-ejercicio" aria-selected="false">Ejercicios</a>
			</li>
		</ul>
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane fade show active" id="pills-edit" role="tabpanel" aria-labelledby="pills-edit-tab">

				@include('admin.usuarios.partials.edit-user')

			</div>
			<div class="tab-pane fade" id="pills-rango" role="tabpanel" aria-labelledby="pills-rango-tab">

				@include('admin.usuarios.partials.rango-user')

			</div>
			<div class="tab-pane fade" id="pills-examen" role="tabpanel" aria-labelledby="pills-examen-tab">

				@include('admin.usuarios.partials.exam-user')

			</div>
			<div class="tab-pane fade" id="pills-ejercicio" role="tabpanel" aria-labelledby="pills-ejercicio-tab">

				@include('admin.usuarios.partials.ejercicio-user')
				
			</div>
		</div>
	</div>
</div>
@endsection

@section('styles')
<style>
	.custom-file-input:lang(en)~.custom-file-label::after {
		content: "Buscar" !important;
	}
</style>
@endsection