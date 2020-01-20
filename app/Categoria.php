<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $fillable = ['nombre','icono'];

    public function ejercicio()
    {
    	return $this->hasMany('App\Ejercicio');
    }
}
