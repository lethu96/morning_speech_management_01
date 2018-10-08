<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\EloquentModels\Tag;

class PostTag extends Model
{
    protected $fillable = [
        'tag_id',
        'post_id',
    ];
    protected $table = 'post_tag';

    public function tags()
    {
    	return $this->belongsTo(Tag::class, 'tag_id', 'id');
    }

}
