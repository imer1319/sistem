<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	$this->call(RoleTableSeeder::class);
        $this->call(UserTableSeeder::class);

        factory(App\Exam::class, 15)->create();
        for ($j=1; $j < 16; $j++) { 
            for ($i=1; $i < 11; $i++) { 
                $pregunta = new App\Pregunta();
                $pregunta->enunciado = "Pregunta #".$i;
                $pregunta->respuestaA = "respuestaA #".$i;
                $pregunta->respuestaB = "respuestaB #".$i;
                $pregunta->respuestaC = "respuestaC #".$i;
                $pregunta->respuestaD = "respuestaD #".$i;
                $pregunta->esCorrecto = "respuestaA #".$i;
                $pregunta->exam_id = $j;
                $pregunta->save();
            }
        }
    }
}