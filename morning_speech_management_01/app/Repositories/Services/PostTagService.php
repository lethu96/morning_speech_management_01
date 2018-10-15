<?php
 
namespace App\Repositories\Services;
 
use App\EloquentModels\Tag;
use App\EloquentModels\PostTag;
use Auth;
use Illuminate\Support\Collection;
use App\Repositories\Interfaces\PostTagRepositoryInterface;
 
class PostTagService implements PostTagRepositoryInterface
{
    public function __construct(PostTag $model)
    {
        $this->model = $model;
    }

    public function getTag()
    {
    	$tags = Tag::all();

    	return $tags;
    }
}
