<?php

namespace App\Http\Controllers;
use App\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin');
    }
    public function index(Request $request)
    {
        if($request->ajax()){
            return Categoria::all();
        }
        return view('layouts.administrador');
    }

    public function store(Request $request)
    {
        if ($request->hasFile('icono')) {
            $file = $request->file('icono');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/categorias',$url);
        }
        $categoria = new Categoria();
        $categoria->nombre = $request->nombre;
        $categoria->icono = $url;
        $categoria->save();
        return response()->json([
            "message" => "Creado correctamente",
            "categoria" => $categoria
        ],200);
        return $categoria;
    }
    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);
        $categoria->fill($request->except('icono'));
        if ($file = $request->hasFile('icono')) {
            $file = $request->file('icono');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/categorias',$url);
            $file_path = public_path().'/imagenes/categorias/'.$categoria->icono;
            if(is_file($file_path)){unlink($file_path);}
            $categoria->icono = $url;
        }
        $categoria->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "categoria" => $categoria
        ],200);
        return $insignia;
    }
    public function destroy($id)
    {
        $categoria = Categoria::find($id);
        $file_path = public_path().'/imagenes/categorias/'.$categoria->icono;
        if(is_file($file_path)){unlink($file_path);}
        $categoria->delete();
        return response()->json([
        "message" => "Eliminado correctamente",
        "categoria" => $categoria
    ],200);
 }
}
