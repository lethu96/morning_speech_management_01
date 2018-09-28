<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    protected $fillable = [
        'date',
        'user_id',
        'campaign_id',
    ];
}