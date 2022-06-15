@csrf
<div class="form-group">
	<label for="name">Titulo del examen</label>
	<input name="name" id="name" value="{{ old('name', $examen->name) }}" class="form-control">
	@error('name')
	<span class="invalid-feedback d-block" role="alert">
		<strong>{{ $message }}</strong>
	</span>
	@enderror
</div>
<div class="form-group">
	<label for="content">Contenido del examen</label>
	<textarea name="content" id="content" class="form-control" rows="7">{{ old('content', $examen->content) }}</textarea> 
	@error('content')
	<span class="invalid-feedback d-block" role="alert">
		<strong>{{ $message }}</strong>
	</span>
	@enderror
</div>
<div class="btn-group">
	<a href="{{ route('admin.examens.index') }}" class="btn btn-dark">Regresar</a>
	<button class="btn btn-primary">{{ $titulo }}</button>
</div>