<?php

namespace App\Repositories\Services;

use App\Repositories\Interfaces\CalendarRepositoryInterface;
use App\EloquentModels\Calendar;
use App\EloquentModels\Campaign;
use App\EloquentModels\Post;
use Auth;
use DB;
use Illuminate\Support\Collection;
use DateTime;
use DatePeriod;
use DateInterval;
use App\User;
use Carbon\Carbon;

class CalendarService implements CalendarRepositoryInterface
{
    public function __construct(Calendar $model)
    {
        $this->model = $model;
    }
 
    public function getAll()
    {
        $calendar = $this->model->all();

        return $calendar;
    }
 
    public function create($request)
    {
        $user = explode ( ',', $request['user_id']);
        $date = explode ( ',', $request['date']);
        $campaign_id = $request['campaign_id'];
        $result = '';

        $numberItem = sizeof($user);
        for( $i = 0; $i < $numberItem; $i++)
        {
            $result = DB::table('calendars')->insert(
                ['date' => $date[$i], 'user_id' => $user[$i], 'campaign_id' => $campaign_id]
            );
        }

        return response()->json($result);
    }

    public function calendarWeek()
    {
        Carbon::setLocale('vi');
        $now = Carbon::now();
        $week = $now->weekOfYear;
        $year = Carbon::now()->year;
        $date = $now->setISODate($year,$week );
        $startDateOfWeek = date_format($now->startOfWeek(), "Y-m-d");
        $endDateofWeek = date_format($now->endOfWeek(), "Y-m-d");

        $campaign = Campaign::whereDate('from_date', '<=', $startDateOfWeek)->whereDate('to_date', '<=', $endDateofWeek)->first();

        $calendar = $campaign->calendars;

        $collections = Collect($calendar);

        foreach ($collections as $key => $collection) {
                $collection->users;
            }

        return $collections;
    }

    public function myCalendar()
    {
        $userId = Auth::user()->id;

        $myCalendar = Calendar::where('user_id', $userId)->get(); 

        foreach ($myCalendar as $key => $value) {
                $value->posts;
            }

        return $myCalendar; 
    }

    public function calendarNextWeek()
    {
        Carbon::setLocale('vi');
        $now = Carbon::now();
        $week = $now->weekOfYear + 1;
        $year = Carbon::now()->year;
        $date = $now->setISODate($year,$week );
        $startDateOfWeek = date_format($now->startOfWeek(),"Y-m-d");
        $endDateofWeek = date_format($now->endOfWeek(),"Y-m-d");

        $campaign = Campaign::whereDate('from_date', '=', $startDateOfWeek)->whereDate('to_date', '<=', $endDateofWeek)->first();

        $calendar = $campaign->calendars;

        $collections = Collect($calendar);

        foreach ($collections as $key => $collection) {
                $collection->users;
            }

        return $collections;        
    }

    public function update($request, $id)
    {
        $post_id = Calendar::where('id', $id)->pluck('post_id')->all();

            if($request['checked']) {
                $calendar = Calendar::where('id', $id)->update(array('checked' => $request['checked']));
                $update = Post::where('id', $post_id)->update(array('confirm' => $request['confirm']));
            } else {
                $calendar = Calendar::where('id', $id)->update(array('post_id' => $request['post_id']));
                
            }

        return $calendar;
    }

    public function updatePostOfCalendar($request, $id)
    {
       $calendar = Calendar::where('id', $id)->update(array('post_id' => $request['post_id']));

       return $calendar;
    }

}
