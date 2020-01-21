<?php

namespace App\Http\Controllers;
use App\Exam;
use App\Save;
use App\User;
use App\Rango;
use App\SaveGame;
use App\Insignia;
use App\Ejercicio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function rango(Request $request)
    {
        if($request->ajax()){
            $rango =  Rango::get();
            return $rango;
        }
        return view('home');
    }
    public function insignia(Request $request)
    {
        if($request->ajax()){
            $insignia =  Insignia::get();
            return $insignia;
        }
        return view('home');
    }
    public function examen(Request $request)
    {
        if($request->ajax()){
            $exam =  Exam::get();
            return $exam;
        }
        return view('home');
    }
    public function darExamen(Request $request , $id)
    {
        if($request->ajax()){
            return Exam::find($id);
        }
        return view('home');
    }
    public function saveExam(Request $request)
    {
        $saveExam = new Save();
        $saveExam->exam_id = $request->exam_id;
        $saveExam->user_id = $request->user_id;
        $saveExam->ppm = $request->ppm;
        $saveExam->comprension = $request->comprension;
        $saveExam->tiempo = $request->tiempo;
        $saveExam->estado = $request->estado;
        $saveExam->save();
        return response()->json([
            "message" => "Creado correctamente",
            "saveExam" => $saveExam
        ],200);
        return $saveExam;
    }
    public function perfil(Request $request)
    {
        if($request->ajax()){
            $user = auth()->user();
            return $user;
        }
        return view('home');
    }
    public function updatePerfil(Request $request, $id)
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
    // game ejercicios
    public function game(Request $request)
    {
        return view('home');
    }
    public function saveGame(Request $request)
    {
        $savGame = new SaveGame();
        $savGame->ejercicio_id = $request->ejercicio_id;
        $savGame->user_id = $request->user_id;
        $savGame->puntuacion = $request->puntuacion;
        $savGame->save();
        return response()->json([
            "message" => "Creado correctamente",
            "savGame" => $savGame
        ],200);
        return $savGame;
    }
    public function rankingGame(Request $request, $id)
    {
        if($request->ajax()){
            $suma = DB::table('ejercicio_user')
            ->orderBy('puntuacion', 'desc')
            ->limit(3)
            ->get();
            return $suma;
        }
        return view('home');
    }
    public function rankingMundial(Request $request)
    {
        if($request->ajax()){
            $pool = User::select('name','puntos','avatar','curso')
            ->orderBy('puntos','desc')
            ->limit(5)
            ->get();
            return $pool;
        }
        return view('home');
    }

}
