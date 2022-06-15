<div class="row">
	@forelse($usuario->examenes as $examen)
	<div class="col-md-6">
		<div class="card shadow">
			<div class="card-body">
				<h5><b></b> {{ $loop->iteration }}</h5>
				<h5><b>Titulo: </b> {{ $examen->name }}</h5>
				<h5><b>PPM: </b> {{ $examen->pivot->ppm }}</h5>
				<h5><b>Comprension: </b> {{ $examen->pivot->comprension }} %</h5>
			</div>
		</div>
	</div>
	@empty
	<h5 class="text-center">Aun no ha dado ningun examen</h5>
	@endforelse
</div>