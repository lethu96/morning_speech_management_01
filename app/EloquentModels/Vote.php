<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\EloquentModels\Post;
use App\User;

class Vote extends Model
{
    protected $fillable = [
        'user_id',
        'post_id',
        'type_vote',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id', 'id');
    }
}
