<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('perfil','AdminController@index')->name('admin');
Route::get('examen','ExamController@index')->name('examen');
Route::resource('examen','ExamController')->except(['index','create','edit']);
Route::resource('insignia','InsigniaController')->except(['show','create','edit']);
Route::resource('categoria','CategoriaController')->except(['show','create','edit']);
Route::resource('respuesta','RespuestaController')->except(['show','edit']);
Route::resource('pregunta','PreguntaController')->except(['show','edit']);
Route::resource('ejercicio','EjercicioController');

// rutas para el usuario
Route::get('/exam','UserController@examen');
Route::get('/exam/{id}','UserController@darExamen');
Route::post('exam','UserController@saveExam');
Route::post('game','UserController@saveGame');
Route::get('user','UserController@user');
