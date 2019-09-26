<?php

namespace App\Http\Controllers;
use App\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax()){
            return Categoria::all();
        }
        return view('admin.categorias.index');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('icon')) {
            $file = $request->file('icon');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/categorias',$url);
        }
        $categoria = new Categoria();
        $categoria->name = $request->name;
        $categoria->icon = $url;
        $categoria->save();
        return response()->json([
            "message" => "Creado correctamente",
            "categoria" => $categoria
        ],200);
        return $categoria;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);
        $categoria->fill($request->except('icon'));
        if ($file = $request->hasFile('icon')) {
            $file = $request->file('icon');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/categorias',$url);
            $file_path = public_path().'/imagenes/categorias/'.$categoria->icon;
            if(is_file($file_path)){unlink($file_path);}
            $categoria->icon = $url;
        }
        $categoria->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "categoria" => $categoria
        ],200);
        return $categoria;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
     $categoria = Categoria::find($id);
     $file_path = public_path().'/imagenes/categorias/'.$categoria->icon;
     if(is_file($file_path)){unlink($file_path);}
     $categoria->delete();
     return response()->json([
        "message" => "Eliminado correctamente",
        "categoria" => $categoria
    ],200);
 }
}
