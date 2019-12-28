<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $fillable = ['nombre','puntos','icono'];

    public function ejercicio()
    {
    	return $this->hasMany('App\Ejercicio');
    }
}
