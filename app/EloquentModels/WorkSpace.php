<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\User;

class WorkSpace extends Model
{
    protected $fillable = [
        'name',
        'address',
    ];

    public function users()
    {
        return $this->hasMany(User::Class);
    }
}
