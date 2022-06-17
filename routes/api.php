<?php

Route::get('preguntas/{examen}', 'Admin\PreguntaController@index');
Route::post('preguntas', 'Admin\PreguntaController@store');
Route::put('preguntas/{pregunta}', 'Admin\PreguntaController@update');