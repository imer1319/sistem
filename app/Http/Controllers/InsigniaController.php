<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Insignia;
use Illuminate\Support\Facades\File;
class InsigniaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin');
    }
	public function index(Request $request)
    {
        if($request->ajax()){
            return Insignia::all();
        }
        return view('layouts.administrador');
    }
	public function store(Request $request)
    {
        if ($request->hasFile('icon')) {
            $file = $request->file('icon');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/insignias',$url);
        }
        $insignia = new Insignia();
        $insignia->name = $request->name;
        $insignia->description = $request->description;
        $insignia->icon = $url;
        $insignia->save();
        return response()->json([
            "message" => "Creado correctamente",
            "insignia" => $insignia
        ],200);
        return $insignia;
    }
	public function update(Request $request, $id)
    {
        $insignia = Insignia::find($id);
        $insignia->fill($request->except('icon'));
        if ($file = $request->hasFile('icon')) {
            $file = $request->file('icon');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/insignias',$url);
            $file_path = public_path().'/imagenes/insignias/'.$insignia->icon;
            if(is_file($file_path)){unlink($file_path);}
            $insignia->icon = $url;
        }
        $insignia->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "insignia" => $insignia
        ],200);
        return $insignia;
    }
	public function destroy($id)
    {
     $insignia = Insignia::find($id);
     $file_path = public_path().'/imagenes/insignias/'.$insignia->icon;
     if(is_file($file_path)){unlink($file_path);}
     $insignia->delete();
     return response()->json([
        "message" => "Eliminado correctamente",
        "insignia" => $insignia
    ],200);
 }
}