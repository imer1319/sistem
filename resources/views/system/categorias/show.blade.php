@extends('layouts.app')

@section('content')
<div class="container">
	<h3>Categorias</h3>
	<ul>
		@foreach($categorias->ejercicio as $ejercicio)
		<li>{{ $ejercicio->name }}</li>
		@endforeach
	</ul>
</div>
@endsection