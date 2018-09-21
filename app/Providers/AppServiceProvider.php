<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Services\UserService;
use App\EloquentModels\WorkSpace;
use DB;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // $workspace = WorkSpace::with(['users' => function($query) {
        //     return $query->with(['posts' => function($query) {
        //        return  $query->with(['vote' => function($query) {
        //             return $query->select(['post_id', DB::raw('COUNT(post_id) as count_vote')])->groupBy('post_id')->orderBy('count_vote', 'DESC')->limit(1);
        //        }]);
        //     } ]);
        // }])->get();
        $workspace = DB::table('users')->join('workspaces', 'workspaces.id', '=', 'users.work_space_id')
            ->join('posts', 'posts.user_id', '=', 'users.id')
            ->join('votes', 'votes.post_id', '=', 'posts.id')
            ->select(DB::raw('count(workspaces.id) as total, workspaces.id, posts.*'))
            ->groupBy('workspaces.id')->get();
        //$workspace->users;
        dd($workspace);
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
