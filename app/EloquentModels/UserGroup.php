<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    protected $fillable = [
        'user_id',
        'group_id',
    ];
    protected $table = 'group_user';
}
