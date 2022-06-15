<form action="{{ route('admin.usuarios.update', $usuario) }}" method="POST" enctype="multipart/form-data">
	@csrf
	@method('PUT')
	<div class="row">
		<div class="form-group col-md-4">
			<label for="name">Nombre del usuario</label>
			<input id="name" name="name" value="{{ old('name', $usuario->name) }}" class="form-control">
			@error('name')
			<span class="invalid-feedback d-block" role="alert">
				<strong>{{ $message }}</strong>
			</span>
			@enderror
		</div>
		<div class="form-group col-md-4">
			<label for="apellido_paterno">Apellido paterno</label>
			<input id="apellido_paterno" name="apellido_paterno" value="{{ old('apellido_paterno', $usuario->apellido_paterno) }}" class="form-control">
			@error('apellido_paterno')
			<span class="invalid-feedback d-block" role="alert">
				<strong>{{ $message }}</strong>
			</span>
			@enderror
		</div>
		<div class="form-group col-md-4">
			<label for="apellido_materno">Apellido materno</label>
			<input id="apellido_materno" name="apellido_materno"  value="{{ old('apellido_materno', $usuario->apellido_materno) }}" class="form-control">
			@error('apellido_materno')
			<span class="invalid-feedback d-block" role="alert">
				<strong>{{ $message }}</strong>
			</span>
			@enderror
		</div>	
		<div class="form-group col-md-4">
			<label for="password">Contraseña:</label>
			<input name="password" type="password" class="form-control" placeholder="Contraseña">
			<span class="text-muted"><i>Dejar en blanco si no quieres cambiar la contraseña</i></span>
		</div>

		<div class="form-group col-md-4">
			<label for="password_confirmation">Repita la contraseña:</label>
			<input name="password_confirmation" type="password" class="form-control"
			placeholder="Repita la contraseña">
		</div>
		<div class="form-group col-md-4">
			<label for="avatar">Avatar del usuario</label>
			<div class="input-group">
				<div class="custom-file">
					<input type="file" name="avatar" class="custom-file-input" id="avatar">
					<label class="custom-file-label" for="avatar">Cambiar avatar</label>
				</div>
			</div>
			@error('avatar')
			<span class="invalid-feedback d-block" role="alert">
				<strong>{{ $message }}</strong>
			</span>
			@enderror
			<span class="text-muted"><i>Dejar en blanco si no quieres cambiar el avatar</i></span>
		</div>
	</div>
	<div class="mt-3">
		<button class="btn btn-primary">Actualizar usuario</button>
	</div>
</form>