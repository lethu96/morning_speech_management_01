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
        return $this->commentService->getCommentOfPost($postId);
    }

    public function store(CommentValidatorRequest $request)
    {
        return $this->commentService->create($request);
    }
}
