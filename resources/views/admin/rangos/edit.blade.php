@extends('layouts.admin')

@section('content')
	<div class="card">
		<div class="card-header">
			<h4>Editar rango</h4>
		</div>
		<div class="card-body">
			<form action="{{ route('admin.rangos.update', $rango) }}" method="POST" enctype="multipart/form-data">
				
				@method('PUT')

				@include('admin.rangos._form',['titulo' => 'Actualizar rango'])

			</form>
		</div>
	</div>
@endsection