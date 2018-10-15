<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Services\UserService;
use App\Repositories\Interfaces\PostRepositoryInterface;
use App\Repositories\Services\PostService;
use App\Repositories\Interfaces\CalendarRepositoryInterface;
use App\Repositories\Services\CalendarService;
use App\Repositories\Interfaces\CampaignRepositoryInterface;
use App\Repositories\Services\CampaignService;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            PostRepositoryInterface::class,
            PostService::class
        );

        $this->app->singleton(
            UserRepositoryInterface::class,
            UserService::class
        );

        $this->app->singleton(
            CalendarRepositoryInterface::class,
            CalendarService::class
        );

        $this->app->singleton(
            CampaignRepositoryInterface::class,
            CampaignService::class
        );
        
    }
}
