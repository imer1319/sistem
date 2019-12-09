<?php

namespace App\Http\Controllers;
use App\Exam;
use App\Save;
use App\User;
use App\SaveGame;
use App\Ejercicio;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
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
    public function user(Request $request)
    {
        if($request->ajax()){
            $user = auth()->user(); 
            return $user;
        }
        return view('home');
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
}
