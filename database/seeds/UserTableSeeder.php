<?php
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
        $role_user = Role::where('name', 'user')->first();
        $role_admin = Role::where('name', 'admin')->first();
        
        $user = new User();
        $user->name = 'User';
        $user->password = bcrypt('secret');
        $user->save();
        $user->roles()->attach($role_user);

        $user = new User();
        $user->name = 'Admin';
        $user->password = bcrypt('secret');
        $user->save();
        $user->roles()->attach($role_admin);

        for ($i=1; $i < 9; $i++) {
            $user = new App\Ejercicio();
            $user->name = "Ejercicio #".$i;
            $user->save();
        }
        for ($i=1; $i < 21; $i++) { 
            $user = new User();
            $user->name = 'User'.$i;
            $user->password = bcrypt('secret');
            $user->hash_password = 'secret';
            $user->puntos = rand(80,400);
            $user->avance_curso = rand(3,15);
            $user->save();
            $user->roles()->attach($role_user);
        }

    }
}
