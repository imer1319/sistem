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


// Rutas administracion
Route::name('admin.')->group(function () {
    Route::get('dashboard','Admin\DashboardController@dashboard')->name('dashboard');
	Route::resource('examens','Admin\ExamenController')->except('destroy');
	Route::resource('rangos','Admin\RangoController')->except('destroy','show');
	Route::resource('ejercicios','Admin\EjercicioController')->except('destroy','show');
	Route::resource('usuarios','Admin\UsuarioController')->except('destroy','edit');
});

Route::get('usuario/user/{id}','UsuarioController@getDataExamUser');
Route::get('usuario/games/{id}/{ejercicio_id}','UsuarioController@getDataGameMax');
Route::get('usuario/game/{id}/{ejercicio_id}','UsuarioController@getDataGameRecord');
Route::get('pregunta/{id}','PreguntaController@index');
Route::resource('pregunta','PreguntaController')->except(['show','edit','index']);

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

// Route SPA
Route::get('/{any?}', 'HomeController@spa')->where('any', '.*')->name('home');