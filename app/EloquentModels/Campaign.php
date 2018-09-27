<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    protected $fillable = [
        'from_date',
        'to_date',
    ];
}
