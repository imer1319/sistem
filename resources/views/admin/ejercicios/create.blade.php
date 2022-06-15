@extends('layouts.admin')

@section('content')
	<div class="card">
		<div class="card-header">
			<h4>Crear nuevo ejercicio</h4>
		</div>
		<div class="card-body">
			<form action="{{ route('admin.ejercicios.store') }}" method="POST">

				@include('admin.ejercicios._form',['titulo' => 'Guardar ejercicio'])

			</form>
		</div>
	</div>
@endsection