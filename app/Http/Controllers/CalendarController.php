<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Constants;
use Illuminate\Http\JsonResponse;
use App\Repositories\Services\CalendarService;
use DB;

class CalendarController extends Controller
{

    protected $calendarService = null;

    public function __construct(CalendarService $calendarService)
    {
        $this->calendarService = $calendarService;
    }

    public function index()
    {
        $calendar = $this->calendarService->getAll();
        
        return response()->json($calendar);
    }

    public function store(Request $request)
    {
        $item = $this->calendarService->create($request);

        return response()->json($item);
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
        $itemUpdate = $this->calendarService->update($request, $id);

        return response()->json($itemUpdate);
    }
    
    public function destroy($id)
    {
        //
    }

    public function calendarWeek()
    {
        $calendar = $this->calendarService->calendarWeek();

        return response()->json($calendar);
    }

    public function calendarNextWeek()
    {
        $calendar = $this->calendarService->calendarNextWeek();
        return response()->json($calendar);
    }

    public function myCalendar()
    {
        $myCalendar = $this->calendarService->myCalendar();

        return response()->json($myCalendar);
    }

    public function updatePost(Request $request, $id)
    {

        $post = $this->calendarService->updatePostOfCalendar($request, $id);

        return response()->json($post);
    }
}
