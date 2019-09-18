<?php

namespace App\Http\Controllers;

use App\Exam;
use Illuminate\Http\Request;

class ExamController extends Controller
{

    public function index(Request $request)
    {   
        if($request->ajax()){
            return Exam::get();
        }else{
            return view('admin.examen.index');
        }
    }

    public function store(Request $request)
    {
        $examen = new Exam();
        $examen->title = $request->title;
        $examen->descripcion = $request->descripcion;
        $examen->save();

        return $examen;
    }

    public function update(Request $request, $id)
    {
        $examen = Exam::find($id);
        $examen->title = $request->title;
        $examen->descripcion = $request->descripcion;
        $examen->save();

        return $examen;
    }

    public function destroy($id)
    {
        $examen = Exam::find($id);
        $examen->delete();
    }
}
