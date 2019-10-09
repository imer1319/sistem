<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Respuesta extends Model
{
	protected $fillable = ['examen_id','respuesta'];

	public function respuesta(){
    	return $this->belongTo('App\Pregunta');
    }
    public function examen(){
		return $this->belongTo('App\Exam');
	}
}
