<?php
 
namespace App\Repositories\Interfaces;
 
interface CalendarRepositoryInterface
{
    public function getAll();

    public function create($request);

    public function calendarWeek();

    public function calendarNextWeek();

    public function myCalendar();

    public function update($request, $id);

    public function updatePostOfCalendar($request, $id);
}