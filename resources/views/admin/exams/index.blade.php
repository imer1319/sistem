@extends('layouts.admin')

@section('content')
<div class="card">
	<div class="card-body">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h4>Examenes</h4>
			<a href="{{ route('admin.examens.create') }}" class="btn btn-success text-white">
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
				@forelse($examenes as $examen)
				<tr>
					<td width="10px">{{ $loop->iteration }}</td>
					<td>{{ $examen->name }}</td>
					<td class="text-center" colspan="2">
						<a href="{{ route('admin.examens.show', $examen) }}" class="btn btn-info"><i class="fas fa-eye"></i>Ver
						</a>
						<a href="{{ route('admin.examens.edit', $examen) }}" class="btn btn-warning text-white"><i class="fas fa-pencil-alt"></i> Editar</a>
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
			{{ $examenes->links() }}
		</div>
	</div>
</div>
@endsection