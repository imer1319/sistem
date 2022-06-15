<?php

namespace App\Http\Controllers\Admin;

use App\Ejercicio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Ejercicio\CreateRequest;
use App\Http\Requests\Ejercicio\UpdateRequest;

class EjercicioController extends Controller
{
    public function index()
    {
        return view('admin.ejercicios.index',[
            'ejercicios' => Ejercicio::paginate(6)
        ]);
    }

    public function create()
    {
        return view('admin.ejercicios.create',[
            'ejercicio' => new Ejercicio()
        ]);
    }

    public function store(CreateRequest $request)
    {
        Ejercicio::create($request->validated());

        return redirect()->route('admin.ejercicios.index');
    }

    public function edit(Ejercicio $ejercicio)
    {
        return view('admin.ejercicios.edit', compact('ejercicio'));
    }

    public function update(UpdateRequest $request, Ejercicio $ejercicio)
    {
        $ejercicio->update($request->validated());
        
        return redirect()->route('admin.ejercicios.index');
    }
}
