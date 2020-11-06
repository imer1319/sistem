<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\SaveGame;
use Faker\Generator as Faker;

$factory->define(SaveGame::class, function (Faker $faker) {
    return [
        'user_id' => rand(3,22),
        'ejercicio_id'=> rand(1,8),
        'puntuacion' => rand(50,90),
    ];
});
