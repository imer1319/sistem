<?php
use App\Role;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
    		'name' 			=>'user',
    		'description'	=>'usuario normal del sistema'
    	]);
    	Role::create([
    		'name' 			=>'admin',
    		'description'	=>'administrador del sistema'
    	]);
    }
}
