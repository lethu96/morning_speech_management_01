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
    Route::get('people', 'PostController@getIndex');
    Route::get('/detail-posts/{id}','PostController@getIndex');
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
	Route::get('/user/following','UserController@getFollowing');
});

Route::get('{slug}', function () {
    return view('index');
}) ->where('slug', '(?!api)([A-z\d-\/_.]+)?');
Route::get('{slug}/{id}', function () {
    return view('index');
}) ->where('slug', '(?!api)([A-z\d-\/_.]+)?');
Auth::routes();
Route::post('/follow', 'UserController@follows');
Route::post('/tests', 'UserController@test');