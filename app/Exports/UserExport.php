<?php
namespace App\Exports;


use App\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class UserExport implements FromView
{
    public function view(): View
    {
        return view('exports.users', [
            'users' => User::select('id','name','puntos','hash_password','avance_curso')
            ->where('id','>',2)
            ->with('examenes:id,name')->get()
        ]);
    }

}
