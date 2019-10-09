<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('perfil','AdminController@index');
Route::resource('examenes','ExamController')->except(['create','edit']);
Route::resource('insignia','InsigniaController')->except(['show','create','edit']);
Route::resource('categoria','CategoriaController')->except(['show','create','edit']);
Route::resource('respuesta','RespuestaController')->except(['show','edit']);
Route::resource('ejercicio','EjercicioController');