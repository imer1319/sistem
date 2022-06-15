@extends('layouts.admin')

@section('content')
<div class="card">
	<div class="card-body">
		<div class="d-flex justify-content-between align-items-center mb-3">
			<h4>Usuarios</h4>
			<a href="{{ route('admin.usuarios.create') }}" class="btn btn-success text-white">
				<i class="fas fa-plus"></i> Crear Nuevo
			</a>
		</div>
		<div class="row">
			@foreach($usuarios as $usuario)
			<div class="col-6 col-md-3">
				<div class="card shadow-md">
					<div class="card-body">
						<h5 class="text-center">{{ $usuario->name }}</h5>
						<div class="text-center">
							<img src="/imagenes/usuario/{{ $usuario->avatar }}" alt="{{ $usuario->name }}" width="100px" height="110px">
						</div>
						<a href="{{ route('admin.usuarios.show', $usuario) }}" class="btn btn-info btn-block mt-3">Ver datos</a>
					</div>
				</div>
			</div>
			@endforeach
		</div>
		<div class="mt-3">
			{{ $usuarios->links() }}
		</div>
	</div>
</div>
@endsection