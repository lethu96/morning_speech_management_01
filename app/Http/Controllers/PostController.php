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
        return $this->postService->getAll();
    }

    public function store(PostValidatorRequest $request)
    {
        return $this->postService->create($request);
    }

    public function show($id)
    {
        return $this->postService->getById($id);
    }

    public function update(PostValidatorRequest $request, $id)
    {
        return $this->postService->update($id, $request);
    }

    public function destroy($id)
    {
        return $this->postService->delete($id);
    }

    public function getRank()
    {
        return $this->postService->ranking();
    }

    public function getListItemPost()
    {
        return $this->postService->listPost();
    }

    public function myPost() 
    {
        return $this->postService->myPost();
    }
}
