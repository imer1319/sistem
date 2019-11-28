<?php

namespace App\Http\Controllers;

use App\Exam;
use Illuminate\Http\Request;

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

    public function store(Request $request)
    {
        if ($request->hasFile('icon')) {
            $file = $request->file('icon');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/examen',$url);
        }
        if ($request->hasFile('content')) {
            $file = $request->file('content');
            $content = time().$file->getClientOriginalName();
            $file->move(public_path().'/examenes',$content);
        }
        $examen = new Exam();
        $examen->name = $request->name;
        $examen->content = $content;
        $examen->icon = $url;
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
        $examen->fill($request->only('name'));
        if ($file = $request->hasFile('icon')) {
            $file = $request->file('icon');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/examen',$url);
            $file_path = public_path().'/imagenes/examen/'.$examen->icon;
            if(is_file($file_path)){unlink($file_path);}
            $examen->icon = $url;
        }
        if ($archivo = $request->hasFile('content')) {
            $archivo = $request->file('content');
            $linki = time().$archivo->getClientOriginalName();
            $archivo->move(public_path().'/examenes',$linki);
            $file_buscar = public_path().'/examenes/'.$examen->content;
            if(is_file($file_buscar)){unlink($file_buscar);}
            $examen->content = $linki;
        }
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
     $file_path = public_path().'/imagenes/examen/'.$examen->icon;
     if(is_file($file_path)){unlink($file_path);}
     $file_content = public_path().'/examenes/'.$examen->content;
     if(is_file($file_content)){unlink($file_content);}
     $examen->delete();
     return response()->json([
        "message" => "Eliminado correctamente",
        "examen" => $examen
    ],200);
 }
}
