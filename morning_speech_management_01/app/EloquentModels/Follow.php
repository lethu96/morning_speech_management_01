<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Follow extends Model
{
    protected $fillable = [
        'user_id',
        'follower',
    ];

    public function following()
    {
        return  $this->belongsTo(User::class, 'user_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'follower');
    }
}
