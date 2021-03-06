<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Exam;
use Faker\Generator as Faker;

$factory->define(Exam::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(4),
        'content' => $faker->sentence(400)
    ];
});
