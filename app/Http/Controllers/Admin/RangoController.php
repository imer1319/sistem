<?php

namespace App\Http\Controllers\Admin;

use App\Rango;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Rango\CreateRequest;
use App\Http\Requests\Rango\UpdateRequest;

class RangoController extends Controller
{
    public function index()
    {
        return view('admin.rangos.index',[
            'rangos' => Rango::paginate(7)
        ]);
    }

    public function create()
    {
        return view('admin.rangos.create',[
            'rango' => new Rango()
        ]);
    }

    public function store(CreateRequest $request)
    {
        $file = $request->file('avatar');
        $ruta = time().$file->getClientOriginalName();
        $file->move(public_path().'/imagenes/rangos',$ruta);

        Rango::create([
            'nombre' => $request->nombre,
            'avatar' => $ruta,
        ]);

        return redirect()->route('admin.rangos.index');
    }

    public function edit(Rango $rango)
    {
        return view('admin.rangos.edit', compact('rango'));
    }

    public function update(UpdateRequest $request, Rango $rango)
    {
        $rango->fill($request->except('avatar'));
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $ruta = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/rangos',$ruta);

            $file_path = public_path().'/imagenes/rangos/'.$rango->avatar;
            if(is_file($file_path)){
                unlink($file_path);
            }
            $rango->avatar = $ruta;
        }
        $rango->save();
        return redirect()->route('admin.rangos.index');
    }
}
