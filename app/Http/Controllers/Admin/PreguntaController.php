<?php

namespace App\Http\Controllers\Admin;

use App\Exam;
use App\Pregunta;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Pregunta\CreateRequest;
use App\Http\Requests\Pregunta\UpdateRequest;

class PreguntaController extends Controller
{
	public function index(Request $request, $examen)
	{
		$examen = Exam::find($examen);
		return $examen->preguntas;
	}

	public function store(CreateRequest $request)
	{
		return Pregunta::create($request->validated());
	}

	public function update(UpdateRequest $request, $id)
	{
		$pregunta = Pregunta::find($id);
		$pregunta->update($request->validated());
		return $pregunta;
	}
}
