<?php

namespace App;
use App\Role;
use App\Insignia;
use App\Ejercicio;
use App\Exam;
use App\Rango;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    public function rangos()
    {
        return $this->belongsTo(App\Rango)
        ->withTimestamps();
    }
    public function examenes()
    {
       return $this->belongsToMany(Exam::class,'exam_user')
       ->withPivot('ppm','tiempo','comprension','hash_password','estado','created_at');
   }

   public function ejercicios()
   {
    return $this->belongsToMany(Ejercicio::class)
    ->withPivot('puntuacion')->withTimestamps();
}

public function roles()
{
    return $this->belongsToMany(Role::class)
    ->withTimestamps();
}
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','apellido_paterno','apellido_materno','avatar','puntos','rango_id','avance_curso','ppm_inicial','comprension_inicial'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    /**
     * Codigo roles y usuarios
     *
     */
    public function authorizeRoles($roles)
    {
        if ($this->hasAnyRole($roles)) {
            return true;
        }
        abort(401, 'Esta acción no está autorizada.');
    }
    public function hasAnyRole($roles)
    {
        if (is_array($roles)) {
            foreach ($roles as $role) {
                if ($this->hasRole($role)) {
                    return true;
                }
            }
        } else {
            if ($this->hasRole($roles)) {
                return true;
            }
        }
        return false;
    }
    public function hasRole($role)
    {
        if ($this->roles()->where('name', $role)->first()) {
            return true;
        }
        return false;
    }

}
