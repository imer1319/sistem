<?php

namespace App\Http\Controllers;
use App\User;
use App\Role;
use App\SaveExam;
use App\Ejercicio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\UserUpdateRequest;

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
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:users|max:20',
            'password' => 'required|max:8',
            'hash_password' => 'required|max:8',
        ]);
        $usuario = new User();
        $usuario->name = $request->name;
        $usuario->hash_password = $request->hash_password;
        $usuario->password = bcrypt($request->password);
        $usuario->save();
        $usuario->roles()->attach(2);
        return response()->json([
            "message" => "Creado correctamente",
            "usuario" => $usuario
        ],200);
        return $usuario;
    }
    public function update(UserUpdateRequest $request, $id)
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

    public function getDataExamUser($id)
    {
        $usuario = User::find($id);
        return $usuario->examenes()
        ->orderBy('created_at','desc')->get();
    }

    public function getDataGameMax($id, $ejercicio_id)
    {
        $user = DB::table('ejercicio_user')
        ->where('ejercicio_id','=',$ejercicio_id)
        ->where('user_id','=',$id)
        ->max('puntuacion');
        if ($user == null) {
            return 0;
        }else{
            return $user;
        }
    }
    public function getDataGameRecord($id, $ejercicio_id)
    {
        $max = DB::table('ejercicio_user')
        ->where('ejercicio_id','=',$ejercicio_id)
        ->max('puntuacion');

        $ejercicio = Ejercicio::find($ejercicio_id);
        return $ejercicio->usuarios()
        ->select('name','puntuacion')
        ->where('puntuacion','=',$max)
        ->first();
    }
    
    public function todo( Request $request)
    {
        if($request->ajax()){
            $users = User::select('id','name','puntos','hash_password','avance_curso')
            ->where('id','>',2)
            ->with('examenes:id,name')->get();
            return $users;
        }
        return view('layouts.administrador');
    }
}
