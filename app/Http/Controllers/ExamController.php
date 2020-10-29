<?php

namespace App\Http\Controllers;

use App\Exam;
use Illuminate\Http\Request;
use App\Http\Requests\CreateExamRequest;
class ExamController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin');
    }
    public function index(Request $request)
    {
        if($request->ajax()){
            return Exam::all();
        }
        return view('layouts.administrador');
    }

    public function store(CreateExamRequest $request)
    {
        $examen = new Exam();
        $examen->name = $request->name;
        $examen->content = $request->content;
        $examen->save();
        return response()->json([
            "message" => "Creado correctamente",
            "examen" => $examen
        ],200);
        return $examen;
    }

    public function show(Request $request, $id)
    {
        if($request->ajax()){
            $examen =Exam::find($id); 
            return $examen;
        }
        return view('layouts.administrador');
    }
    public function update(Request $request, $id)
    {
        $examen = Exam::find($id);
        $examen->fill($request->only('name','content'));
        $examen->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "examen" => $examen
        ],200);
        return $examen;
    }

    public function destroy($id)
    {
     $examen = Exam::find($id);
     $examen->delete();
     return response()->json([
        "message" => "Eliminado correctamente",
        "examen" => $examen
    ],200);
 }
}
