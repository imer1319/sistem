<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
	protected $fillable = ['name','content','icon'];

	public function pregunta()
	{
		return $this->hasMany('App\Pregunta');
	}
	public function respuesta()
	{
		return $this->hasMany('App\Respuesta');
	}
}
