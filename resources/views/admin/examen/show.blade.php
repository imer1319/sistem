@extends('layouts.app')

@section('content')
<div class="container">
	{{ $examen->name }}
	
		<respuesta></respuesta>
</div>
@endsection