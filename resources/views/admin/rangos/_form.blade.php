@csrf
<div class="form-group">
	<label for="nombre">Titulo del rango</label>
	<input name="nombre" id="nombre" value="{{ old('nombre', $rango->nombre) }}" class="form-control">
	@error('nombre')
	<span class="invalid-feedback d-block" role="alert">
		<strong>{{ $message }}</strong>
	</span>
	@enderror
</div>
<div class="form-group">
	<label for="avatar">Imagen del rango</label>
	<div class="input-group">
		<div class="custom-file">
			<input type="file" name="avatar" class="custom-file-input" id="avatar">
			<label class="custom-file-label" for="avatar">Buscar imagenes</label>
		</div>
	</div>
	@error('avatar')
	<span class="invalid-feedback d-block" role="alert">
		<strong>{{ $message }}</strong>
	</span>
	@enderror
</div>
<div class="btn-group">
	<a href="{{ route('admin.rangos.index') }}" class="btn btn-dark">Regresar</a>
	<button class="btn btn-primary">{{ $titulo }}</button>
</div>

@section('styles')
<style>
	.custom-file-input:lang(en)~.custom-file-label::after {
		content: "Buscar" !important;
	}
</style>
@endsection