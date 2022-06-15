<?php

namespace App\Http\Controllers\Admin;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Usuario\CreateRequest;
use App\Http\Requests\Usuario\UpdateRequest;

class UsuarioController extends Controller
{

    public function index()
    {
        $roles = Role::find(2);
        return view('admin.usuarios.index', [
            'usuarios' => $roles->users()->paginate(16)
        ]);
    }

    public function show(User $usuario)
    {
        $usuario->load('rango','examenes');
        return view('admin.usuarios.show', compact('usuario'));
    }

    public function update(UpdateRequest $request, User $usuario)
    {
        $usuario->fill($request->except('avatar'));
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $ruta = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/usuario',$ruta);

            $file_path = public_path().'/imagenes/usuario/'.$usuario->avatar;
            if(is_file($file_path)){
                unlink($file_path);
            }
            $usuario->avatar = $ruta;
        }
        $usuario->save();
        return redirect()->route('admin.usuarios.show', $usuario);
    }
}
