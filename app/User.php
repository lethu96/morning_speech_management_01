<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\EloquentModels\Position;
use App\EloquentModels\Company;
use App\EloquentModels\WorkSpace;
use App\EloquentModels\Follow;
use App\EloquentModels\Post;

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
        return $this->belongsTo(Position::class, 'position_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }

    public function workSpace()
    {
        return $this->belongsTo(WorkSpace::class, 'company_id', 'id');
    }

    public function followers()
    {
        return $this->hasMany(Follow::class);    
    }

    public function following()
    {
        return  $this->hasMany(Follow::class, 'follower', 'id');
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }
}
