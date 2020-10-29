<?php

Route::get('/', function () {
	return view('welcome');
});
Route::view('/lecciones', 'home');
Route::view('/curso', 'home');
Route::view('/schulte-curso', 'home');
Route::view('/shultele-curso', 'home');
Route::view('/search-course-numbers', 'home');
Route::view('/search-words-course', 'home');
Route::view('/remember-numbers', 'home');
Route::view('/remember-words', 'home');
Route::view('/odd-even', 'home');
Route::view('/visual-field', 'home');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::get('perfil','AdminController@index')->name('admin');
Route::get('examen','ExamController@index')->name('examen');
Route::get('ejercicio','EjercicioController@index')->name('ejercicio');
Route::get('rango','RangoController@index')->name('rango');
Route::get('usuario','UsuarioController@index')->name('usuario');
Route::get('pregunta/{id}','PreguntaController@index');
Route::resource('examen','ExamController')->except(['index','create','edit']);
Route::resource('rango','RangoController')->except(['index','create','edit','show','destroy']);
Route::resource('pregunta','PreguntaController')->except(['show','edit','index']);
Route::resource('ejercicio','EjercicioController')->except(['index','destroy']);
Route::resource('usuario','UsuarioController')->except(['index']);
Route::get('numero_usuarios','AdminController@count_users');
Route::get('numero_examenes','AdminController@count_examen');
Route::get('numero_ejercicios','AdminController@count_ejercicio');
Route::get('mayor_velocidad','AdminController@mayor_velocidad');
Route::get('mayor_puntuacion','AdminController@mayor_puntuacion');
// rutas para el usuario
Route::get('/dadosExams','UserController@getExamsDoesntHave');
Route::get('/examDado','UserController@firstExam');
Route::get('/exam','UserController@examen');
Route::get('examen_dado','UserController@examenes_dados');
Route::get('/exam/{id}','UserController@darExamen');
Route::get('/examendado/{id}','UserController@examendado');
Route::get('/puntuacionExamen','UserController@puntuacionExamen');
Route::post('exam','UserController@saveExam');
Route::get('rank','UserController@rango');
Route::get('profile','UserController@perfil');
Route::get('ranking','UserController@rankingMundial');
Route::put('profile/{id}','UserController@updatePerfil');
Route::get('maxGame/{id}','UserController@maxGame');
Route::get('miID','UserController@miIdAuth');
Route::get('inicializando','UserController@iniciales');

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


