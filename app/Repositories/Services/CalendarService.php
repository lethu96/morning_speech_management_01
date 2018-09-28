<?php

namespace App\Repositories\Services;

use App\Repositories\Interfaces\CalendarRepositoryInterface;
use App\EloquentModels\Calendar;
use Auth;
use DB;
use Illuminate\Support\Collection;
use DateTime;
use DatePeriod;
use DateInterval;
use App\User;

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
}
