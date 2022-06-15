@csrf
<div class="form-group">
	<label for="name">Titulo del ejercicio</label>
	<input name="name" id="name" value="{{ old('name', $ejercicio->name) }}" class="form-control">
	@error('name')
	<span class="invalid-feedback d-block" role="alert">
		<strong>{{ $message }}</strong>
	</span>
	@enderror
</div>
<div class="btn-group">
	<a href="{{ route('admin.ejercicios.index') }}" class="btn btn-dark">Regresar</a>
	<button class="btn btn-primary">{{ $titulo }}</button>
</div>