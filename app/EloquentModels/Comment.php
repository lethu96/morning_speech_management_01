<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\StoreComment;
use App\EloquentModels\Post;
use App\User;

class Comment extends Model
{
    protected $fillable = [
        'user_id',
        'post_id',
        'content',
        'time',
    ];
    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
