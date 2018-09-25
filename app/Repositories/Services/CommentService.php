<?php
 
namespace App\Repositories\Services;
 
use App\EloquentModels\Comment;
use Auth;
use Illuminate\Support\Collection;
use App\Repositories\Interfaces\CommentRepositoryInterface;
 
class CommentService implements CommentRepositoryInterface
{
    public function __construct(Comment $model)
    {
        $this->model = $model;
    }
 
    public function getCommentOfPost($postId)
    {
        $comment = Comment::where('post_id', '=', $postId)->orderBy('id', 'DESC')->get();
        foreach ($comment as $key => $user) {
            $user->user;
        }

        return $comment;
    }
 
    public function create($request)
    {
        $request['user_id'] = Auth::user()->id;
        $comment = $this->model->create($request->all());
        
        return $comment;
    }
}
