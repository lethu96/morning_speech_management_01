<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Services\UserService;
<<<<<<< HEAD
use App\EloquentModels\WorkSpace;
use DB;
use Carbon\Carbon;
=======
>>>>>>> de30220b9035b459237b02d03e3f20c81063a288

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
    }
}
