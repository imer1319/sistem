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
Route::get('pregunta/{id}','PreguntaController@index');
Route::resource('examen','ExamController')->except(['index','create','edit']);
Route::resource('rango','RangoController')->except(['index','create','edit','show']);
Route::resource('insignia','InsigniaController')->except(['index','show','create','edit']);
Route::resource('respuesta','RespuestaController')->except(['show','edit']);
Route::resource('pregunta','PreguntaController')->except(['show','edit','index']);
Route::resource('ejercicio','EjercicioController')->except(['index']);
Route::resource('usuario','UsuarioController')->except(['index']);
Route::get('numero_usuarios','AdminController@count_users');
Route::get('numero_examenes','AdminController@count_examen');
Route::get('numero_ejercicios','AdminController@count_ejercicio');
// rutas para el usuario
Route::get('/exam','UserController@examen');
Route::get('/exam/{id}','UserController@darExamen');
Route::get('/examendado/{id}','UserController@examendado');
Route::get('/puntuacionExamen','UserController@puntuacionExamen');
Route::post('exam','UserController@saveExam');
Route::get('rank','UserController@rango');
Route::get('insig','UserController@insignia');
Route::get('profile','UserController@perfil');
Route::get('ranking','UserController@rankingMundial');
Route::put('profile/{id}','UserController@updatePerfil');
Route::get('maxGame/{id}','UserController@maxGame');
Route::get('miID','UserController@miIdAuth');
// games rutas
Route::get('game','UserController@game');
Route::get('ejercicios','UserController@game');
Route::get('puntuacion/{id}','UserController@rankingGame');
Route::post('game','UserController@saveGame');
Route::get('schult','UserController@game');
Route::get('buscar-palabra','UserController@game');
Route::get('buscar-numero','UserController@game');
Route::get('par-impar','UserController@game');
Route::get('borde-palabra','UserController@game');
Route::get('palabra-piramide','UserController@game');
Route::get('campo-visual','UserController@game');
Route::get('schult-letra','UserController@game');
Route::get('encuentra-palabra','UserController@game');
Route::get('encuentra-numeros','UserController@game');
Route::get('iguales','UserController@game');

//ruta ejercicios
Route::get('parpadeo','UserController@game');
Route::get('vertical','UserController@game');
Route::get('horizontal','UserController@game');
Route::get('aleatorio','UserController@game');

