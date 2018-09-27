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
                
        return $results;
    }
}
