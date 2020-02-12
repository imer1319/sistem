<?php

namespace App\Http\Controllers;
use App\User;
use App\Role;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin');
    }
    public function index(Request $request)
    {
        if($request->ajax()){
            $roles = Role::find(2);
            return $roles->users;
        }
        return view('layouts.administrador');
    }
    public function show(Request $request, $id)
    {
        if($request->ajax()){
            $usuario =User::find($id); 
            return $usuario;
        }
        return view('layouts.administrador');
    }
    public function update(Request $request, $id)
    {
        $usuario = User::find($id);
        $usuario->fill($request->except('avatar'));
        if ($file = $request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/usuario',$url);
            $file_path = public_path().'/imagenes/usuario/'.$usuario->avatar;
            if($file_path !=public_path().'/imagenes/usuario/default.png'){unlink($file_path);}
            $usuario->avatar = $url;
        }
        $usuario->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "usuario" => $usuario
        ],200);
        return $usuario;
    }

    public function destroy($id)
    {
        $usuario = User::find($id);
        $file_path = public_path().'/imagenes/usuario/'.$usuario->avatar;
        if(is_file($file_path)){unlink($file_path);}
        $usuario->delete();
        return response()->json([
            "message" => "Eliminado correctamente",
            "usuario" => $usuario
        ],200);
    }
}
