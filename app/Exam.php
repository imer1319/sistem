<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
	protected $fillable = ['name','content'];

	public function pregunta()
	{
		return $this->hasMany(Pregunta::class);
	}
	public function users()
	{
		 return $this->belongsToMany(User::class,'exam_user')
		->withPivot('ppm','tiempo','comprension','estado','created_at');
	}
}
