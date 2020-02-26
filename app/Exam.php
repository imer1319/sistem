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
	public function usuarios()
	{
		return $this->belongsToMany(User::class);
	}
}
