<?php

namespace App;
use App\Ejercicio;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
	protected $fillable = ['name','icon'];
    public function ejercicio()
    {
    	return $this->hasMany(Ejercicio::class);
    }
}
