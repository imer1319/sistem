@extends('layouts.app')

@section('content')
<div class="container">
	<h3>Ejercicios</h3>
	<ul>
		@foreach($ejercicios as $ejercicio)
		<li>{{ $ejercicio->name }}</li>
		@endforeach
	</ul>
</div>
@endsection
