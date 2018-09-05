<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\EloquentModels\Position;
use App\EloquentModels\Company;
use App\EloquentModels\WorkSpace;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'code_id',
        'name',
        'email',
        'password',
        'card_number',
        'gender',
        'birth_day',
        'company_id',
        'work_space_id',
        'position_id',
        'opening_date',
        'close_date',
        'phone_contact',
        'avatar',
        'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function position()
    {
        return $this->belongsTo('App\EloquentModels\Position', 'position_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo('App\EloquentModels\Company', 'company_id', 'id');
    }

    public function workSpace()
    {
        return $this->belongsTo('App\EloquentModels\WorkSpace', 'company_id', 'id');
    }
}
