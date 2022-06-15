@extends('layouts.admin')

@section('content')
<div class="card">
	<div class="card-body">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h4>Ejercicios</h4>
			<a href="{{ route('admin.ejercicios.create') }}" class="btn btn-success text-white">
				<i class="fas fa-plus"></i> Crear Nuevo
			</a>
		</div>
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Titulo</th>
					<th class="text-center">Acciones</th>
				</tr>
			</thead>
			<tbody>
				@forelse($ejercicios as $ejercicio)
				<tr>
					<td width="10px">{{ $loop->iteration }}</td>
					<td>{{ $ejercicio->name }}</td>
					<td class="text-center" colspan="2">
						<a href="{{ route('admin.ejercicios.edit', $ejercicio) }}" class="btn btn-warning text-white"><i class="fas fa-pencil-alt"></i> Editar</a>
					</td>
				</tr>
				@empty
				<tr>
					<td class="text-center">No hay datos aún</td>
				</tr>
				@endforelse
			</tbody>
		</table>
		<div class="mt-3">
			{{ $ejercicios->links() }}
		</div>
	</div>
</div>
@endsection