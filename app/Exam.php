<?php

namespace App;
use App\User;
use App\Pregunta;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
	protected $fillable = ['name','content','icon'];

	public function pregunta()
	{
		return $this->hasMany(Pregunta::class);
	}
	public function users()
	{
		 return $this->belongsToMany('App\User','exam_user')
		->withPivot('ppm','tiempo','comprension','estado','created_at');
	}
}
