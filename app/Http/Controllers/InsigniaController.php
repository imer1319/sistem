<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Insignia;
use Illuminate\Support\Facades\File;
class InsigniaController extends Controller
{
	public function index(Request $request)
	{   
		if($request->ajax()){
			return Insignia::all();
		}
		return view('admin.insignia.index');
	}
	public function store(Request $request)
	{
		if ($request->hasFile('icon')) {
			$file = $request->file('icon');
			$url = time().$file->getClientOriginalName();
			$file->move(public_path().'/imagenes',$url);
		}
		$insignia = new Insignia();
		$insignia->name = $request->name;
		$insignia->description = $request->description;
		$insignia->icon = $url;
		$insignia->save();
		return $insignia;
	}
	public function update(Request $request, $id)
	{
		$insignia = Insignia::find($id);
		$insignia->fill($request->except('icon'));
		if ($request->hasFile('icon')) {
			$file = $request->file('icon');
			$url = time().$file->getClientOriginalName();
			$insignia->icon = $url;
			$file->move(public_path().'/imagenes',$url);
		}
		$insignia->save();
		return $insignia;
	}
	public function destroy($id)
	{
		$insignia = Insignia::find($id);
		$file_path = public_path().'/imagenes/'.$insignia->icon;
		if(is_file($file_path)){unlink($file_path);}
		$insignia->delete();
	}
}