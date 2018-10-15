<?php
 
namespace App\Repositories\Services;
 
use App\EloquentModels\Campaign;
use Auth;
use Illuminate\Support\Collection;
use App\Repositories\Interfaces\CampaignRepositoryInterface;
use DateTime;
use DatePeriod;
use DateInterval;
use App\User;
use DB;
 
class CampaignService implements CampaignRepositoryInterface
{
    public function __construct(Campaign $model)
    {
        $this->model = $model;
    }
 
    public function getAll()
    {
        $campaigns = $this->model->all();

        return $campaigns;
    }
 
    public function create($request)
    {
        $item = $this->model->create($request->all());
        
        return $item['id'];
    }

    public function getCalenderOfCampaign($id)
    {
        $campaign = Campaign::findOrFail($id);
        $start = $campaign['from_date'];
        $end = $campaign['to_date']; 
        $format = 'd-m-Y';

        $array = array();
        $interval = new DateInterval('P1D');

        $realEnd = new DateTime($end);
        $realEnd->add($interval);

        $period = new DatePeriod(new DateTime($start), $interval, $realEnd);

        foreach($period as $date) { 
            $array[] = $date->format($format); 
        }

        return $array;
    }

    public function filterUser($request)
    {
        $gender = $request['gender'];
        $position = $request['positionId'];
        $workSpace = $request['workSpaceId'];
        $numberItem = $request['numberItem']; 
        $results = '';

        $results = User::where('gender', 'LIKE', $gender)
                ->where('position_id', 'LIKE', $position)
                ->where('work_space_id', 'LIKE', $workSpace )
                ->orderBy('created_at', 'DESC')->limit($numberItem)
                ->get();
        $collection = collect($results);

        return $collection;
    }

    public function showItem($id)
    {
        $campaign = $this->model->find($id);

        $calendars = $campaign->calendars;

        foreach ($calendars as $key => $calendar) {
            $calendar->users;
            $calendar->posts;
        }

        $collection = collect($campaign);
        $collection->put('calendars', $calendars);

        return $collection;
    }
    
    public function rankOfCampaign($id)
    {

        $selects = [
            'posts.*',
            'users.name',
            'users.code_id',
            'users.avatar',
            'COUNT(votes.post_id) AS  number_vote',
        ];

        $toDate = Campaign::where('id', $id)->pluck('to_date')->all();

        $result = DB::table('posts')->join('users', 'posts.user_id', '=', 'users.id')
                                    ->join('votes', 'votes.post_id', '=', 'posts.id')
                                    ->join('calendars', 'posts.id', '=', 'calendars.post_id')
                                    ->join('campaigns', 'calendars.campaign_id', '=', 'campaigns.id')
                                    ->selectRaw(implode(',', $selects))
                                    ->where('campaigns.id', $id)
                                    ->whereDate('votes.created_at', '<=', $toDate)
                                    ->groupBy('posts.id')
                                    ->orderBy(\DB::raw('count(votes.post_id)'), 'DESC')
                                    ->get();

        $collection = collect($result);

        return $collection;
    }

}
