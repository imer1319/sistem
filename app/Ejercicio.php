<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Categoria;
class Ejercicio extends Model
{
	protected $fillable = ['name','description','icon'];
    public function categoria()
    {
    	return $this->belongsTo(Categoria::class);
    }
}
