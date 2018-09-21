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
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->userService->getAll();
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
        return $this->userService->create($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->userService->getById($id);
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
        return $this->userService->update($id, $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->userService->delete($id);
    }

    public function random($workSpaceId)
    {
        return $this->userService->random($workSpaceId);
    }
    
    public function profile()
    {
        return $this->userService->profile();
    }

    public function suggest()
    {
        return $this->userService->suggest();
    }

    public function notFollow()
    {
        return $this->userService->notFollow();
    }

    public function getFollowing()
    {
        return $this->userService->getFollowing();
    }
}
