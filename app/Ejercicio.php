<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Categoria;
use App\User;
class Ejercicio extends Model
{
	protected $fillable = ['name'];
	
	public function usuarios()
	{
		return $this->belongsToMany(User::class)->withPivot('puntuacion');
	}
}
