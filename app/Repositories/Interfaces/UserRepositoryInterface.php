<?php
 
namespace App\Repositories\Interfaces;
 
interface UserRepositoryInterface
{
    public function getAll();

    public function delete($id);
 
    public function create($request);

    public function getById($id);
 
    public function update($id, $request);

    public function random($workSpaceId);
}
