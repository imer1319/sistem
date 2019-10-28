<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePreguntasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preguntas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('enunciado');
            $table->unsignedBigInteger('examen_id');
            $table->unsignedBigInteger('respuesta_id');
            $table->timestamps();
            $table->foreign('examen_id')->references('id')
                    ->on('exams')->onDelete('cascade');
            $table->foreign('respuesta_id')->references('id')
                    ->on('respuestas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preguntas');
    }
}
