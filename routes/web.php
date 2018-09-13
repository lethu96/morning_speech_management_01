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

Route::get('{slug}', function () {
    return view('index');
}) ->where('slug', '(?!api)([A-z\d-\/_.]+)?');
Route::get('{slug}/{id}', function () {
    return view('index');
}) ->where('slug', '(?!api)([A-z\d-\/_.]+)?');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('posts', 'PostController');
Route::resource('users','UserController');
Route::resource('positions','PositionController');
Route::resource('workspaces','WorkSpaceController');
Route::resource('companys','CompanyController');
Route::get('/add-post',function(){
	return view('index');
});
Route::get('/detail-posts/{id}', function(){
	return view('index');
});
Route::get('/test', function(){
	return view('test');
});
Route::get('/list-post', function(){
	return  view('index');
});
Route::get('/list-user', function(){
	return  view('index');
});

Route::get('/update-post/{id}', function(){
	return  view('index');
});
Route::get('/add-user', function(){
	return view('index');
});
Route::get('/update-user/{id}', function(){
	return  view('index');
});
Route::get('/random-user', function(){
	return  view('index');
});
Route::get('/rank', function(){
	return  view('index');
});
Route::get('/ranks', 'PostController@getRank');
Route::get('/random/{workSpaceId}', 'UserController@random');
Route::get('/post','PostController@getItemPost');
