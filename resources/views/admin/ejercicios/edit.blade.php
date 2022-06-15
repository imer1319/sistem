@extends('layouts.admin')

@section('content')
	<div class="card">
		<div class="card-header">
			<h4>Editar ejercicio</h4>
		</div>
		<div class="card-body">
			<form action="{{ route('admin.ejercicios.update', $ejercicio) }}" method="POST">
				
				@method('PUT')

				@include('admin.ejercicios._form',['titulo' => 'Actualizar ejercicio'])

			</form>
		</div>
	</div>
@endsection