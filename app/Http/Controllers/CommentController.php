<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EloquentModels\Post;
use App\Constants;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CommentValidatorRequest;
use App\Repositories\Services\CommentService;
use DB;

class CommentController extends Controller
{

    protected $commentService = null;

    public function __construct(commentService $commentService)
    {
        $this->commentService = $commentService;
    }

    public function index($postId)
    {
        $comment = $this->commentService->getCommentOfPost($postId);

        return response()->json($comment);
    }

    public function store(CommentValidatorRequest $request)
    {
        $item = $this->commentService->create($request);

        return response()->json($item);
    }
}
