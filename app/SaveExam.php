<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SaveExam extends Model
{
    protected $table = 'exam_user';
    protected $fillable = ['user_id', 'exam_id','ppm','comprension','tiempo','estado'];

}
