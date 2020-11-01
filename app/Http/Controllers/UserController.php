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
            $consulta = SaveExam::orderBy('created_at','asc')
                ->where('user_id',auth()->user()->id)
                ->first();
            return $consulta;
        }
        return view('home');
    }
    public function examen(Request $request)
    {
        if($request->ajax()){
            $user = auth()->user()->id;
            $consulta = Exam::whereDoesntHave('users', function($q)
                use($user){
                    $q->where('user_id',$user);
                })
            ->get();
            return $consulta;
        }
        return view('home');
    }

    public function examenes_dados(Request $request)
    {
        if($request->ajax()){
            $user = auth()->user()->id;
            $examen = DB::table('exams')
            ->join('exam_user','exams.id','=','exam_user.exam_id')
            ->select('exams.icon','exam_user.estado','exams.name','exam_user.user_id','exam_user.exam_id','exams.id')
            ->where('exam_user.user_id','=',$user)
            ->get();
            return $examen;
        }
        return view('home');
    }
    public function puntuacionExamen(Request $request)
    {
        if($request->ajax())
        {
         $user = auth()->user()->id;
         $usuario = User::find($user);
         return $usuario->exams;
     }
     return view('home');
 }
 public function getExamsDoesntHave(Request $request)
 {
    if($request->ajax())
    {
        $user = auth()->user()->id;
        $consulta = Exam::whereDoesntHave('users', function($q)
            use($user){
                $q->where('user_id',$user);
            })->select('id')->inRandomOrder()->first();
        return $consulta;
    }
    return view('home');
 }
 public function examendado(Request $request, $id)
 {
    if($request->ajax())
    {
        $user = auth()->user()->id;
        $usuario = SaveExam::where('exam_id','=',$id)
        ->where('user_id','=',$user)
        ->limit(1)
        ->first();
        return $usuario;
    }
    return view('home');
}
public function darExamen(Request $request , $id)
{
    if($request->ajax())
    {
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
    if($request->ajax())
    {
        $user = auth()->user();
        return $user;
    }
    return view('home');
}
public function updatePerfil(UsuarioUpdateRequest $request, $id)
{
    $usuario = User::find($id);
    $usuario->fill($request->except('avatar'));
    if ($file = $request->hasFile('avatar'))
    {
        $file = $request->file('avatar');
        $url = time().$file->getClientOriginalName();
        $file->move(public_path().'/imagenes/usuario',$url);
        $file_path = public_path().'/imagenes/usuario/'.$usuario->avatar;
        if($file_path !=public_path().'/imagenes/usuario/default.png'){unlink($file_path);}
        $usuario->avatar = $url;
    }
    $usuario->save();
    return response()
    ->json([
        "message" => "Actualizado correctamente",
        "usuario" => $usuario
    ],200);
    return $usuario;
}
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
    return response()
    ->json([
        "message" => "Creado correctamente",
        "savGame" => $savGame
    ],200);
    return $savGame;
}
public function rankingGame(Request $request, $id)
{
    if($request->ajax())
    {
        $user = auth()->user()->id;
        $usuario = DB::table('ejercicio_user')
        ->where('user_id','=',$user)
        ->where('ejercicio_id','=',$id)
        ->orderBy('puntuacion', 'desc')
        ->limit(3)
        ->get();
        return $usuario;
    }
    return view('home');
}
public function maxGame(Request $request, $id)
{
    if($request->ajax())
    {
        $max = DB::table('ejercicio_user')
        ->where('ejercicio_id','=',$id)
        ->max('puntuacion');
        $ejercicio = Ejercicio::find($id);
        return $ejercicio
        ->usuarios()
        ->where('puntuacion','=',$max)
        ->get();
    }
    return view('home');
}
public function rankingMundial(Request $request)
{
    if($request->ajax())
    {
       $rol = Role::find(2);
       
       return $rol->users()
       ->select('name','puntos','avatar','id')
       ->orderBy('puntos', 'desc')
       ->get();
   }
   return view('home');
}
public function miIdAuth(Request $request)
{
    if($request->ajax())
    {
        $user = auth()->user()->id;
        return $user;
    }
    return view('home');
}

public function iniciales(Request $request)
{
    if($request->ajax())
    {
        $user = auth()->user()->exams()->first();
        return $user;
    }
    return view('home');
}
}
