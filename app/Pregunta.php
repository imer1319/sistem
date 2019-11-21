<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
	protected $fillable = ['enunciado','respuestaA','respuestaB','respuestaC','respuestaD','esCorrecto','examen_id'];

	public function examen(){
		return $this->belongTo('App\Exam');
	}
}
