<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\EloquentModels\Campaign;
use App\EloquentModels\Post;
use App\User;

class Calendar extends Model
{
    protected $fillable = [
        'date',
        'user_id',
        'campaign_id',
        'post_id',
    ];

    public function users()
    {
    	return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function campaigns()
    {
    	return $this->belongsTo(Campaign::class);
    }

    public function posts()
    {
    	return $this->belongsTo(Post::class, 'post_id', 'id');
    }
}
