<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->string('password');
            $table->string('hash_password')->nullable();
            $table->string('apellido_paterno')->nullable();
            $table->string('apellido_materno')->nullable();
            $table->string('avatar')->default('default.png');
            $table->unsignedBigInteger('puntos')->default(10);
            $table->unsignedBigInteger('rango_id')->nullable();
            $table->unsignedBigInteger('avance_curso')->default(1);
            $table->foreign('rango_id')->references('id')->on('rangos');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
