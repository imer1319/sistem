<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
	protected $fillable = ['enunciado','respuesta_id','examen_id'];

	public function respuesta(){
    	return $this->hasOne('App\Respuesta');
    }
	public function examen(){
		return $this->belongTo('App\Exam');
	}
}
