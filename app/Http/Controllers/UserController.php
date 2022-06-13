<?php

namespace App\Http\Controllers;
use App\Exam;
use App\Save;
use App\User;
use App\Rango;
use App\SaveGame;
use App\Insignia;
use App\Ejercicio;
use App\Role;
use App\SaveExam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\UsuarioUpdateRequest;

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

    public function firstExam(Request $request)
    {
        if($request->ajax()){
            return SaveExam::orderBy('created_at','asc')
            ->where('user_id',auth()->user()->id)
            ->first();
        }
        return view('home');
    }

    public function examenes_dados(Request $request)
    {
        if($request->ajax()){
            return DB::table('exams')
            ->join('exam_user','exams.id','=','exam_user.exam_id')
            ->select('exams.icon','exam_user.estado','exams.name','exam_user.user_id','exam_user.exam_id','exams.id')
            ->where('exam_user.user_id','=',auth()->id())
            ->get();
        }
        return view('home');
    }

    public function puntuacionExamen(Request $request)
    {
        if($request->ajax())
        {
            return auth()->user()->examenes;
        }
        return view('home');
    }

    public function obtenerExamen(Request $request)
    {
        if($request->ajax())
        {
            return Exam::whereDoesntHave('users', function($q){
                $q->where('user_id',auth()->id());
            })
            ->with('preguntas')
            ->inRandomOrder()
            ->first();
        }
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

    public function updateUser(Request $request)
    {
        auth()->user()->fill($request->all());

        if ($file = $request->hasFile('avatar'))
        {
            $file = $request->file('avatar');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/usuario',$url);
            $file_path = public_path().'/imagenes/usuario/'.auth()->user()->avatar;
            if($file_path !=public_path().'/imagenes/usuario/default.png'){unlink($file_path);}
            auth()->user()->avatar = $url;
        }
        auth()->user()->save();
        return response()
        ->json([
            "message" => "Actualizado correctamente",
            "usuario" => auth()->user()
        ],200);
    }

    public function saveGame(Request $request)
    {
        $savGame = new SaveGame();
        $savGame->ejercicio_id = $request->ejercicio_id;
        $savGame->user_id = $request->user_id;
        $savGame->puntuacion = $request->puntuacion;
        $savGame->save();
        return response()
        ->json([
            "message" => "Creado correctamente",
            "savGame" => $savGame
        ],200);
    }

    public function rankingGame(Request $request, $id)
    {
        return DB::table('ejercicio_user')
        ->where('user_id','=',auth()->id())
        ->where('ejercicio_id','=',$id)
        ->orderBy('puntuacion', 'desc')
        ->limit(3)
        ->get();
    }

    public function maxGame(Request $request, $id)
    {
            $ejercicio = Ejercicio::find($id);

            return $ejercicio
            ->usuarios()
            ->orderBy('puntuacion')
            ->first();
    }

    public function rankingMundial(Request $request)
    {
        if($request->ajax())
        {
         return DB::table('users')
         ->join('role_user', 'role_user.user_id','=','users.id')
         ->join('rangos','rangos.id','=','users.rango_id')
         ->where('role_user.role_id',2)
         ->select('rangos.nombre','users.id','users.name','users.puntos','rangos.avatar','users.avatar as user_avatar')
         ->orderBy('users.puntos','DESC')
         ->get();
     }
     return view('home');
 }

 public function iniciales(Request $request)
 {
    if($request->ajax())
    {
        return auth()->user()->exams()->first();
    }
    return view('home');
}
}
