<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request)
    {
        auth()->user()->fill($request->all());

        if ($file = $request->hasFile('avatar'))
        {
            $file = $request->file('avatar');
            $url = time().$file->getClientOriginalName();
            $file->move(public_path().'/imagenes/usuario',$url);
            $file_path = public_path().'/imagenes/usuario/'.auth()->user()->avatar;
            if($file_path !=public_path().'/imagenes/usuario/default.png'){unlink($file_path);}
            auth()->user()->avatar = $url;
        }
        auth()->user()->save();
        return response()->json([
            "message" => "Actualizado correctamente",
            "usuario" => auth()->user()
        ],200);
    }
}
