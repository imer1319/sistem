<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('perfil','AdminController@index')->name('admin');
Route::get('examen','ExamController@index')->name('examen');
Route::get('ejercicio','EjercicioController@index')->name('ejercicio');
Route::get('insignia','InsigniaController@index')->name('insignia');
Route::get('usuario','UsuarioController@index')->name('usuario');
Route::get('pregunta/{id}','PreguntaController@index');
Route::resource('examen','ExamController')->except(['index','create','edit']);
Route::resource('insignia','InsigniaController')->except(['index','show','create','edit']);
Route::resource('respuesta','RespuestaController')->except(['show','edit']);
Route::resource('pregunta','PreguntaController')->except(['show','edit','index']);
Route::resource('ejercicio','EjercicioController')->except(['index']);
Route::resource('usuario','UsuarioController')->except(['index']);

// rutas para el usuario
Route::get('/exam','UserController@examen');
Route::get('/exam/{id}','UserController@darExamen');
Route::post('exam','UserController@saveExam');
Route::get('user','UserController@user');
// games rutas
Route::get('game','UserController@game');
Route::post('game','UserController@saveGame');
Route::get('schult','UserController@game');
