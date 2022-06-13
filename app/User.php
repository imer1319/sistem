<?php

namespace App;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    public function rango()
    {
        return $this->belongsTo(Rango::class);
    }

    public function examenes()
    {
        return $this->belongsToMany(Exam::class,'exam_user')->withPivot('ppm','tiempo','comprension','estado','created_at');
    }

    public function ejercicios()
    {
        return $this->belongsToMany(Ejercicio::class)->withPivot('puntuacion');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
    protected $fillable = [
        'name','apellido_paterno','apellido_materno','avatar','puntos','rango_id','avance_curso','ppm_inicial','comprension_inicial'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

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
