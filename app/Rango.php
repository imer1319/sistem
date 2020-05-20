<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Rango extends Model
{
	protected $fillable = ['nombre','avatar'];


	public function users()
	{
		return $this->hasMany(User::class);
	}
}
