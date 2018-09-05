<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;

class WorkSpace extends Model
{
    protected $fillable = [
        'name',
        'address',
    ];
}
