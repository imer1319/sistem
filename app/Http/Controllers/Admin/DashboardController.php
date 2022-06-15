<?php

namespace App\Http\Controllers\Admin;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $velocidad = DB::table('users')
        ->join('exam_user','users.id','=','exam_user.user_id')
        ->join('exams','exams.id','=','exam_user.exam_id')
        ->select('users.name','users.avatar','users.puntos','exam_user.ppm','exam_user.comprension')
        ->orderBy('exam_user.ppm','DESC')
        ->take(1)
        ->get();

        $roles = Role::find(2);
        return view('dashboard',[
            'count_users' => $roles->users()->count(),
            'count_exams' => DB::table('exams')->count(),
            'count_ejercicios' => DB::table('ejercicios')->count(),
            'mayor_puntuacion' => User::with('rango')->orderBy('puntos','DESC')->first(),
            'mayor_velocidad' => $velocidad
        ]);
    }
}
