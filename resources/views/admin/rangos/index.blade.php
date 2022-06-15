@extends('layouts.admin')

@section('content')
<div class="card">
	<div class="card-body">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h4>Rangos</h4>
			<a href="{{ route('admin.rangos.create') }}" class="btn btn-success text-white">
				<i class="fas fa-plus"></i> Crear Nuevo
			</a>
		</div>
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Imagen</th>
					<th class="text-center">Acciones</th>
				</tr>
			</thead>
			<tbody>
				@forelse($rangos as $rango)
				<tr>
					<td width="10px">{{ $loop->iteration }}</td>
					<td>{{ $rango->nombre }}</td>
					<td class="text-center">
						<img src="/imagenes/rangos/{{ $rango->avatar }}" class="img-responsive" height="60" width="70"/>
					</td>
					<td class="text-center" colspan="2">
						<a href="{{ route('admin.rangos.edit', $rango) }}" class="btn btn-warning text-white"><i class="fas fa-pencil-alt"></i> Editar</a>
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
			{{ $rangos->links() }}
		</div>
	</div>
</div>
@endsection