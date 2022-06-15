@extends('layouts.admin')

@section('content')
<div class="card">
	<div class="card-header">
		<h4>Datos del examen</h4>
	</div>
	<div class="card-body">
		<table class="table table-bordered">
			<tr>
				<th>Titulo</th>
				<td>{{ $examen->name }}</td>
			</tr>
			<tr>
				<th>Contenido</th>
				<td class="text-justify">{{ $examen->content }}</td>
			</tr>
		</table>
		<div class="mt-3">
			<a href="{{ route('admin.examens.index') }}" class="btn btn-dark">Regresar</a>
		</div>
	</div>
</div>
@endsection