<?php
 
namespace App\Repositories\Services;
 
Use App\EloquentModels\Comment;
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
        $collection = collect($comment);

        return $collection;
    }
 
    public function create($request)
    {
        //$user_id = Auth::user()->id;
        $request['user_id'] = 1;
        $comment = $this->model->create($request->all());
        
        return response()->json($comment);
    }

}
