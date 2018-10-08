<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['middleware' => ['auth', 'checkLevel']], function () {
    Route::get('/index', 'PostController@getIndex');
    Route::get('/home', 'PostController@getIndex');
    Route::get('/rank', 'PostController@getIndex');
    Route::get('/people', 'PostController@getIndex');
    Route::get('/detail-posts/{id}', 'PostController@getIndex');
    Route::get('/detail-user/{id}', 'PostController@getIndex');
    Route::get('/user-posts', 'PostController@getIndex');
    Route::resource('users', 'UserController');
    Route::resource('posts', 'PostController');
    Route::resource('workspaces', 'WorkSpaceController');
    Route::get('ranks', 'PostController@getRank');
    Route::get('/random/{workSpaceId}', 'UserController@random');
    Route::resource('positions', 'PositionController');
    Route::resource('companys', 'CompanyController');
    Route::get('profile', 'UserController@profile');
    Route::get('/list-post', 'PostController@getListItemPost');
    Route::get('/my-post', 'PostController@myPost');
    Route::get('/suggest', 'UserController@suggest');
    Route::get('/comment-of-post/{id}', 'CommentController@index');
    Route::post('/add-comment', 'CommentController@store');
    Route::get('/ranks', 'PostController@getRank');
    Route::get('/random/{workSpaceId}', 'UserController@random');
    Route::get('/post', 'PostController@getItemPost');
    Route::get('/user/not-follow', 'UserController@notFollow');
    Route::get('/user/following', 'UserController@getFollowing');
    Route::post('/votes', 'PostController@votes');
    Route::post('/follows', 'PostController@follows');
    Route::get('/top-post', 'PostController@topPost');
    Route::get('/get-user-vote/{postId}', 'PostController@getUserVote');
    Route::get('/campaign/{id}', 'CampaignController@getCalenderOfCampaign');
    Route::get('/calendar-of-week', 'CalendarController@calendarWeek');
    Route::get('/calendar-of-next-week','CalendarController@calendarNextWeek');
    Route::get('/my-calendar', 'CalendarController@myCalendar');
    Route::get('/choose-post', 'PostController@choosePost');
    Route::resource('campaigns', 'CampaignController');
    Route::resource('calendars', 'CalendarController');
    Route::get('/rank-of-campaign/{id}', 'CampaignController@rankOfCampaign');
    Route::resource('post-tag', 'PostTagController');
});

Route::get('{slug}', function () {
    return view('index');
}) ->where('slug', '(?!api)([A-z\d-\/_.]+)?');

Auth::routes();

Route::post('/search', 'PostController@getSearch');

Route::get('/search', 'PostController@getIndex');

Route::post('/filter', 'CampaignController@filter');

Route::post('/login-user', 'Auth\LoginController@loginUser');

Route::post('/test', 'CalendarController@store');

Route::post('/calendars-update-post/{id}', 'CalendarController@updatePost');
