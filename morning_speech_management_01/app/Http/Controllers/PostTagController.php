<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Constants;
use Illuminate\Http\JsonResponse;
use App\Repositories\Services\PostTagService;
use DB;
use Auth;

class PostTagController extends Controller
{
    protected $postTagService = null;

    public function __construct(PostTagService $postTagService)
    {
        $this->postTagService = $postTagService;
    }

    public function index()
    {
        $tags = $this->postTagService->getTag();

        return response()->json($tags);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }
    
    public function destroy($id)
    {
        //
    }
}
