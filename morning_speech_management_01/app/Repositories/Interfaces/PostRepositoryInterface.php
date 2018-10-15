<?php
 
namespace App\Repositories\Interfaces;
 
interface PostRepositoryInterface
{
    public function getAll();
 
    public function getById($id);
 
    public function create($request);
 
    public function update($id, $request);
 
    public function delete($id);

    public function viewUpdate($id);

    public function ranking();

    public function listPost();

    public function myPost();

    public function votePost($request);

    public function followUser($request);

    public function topPost();

    public function getUserVote($postId);

    public function search($request);

    public function choosePostForCampaign();
}
