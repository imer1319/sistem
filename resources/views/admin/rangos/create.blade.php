@extends('layouts.admin')

@section('content')
	<div class="card">
		<div class="card-header">
			<h4>Crear nuevo rango</h4>
		</div>
		<div class="card-body">
			<form action="{{ route('admin.rangos.store') }}" method="POST" enctype="multipart/form-data">

				@include('admin.rangos._form',['titulo' => 'Guardar rango'])

			</form>
		</div>
	</div>
@endsection