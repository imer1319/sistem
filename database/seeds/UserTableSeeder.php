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
        $role_user = Role::where('name','user')->first();
        $role_admin = Role::where('name','admin')->first();

        $user = new User();
        $user->name = "User";
        $user->email = "user@user.com";
        $user->password = bcrypt('user1234');
        $user->save();
        $user->roles()->attach($role_user);

        $admin = new User();
        $admin->name = "Admin";
        $admin->email = "admin@admin.com";
        $admin->password = bcrypt('admin1234');
        $admin->save();
        $admin->roles()->attach($role_admin);
    }
}
