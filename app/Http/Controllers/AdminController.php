<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Role;
use App\User;

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
	public function count_users( Request $request)
	{
		if($request->ajax()){
			$roles = Role::find(2);
			return $roles->users()->count();
		}
		return view('layouts.administrador');
	}
	public function count_examen( Request $request)
	{
		if($request->ajax()){
			$users = DB::table('exams')->count();
			return $users;
		}
		return view('layouts.administrador');
	}
	public function count_ejercicio(Request $request)
	{
		if($request->ajax()){
			$ejercicio = DB::table('ejercicios')->count();
			return $ejercicio;
		}
		return view('layouts.administrador');
	}
	public function mayor_velocidad(Request $request)
	{
		if($request->ajax()){
			$ejercicio = User::select('name','puntos','avatar','ppm_inicial','comprension_inicial')
			->orderBy('puntos', 'desc')->first();
			return $ejercicio;
		}
		return view('layouts.administrador');
	}
	public function mayor_puntuacion(Request $request)
	{
		if($request->ajax()){
			$ejercicio = User::select('name','puntos','avatar','ppm_inicial','comprension_inicial')
			->orderBy('ppm_inicial', 'desc')->first();
			return $ejercicio;
		}
		return view('layouts.administrador');
	}
}
