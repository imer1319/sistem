<h4 style="text-align: center;">Lista de usuarios</h4>
<table border="1">
	<thead>
		<tr>
			<th width="5"><b>#</b></th>
			<th width="20" style="text-align:center;"><b>Nombre</b></th>
			<th width="20" style="text-align:center;"><b>Contraseña</b></th>
			<th width="20" style="text-align:center;"><b>Puntos</b></th>
			<th width="20" style="text-align:center;"><b>Estado de avance</b></th>
			<th width="50" style="text-align:center;"><b>Examenes</b></th>
		</tr>
	</thead>
	<tbody>
		@foreach($users as $user)
			<tr>
				<td style="text-align:center;">{{$loop->iteration}}</td>
				<td style="text-align:center;">{{$user->name}}</td>
				<td style="text-align:center;">{{$user->hash_password}}</td>
				<td style="text-align:center;">{{$user->puntos}}</td>
				<td style="text-align:center;">{{$user->avance_curso}} de 28</td>
				<td>
					@foreach($user->examenes as $exam)
						<span><b>Titulo: </b>{{ $exam->name }}</span><br>
						<span><b> Comprensión: </b>{{ $exam->pivot->comprension }}% </span><br>
						<span><b> Velocidad: </b>{{ $exam->pivot->ppm }} ppm</span><br><br>
					@endforeach
				</td>
			</tr>		
		@endforeach
	</tbody>
</table>