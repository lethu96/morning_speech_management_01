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
}
