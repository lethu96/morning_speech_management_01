<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Services\UserService;
use App\Http\Requests\UserValidatorRequest;
use App\Http\Requests\UpdateUserValidatorRequest;
use App\EloquentModels\Follow;

class UserController extends Controller
{

    protected $userService = null;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list = $this->userService->getAll();

        return response()->json($list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserValidatorRequest $request)
    {
        $item = $this->userService->create($request);

        return response()->json($item);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $itemShow = $this->userService->getById($id);

        return response()->json($item);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserValidatorRequest $request, $id)
    {
        $item = $this->userService->update($id, $request);

        return response()->json($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = $this->userService->delete($id);

        return response()->json($item);
    }

    public function random($workSpaceId)
    {
        $userRandom = $this->userService->random($workSpaceId);

        return response()->json($userRandom);
    }
    
    public function profile()
    {
        $profile = $this->userService->profile();

        return response()->json($profile);
    }

    public function suggest()
    {
        $userSuggest = $this->userService->suggest();

        return response()->json($userSuggest);
    }

    public function notFollow()
    {
        $unFollows = $this->userService->notFollow();

        return response()->json($unFollows);
    }

    public function getFollowing()
    {
        $follows = $this->userService->getFollowing();

        return response()->json($follows);
    }
}
