<?php

namespace App\Http\Controllers;
use App\Respuesta;
use Response;
use Illuminate\Http\Request;
use Validator;

class RespuestaController extends Controller
{
    public function index(Request $request)
    {
        if($request->ajax()){
            $respuestas = Respuesta::all();
            return $respuestas;
        }
        return view('admin.examen.index');
    }
    public function store(Request $request)
    {
        {
         if($request->ajax())
         {
          $rules = array(
            'respuesta.*'  => 'required',
            'examen_id.*'  => 'required'
        );
       $respuesta = $request->respuesta;
       $examen_id = $request->examen_id;
       for($count = 0; $count < count($respuesta); $count++)
       {
           $data = array(
            'respuesta' => $respuesta[$count],
            'examen_id'  => $examen_id[$count]
        );
           $insert_data[] = $data; 
       }

       Respuesta::insert($insert_data);
       return response()->json([
         'success'  => 'Data Added successfully.'
       ]);
     }
   }
 }
public function update(Request $request, $id)
{
    $respuesta = Respuesta::find($id);
    $respuesta->respuesta = $request->respuesta;
    $respuesta->examen_id = $request->examen_id;
    $respuesta->save();
    return $respuesta;
}
public function destroy($id)
{
   $respuesta = Respuesta::find($id);
   $respuesta->delete();
   return response()->json([
        "message" => "Eliminado correctamente",
        "respuesta" => $respuesta
    ],200);
}
}
