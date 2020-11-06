<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Exports\UserExport;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade as PDF;

class ExportablesController extends Controller
{
    public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('role:admin');
	}

	public function exportExcel()
	{
		return Excel::download(new UserExport, 'Reporte de Usuarios.xlsx');
	}

	public function exportPdf()
	{

		$users = User::select('id','name','puntos','hash_password','avance_curso')
    	->where('id','>',2)
    	->with('examenes:id,name')
    	->get();
			
	 	$pdf = PDF::loadView( 'exports.users', compact('users') );

	  	return $pdf->download('lista de usuarios.pdf');
	}
	
}
