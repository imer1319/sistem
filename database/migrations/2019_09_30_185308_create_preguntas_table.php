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
            $table->string('respuestaA');
            $table->string('respuestaB');
            $table->string('respuestaC');
            $table->string('respuestaD');
            $table->string('esCorrecto');
            $table->unsignedBigInteger('exam_id');
            $table->timestamps();
            $table->foreign('exam_id')->references('id')
                    ->on('exams')->onDelete('cascade');
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
