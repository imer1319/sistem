@extends('layouts.admin')

@section('content')
	<div class="card">
		<div class="card-header">
			<h4>Crear nuevo examen</h4>
		</div>
		<div class="card-body">
			<form action="{{ route('admin.examens.store') }}" method="POST">

				@include('admin.exams._form',['titulo' => 'Guardar examen'])

			</form>
		</div>
	</div>
@endsection