<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;
use App\EloquentModels\Calendar;

class Campaign extends Model
{
    protected $fillable = [
        'from_date',
        'to_date',
    ];

    public function calendars()
    {
    	return $this->hasMany(Calendar::class);
    }
}
