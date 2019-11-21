<?php

namespace App\Http\Controllers;

use App\Exam;
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
            return Exam::all();
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
}
