<?php

namespace App\Http\Controllers;

use App\Pregunta;
use Illuminate\Http\Request;

class PreguntaController extends Controller
{

  public function index(Request $request)
  {
    if($request->ajax()){
      $preguntas = Pregunta::all();
      return $preguntas;
    }
    return view('admin.examen.index');
  }

  public function store(Request $request)
  {
    $pregunta = new Pregunta();
    $pregunta->enunciado = $request->enunciado;
    $pregunta->examen_id = $request->examen_id;
    $pregunta->respuesta_id = $request->respuesta_id;
    $pregunta->save();
    return response()->json([
      "message" => "Creado correctamente",
      "pregunta" => $pregunta
    ],200);
    return $pregunta;
  }
  public function update(Request $request, $id)
  {
    $pregunta = Pregunta::find($id);
    $pregunta->enunciado = $request->enunciado;
    $pregunta->examen_id = $request->examen_id;
    $pregunta->respuesta_id = $request->respuesta_id;
    $pregunta->save();
    return $pregunta;
  }

  public function destroy($id)
  {
   $respuesta = Pregunta::find($id);
   $respuesta->delete();
 }
}
