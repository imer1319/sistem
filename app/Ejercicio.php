<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Categoria;
class Ejercicio extends Model
{
	protected $fillable = ['name','description','icon','categoria_id'];
	
    public function categoria()
    {
    	return $this->belongsTo(Categoria::class,'categoria_id');
    }
}
