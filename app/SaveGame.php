<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SaveGame extends Model
{
    protected $table = 'ejercicio_user';
    protected $fillable = ['user_id', 'ejercicio_id','puntuacion'];
}
