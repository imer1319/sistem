<?php

namespace App;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Insignia extends Model
{
	protected $fillable = ['name', 'description', 'icon'];
    public function users()
    {
        return $this->belongsToMany(User::class)
        ->withTimestamps();
    }
}
