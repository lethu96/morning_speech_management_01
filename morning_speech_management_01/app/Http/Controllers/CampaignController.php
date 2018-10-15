<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EloquentModels\Post;
use App\EloquentModels\Campaign;
use App\Constants;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CreateCampaignValidator;
use App\Repositories\Services\CampaignService;
use DB;

class CampaignController extends Controller
{

    protected $campaignService = null;

    public function __construct(CampaignService $campaignService)
    {
        $this->campaignService = $campaignService;
    }

    public function index()
    {
        $campaign = $this->campaignService->getAll();
        
        return response()->json($campaign);
    }

    public function store(CreateCampaignValidator $request)
    {
        $item = $this->campaignService->create($request);

        return response()->json($item);
    }

    public function show($id)
    {
        $item = $this->campaignService->showItem($id);
        
        return response()->json($item);
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

    public function getCalenderOfCampaign($id)
    {
        return $this->campaignService->getCalenderOfCampaign($id);
    }

    public function filter(Request $request)
    {
        $result = $this->campaignService->filterUser($request);
        
        return response()->json($result);
    }

    public function rankOfCampaign($id)
    {
        $ranks = $this->campaignService->rankOfCampaign($id);

        return response()->json($ranks);
    }
}
