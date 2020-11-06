<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\SaveExam;
use Faker\Generator as Faker;

$factory->define(SaveExam::class, function (Faker $faker) {
    return [
        'user_id' => rand(3,22),
        'exam_id'=> rand(1,15),
        'ppm' => rand(200,500),
        'comprension'=> rand(5,10)*10,
        'tiempo' => rand(50,120),
        'estado' => 1
    ];
});
