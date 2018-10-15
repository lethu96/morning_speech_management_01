<?php
 
namespace App\Repositories\Interfaces;
 
interface CampaignRepositoryInterface
{
    public function getAll();
 
    public function create($request);
    
    public function getCalenderOfCampaign($id);

    public function filterUser($request);

    public function showItem($id);

    public function rankOfCampaign($id);
}
