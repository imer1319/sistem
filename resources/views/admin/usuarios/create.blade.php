<div class="modal fade" id="modalCreate" tabindex="-1" role="dialog" aria-labelledby="modalCreateLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<form action="{{ route('admin.usuarios.store', '#create') }}" method="POST">
				@csrf
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Registrar nuevo usuario</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label for="name">Nombre del usuario</label>
						<input name="name" placeholder="Ingresa aqui el titulo de la publicacion" id="name"
						class="form-control @error('name') is-invalid @enderror" value="{{ old('name') }}"
						autocomplete="name" autofocus>
						@error('name')
						<span class="invalid-feedback" role="alert">
							<strong>{{ $message }}</strong>
						</span>
						@enderror
					</div>
					<div class="form-group">
						<label for="generar">Contraseña del usuario</label>
						<div class="btn-group w-100">
							<input name="password" id="password" class="form-control" placeholder="Ingresa la contraseña para el usuario">
							<a href="#" onclick="generar()" id="generar" class="btn btn-dark">Generar</a>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button class="btn btn-primary">Registrar usuario</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
@section('scripts')
<script>
	if (window.location.hash === "#create") {
		$('#modalCreate').modal('show');
	}

	$('#modalCreate').on('hide.bs.modal', function() {
		window.location.hash = "#";
		$('#name').val('');
		$('#name').removeClass('is-invalid');
	});

	$('#modalCreate').on('shown.bs.modal', function() {
		$('#name').focus();
		window.location.hash = "#create";
	});
	function generar() {
		document.getElementById("password").value 
		= Math.random().toString(36).slice(2, 8);	
	}
</script>
@endsection