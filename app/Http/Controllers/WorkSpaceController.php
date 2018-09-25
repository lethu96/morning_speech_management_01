<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
<<<<<<< HEAD
use App\EloquentModels\WorkSpace;

class WorkSpaceController extends Controller
{
    public function index()
    {
        $workSpace = WorkSpace::all()->toArray();
        return response()->json($workSpace);
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
=======

class WorkSpaceController extends Controller
{
    //
>>>>>>> de30220b9035b459237b02d03e3f20c81063a288
}
