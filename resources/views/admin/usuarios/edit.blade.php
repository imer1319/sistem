@extends('layouts.admin')

@section('content')
	<div class="card">
		<div class="card-header">
			<h4>Editar examen</h4>
		</div>
		<div class="card-body">
			<form action="{{ route('admin.examens.update', $examen) }}" method="POST">
				
				@method('PUT')

				@include('admin.exams._form',['titulo' => 'Actualizar examen'])

			</form>
		</div>
	</div>
@endsection