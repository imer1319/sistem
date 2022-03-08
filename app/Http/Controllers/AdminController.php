<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Role;
use App\User;
use App\Exam;
use App\SaveExam;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin');
    }

    public function index()
    {
        return view('layouts.administrador');
    }
    public function count_users()
    {
        $roles = Role::find(2);
        return $roles->users()->count();
    }
    public function count_examen()
    {
        $exams = DB::table('exams')->count();
        return $exams;
    }
    public function count_ejercicio()
    {
        $ejercicio = DB::table('ejercicios')->count();
        return $ejercicio;
    }
    public function mayor_velocidad()
    {
        $user = DB::table('exam_user')->orderBy('ppm', 'desc')
            ->first();
        $usuario = Exam::find($user->exam_id);
        return $usuario->users()
            ->orderBy('ppm', 'desc')
            ->select('name', 'puntos', 'avatar')
            ->first();
    }
    public function mayor_puntuacion()
    {
        $user = DB::table('exam_user')->orderBy('ppm', 'desc')
            ->first();
        $usuario = Exam::find($user->exam_id);
        return $usuario->users()
            ->orderBy('puntos', 'desc')
            ->select('name', 'puntos', 'avatar')
            ->first();
    }
}
