<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EloquentModels\Post;
use App\Constants;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\PostValidatorRequest;
use App\Repositories\Services\PostService;
use DB;
use Auth;

class PostController extends Controller
{

    protected $postService = null;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
        $this->middleware('auth');
    }

    public function getIndex()
    {
        return view('index');
    }

    public function index()
    {
        $list = $this->postService->getAll();

        return response()->json($list);
    }

    public function store(PostValidatorRequest $request)
    {
        $item = $this->postService->create($request);

        return response()->json($item);
    }

    public function show($id)
    {
        $item = $this->postService->getById($id);

        return response()->json($item);
    }

    public function update(PostValidatorRequest $request, $id)
    {
        $itemUpdate = $this->postService->update($id, $request);

        return response()->json($itemUpdate);
    }

    public function destroy($id)
    {
        $item = $this->postService->delete($id);

        return response()->json($item );
    }

    public function getRank()
    {
        $ranks = $this->postService->ranking();

        return response()->json($ranks);
    }

    public function getListItemPost()
    {
        $listItems = $this->postService->listPost();

        return response()->json($listItems);
    }

    public function myPost()
    {
        $myPost = $this->postService->myPost();

        return response()->json($myPost);
    }

    public function votes(Request $request)
    {
        $votes = $this->postService->votePost($request);
        return response()->json($items );
    }

    public function follows(Request $request)
    {
        $follows = $this->postService->followUser($request);

        return response()->json($follows );
    }

    public function topPost()
    {
        $tops = $this->postService->topPost();

        return response()->json($tops);
    }

    public function getUserVote($postId)
    {
        $users = $this->postService->getUserVote($postId);

        return response()->json($users);
    }

    public function getSearch(Request $request)
    {
        $results = $this->postService->search($request);

        return response()->json($results);
    }
}
