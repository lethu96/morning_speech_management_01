<?php
 
namespace App\Repositories\Interfaces;
 
interface CalendarRepositoryInterface
{
	public function getAll();

	public function create($request);
}