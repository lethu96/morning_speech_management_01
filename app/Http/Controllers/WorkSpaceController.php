<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
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
}
