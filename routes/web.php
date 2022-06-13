<?php

Route::get('/', function () {
	return view('welcome');
});


Auth::routes(['register' => false]);
// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('createUser', 'UsuarioController@register');

// Route SPA

Route::get('perfil','AdminController@index')->name('admin');
Route::get('usuario/user/{id}','UsuarioController@getDataExamUser');
Route::get('usuario/games/{id}/{ejercicio_id}','UsuarioController@getDataGameMax');
Route::get('usuario/game/{id}/{ejercicio_id}','UsuarioController@getDataGameRecord');
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

// ========= examen ========//
Route::get('obtenerExamen','UserController@obtenerExamen');
// rutas para el usuario
Route::get('dadosExams','UserController@getIdExamsDoesntHave');
Route::get('examDado','UserController@firstExam');
Route::get('exam','UserController@examen');
Route::get('examen_dado','UserController@examenes_dados');
Route::get('exam/{id}','UserController@darExamen');
Route::get('examendado/{id}','UserController@examendado');
Route::get('puntuacionExamen','UserController@puntuacionExamen');
Route::post('exam','UserController@saveExam');
Route::get('rank','UserController@rango');
Route::get('ranking','UserController@rankingMundial');

Route::put('updateUser','UserController@updateUser');
Route::get('maxGame/{id}','UserController@maxGame');
Route::get('inicializando','UserController@iniciales');

// games rutas
Route::get('puntuacion/{id}','UserController@rankingGame');
Route::post('game','UserController@saveGame');

// Ruta de exportaciones de excel
Route::get('user-list-excel','ExportablesController@exportExcel');
Route::get('user-list-pdf','ExportablesController@exportPdf');
Route::get('todo','UsuarioController@todo');

Route::get('/{any?}', 'HomeController@spa')->where('any', '.*');