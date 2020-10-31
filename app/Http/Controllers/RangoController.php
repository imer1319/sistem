<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rango;
class RangoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin');
    }
    public function index(Request $request)
    {
        if($request->ajax()){
            $rango =  Rango::get();
            return $rango;
        }
        return view('layouts.administrador');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required',
            'avatar' => 'required|mimes:jpeg,jpg,png,gif|required|max:10000',
        ]);
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/rangos',$url);
        }
        $rango = new Rango();
        $rango->nombre = $request->nombre;
        $rango->avatar = $url;
        $rango->save();
        return response()->json([
            "message" => "Creado correctamente",
            "rango" => $rango
        ],200);
        return $rango;
    }
    public function update(Request $request, $id)
    {
        $rango = Rango::find($id);
        $rango->fill($request->except('avatar'));
        if ($file = $request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/rangos',$url);
            $file_path = public_path().'/imagenes/rangos/'.$rango->avatar;
            if(is_file($file_path)){unlink($file_path);}
            $rango->avatar = $url;
        }
        $rango->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "rango" => $rango
        ],200);
        return $rango;
    }
}
