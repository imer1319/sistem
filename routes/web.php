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
Route::get('rango','RangoController@index')->name('rango');
Route::get('usuario','UsuarioController@index')->name('usuario');
Route::get('categoria','CategoriaController@index')->name('categoria');
Route::get('pregunta/{id}','PreguntaController@index');
Route::resource('examen','ExamController')->except(['index','create','edit']);
Route::resource('rango','RangoController')->except(['index','create','edit','show']);
Route::resource('insignia','InsigniaController')->except(['index','show','create','edit']);
Route::resource('respuesta','RespuestaController')->except(['show','edit']);
Route::resource('pregunta','PreguntaController')->except(['show','edit','index']);
Route::resource('ejercicio','EjercicioController')->except(['index']);
Route::resource('usuario','UsuarioController')->except(['index']);
Route::resource('categoria','CategoriaController')->except(['index']);

// rutas para el usuario
Route::get('/exam','UserController@examen');
Route::get('/exam/{id}','UserController@darExamen');
Route::post('exam','UserController@saveExam');
Route::get('rank','UserController@rango');
Route::get('insig','UserController@insignia');
Route::get('profile','UserController@perfil');
Route::put('profile/{id}','UserController@updatePerfil');
// games rutas
Route::get('game','UserController@game');
Route::post('game','UserController@saveGame');
Route::get('schult','UserController@game');
