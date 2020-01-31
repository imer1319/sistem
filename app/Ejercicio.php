<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Categoria;
use App\User;
class Ejercicio extends Model
{
	protected $fillable = ['name','description','icon','categoria_id'];
	
	public function categoria()
	{
		return $this->belongsTo(Categoria::class,'categoria_id');
	}

	public function usuarios()
	{
		return $this->belongsToMany(User::class)->withPivot('puntuacion');
	}
}
