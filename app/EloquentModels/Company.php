<?php

namespace App\EloquentModels;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name',
        'address',
    ];
    protected $table = 'companies';
}
