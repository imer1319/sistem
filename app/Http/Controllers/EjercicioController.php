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
    $ejercicio = new Ejercicio();
    $ejercicio->name = $request->name;
    $ejercicio->save();
    return response()->json([
        "message" => "Creado correctamente",
        "ejercicio" => $ejercicio
    ],200);
    return $ejercicio;
}
public function update(Request $request, $id)
{
    $ejercicio = Ejercicio::find($id)->update($request->all());
    return response()
    ->json([
        "message" => "Actualizado correctamente",
        "ejercicio" => $ejercicio
    ],200);
    return $ejercicio;
}
}
