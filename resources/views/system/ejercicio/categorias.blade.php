@extends('layouts.app')

@section('content')
<div class="container">
	<h3>Ejercicios</h3>
	<ul>
		@foreach($categorias as $categoria)
		<li>{{ $categoria->name }}</li>
		@endforeach
	</ul>
</div>
@endsection