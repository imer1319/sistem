<?php

namespace App\Http\Controllers;

use App\Pregunta;
use App\Exam;
use Illuminate\Http\Request;

class PreguntaController extends Controller
{

  public function index(Request $request, $id)
  {
    if($request->ajax()){
      $examen = Exam::find($id);

      return $examen->pregunta;
    }
    return view('layouts.administrador');
  }

  public function store(Request $request)
  {
    $pregunta = new Pregunta();
    $pregunta->enunciado = $request->enunciado;
    $pregunta->exam_id = $request->exam_id;
    $pregunta->respuestaA = $request->respuestaA;
    $pregunta->respuestaB = $request->respuestaB;
    $pregunta->respuestaC = $request->respuestaC;
    $pregunta->respuestaD = $request->respuestaD;
    $pregunta->esCorrecto = $request->esCorrecto;
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
    $pregunta->exam_id = $request->exam_id;
    $pregunta->respuestaA = $request->respuestaA;
    $pregunta->respuestaB = $request->respuestaB;
    $pregunta->respuestaC = $request->respuestaC;
    $pregunta->respuestaD = $request->respuestaD;
    $pregunta->esCorrecto = $request->esCorrecto;
    $pregunta->save();
    return $pregunta;
  }

  public function destroy($id)
  {
   $respuesta = Pregunta::find($id);
   $respuesta->delete();
 }
}
