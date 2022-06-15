<?php

use App\Rango;
use App\User;
use App\Role;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rango::create([
            'nombre' => 'Bronce',
            'avatar' => '/imagenes/rangos/1-bronce.png',
        ]);

        $role_user = Role::where('name', 'user')->first();
        $role_admin = Role::where('name', 'admin')->first();

        $user = new User();
        $user->name = 'User';
        $user->password = '123123';
        $user->rango_id = 1;
        $user->save();
        $user->roles()->attach($role_user);

        $user = new User();
        $user->name = 'Admin';
        $user->password = '123123';
        $user->rango_id = 1;
        $user->save();
        $user->roles()->attach($role_admin);

        for ($i = 1; $i < 9; $i++) {
            $ejercicio = new App\Ejercicio();
            $ejercicio->name = "Ejercicio #" . $i;
            $ejercicio->save();
        }
        
        for ($i = 1; $i < 21; $i++) {
            $user = new User();
            $user->name = 'User' . $i;
            $user->password = '123123';
            $user->rango_id = 1;
            $user->puntos = rand(80, 400);
            $user->avance_curso = rand(3, 15);
            $user->save();
            $user->roles()->attach($role_user);
        }
    }
}
