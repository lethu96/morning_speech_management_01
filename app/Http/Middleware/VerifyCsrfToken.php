<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/follows',
        '/votes',
        'api/login',
        'api/register',
        'api/logout',
        'api/password/email',
        'api/password/reset',
        'users/*',
        'ranks',
        'api/companys/*',
        'api/workspaces/*',
        'api/posts/*',
        'profile',
        '/api/add-comment',
        '/calendars/week',
        'calendars/*',
    ];
}
