<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['web']], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('logout', 'Auth\LoginController@logout');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
    Route::resource('users','UserController');
    Route::resource('posts','PostController');
    Route::resource('workspaces','WorkSpaceController');
    Route::get('ranks', 'PostController@getRank');
    Route::get('/random/{workSpaceId}', 'UserController@random');
    Route::resource('positions','PositionController');
    Route::resource('companys','CompanyController');
    Route::get('profile','UserController@profile');
    Route::get('/list-post','PostController@getListItemPost');
    Route::get('/my-post','PostController@myPost');
    Route::get('/suggest','UserController@suggest');
    Route::get('/comment-of-post/{id}','CommentController@index');
    Route::post('/add-comment','CommentController@store');
});
