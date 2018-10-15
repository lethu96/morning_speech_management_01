<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests\PostValidatorRequest;
use App\User;
use App\EloquentModels\Comment;
use App\EloquentModels\Vote;
use App\EloquentModels\PostTag;

class Post extends Model
{
    protected $fillable = [
        'user_id',
        'content',
        'title',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id');
    }

    public function vote()
    {
        return $this->hasMany(Vote::class, 'post_id');
    }

    public function postTags()
    {
        return $this->hasMany(PostTag::class, 'post_id');
    }
}
