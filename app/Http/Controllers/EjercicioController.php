<?php

namespace App\Http\Controllers;

use App\Ejercicio;
use Illuminate\Http\Request;

class EjercicioController extends Controller
{
 public function __construct()
 {
    $this->middleware('auth');
    $this->middleware('role:admin');
}
public function index(Request $request)
{
    if($request->ajax()){
        return Ejercicio::all();
    }
    return view('layouts.administrador');
}
public function store(Request $request)
{
    if ($request->hasFile('icon')) {
        $file = $request->file('icon');
        $url = time().$file->getClientOriginalName();
        $file->move(public_path().'/imagenes/ejercicios',$url);
    }
    $ejercicio = new Ejercicio();
    $ejercicio->name = $request->name;
    $ejercicio->description = $request->description;
    $ejercicio->icon = $url;
    $ejercicio->save();
    return response()->json([
        "message" => "Creado correctamente",
        "ejercicio" => $ejercicio
    ],200);
    return $ejercicio;
}
public function update(Request $request, $id)
{
    $ejercicio = Ejercicio::find($id);
    $ejercicio->fill($request->except('icon'));
    if ($file = $request->hasFile('icon')) {
        $file = $request->file('icon');
        $url = time().$file->getClientOriginalName();
        $file->move(public_path().'/imagenes/ejercicios',$url);
        $file_path = public_path().'/imagenes/ejercicios/'.$ejercicio->icon;
        if(is_file($file_path)){unlink($file_path);}
        $ejercicio->icon = $url;
    }
    $ejercicio->save();
    return response()->json([
        "message" => "Actualizado correctamente",
        "ejercicio" => $ejercicio
    ],200);
    return $ejercicio;
}
public function destroy($id)
{
   $ejercicio = Ejercicio::find($id);
   $file_path = public_path().'/imagenes/ejercicios/'.$ejercicio->icon;
   if(is_file($file_path)){unlink($file_path);}
   $ejercicio->delete();
   return response()->json([
    "message" => "Eliminado correctamente",
    "ejercicio" => $ejercicio
],200);
}
}
