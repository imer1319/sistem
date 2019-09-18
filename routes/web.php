<?php


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('perfil','AdminController@index');
Route::resource('examen','ExamController',['except'=>'show','create','edit']);