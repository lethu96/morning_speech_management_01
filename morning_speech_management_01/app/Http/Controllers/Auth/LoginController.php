<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\EloquentModels\Comment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function loginUser()
    {
        $data = Input::all();
        $email = $data['email'];
        $password = $data['password'];

        $validator = Validator::make(
            [
                'email'      => $email,
                'password'   => $password,
            ],
            [
                'email'      => 'required | max:100 | email',
                'password'   => 'required | max:100',
            ]
        );

        if ($validator->fails()) {
            $keys       = $validator->errors()->keys();
            $messages   = $validator->errors()->getMessages();
            $error      = [];

            foreach ($keys as $key) {
                $error[$key] = $messages[$key][0];
            }

            return response()->json(
                [
                'code'      => 501,
                'success'   => false,
                'data'      => null,
                'error'     => $error,
                ]
            );
        } else {
            $loggedIn = Auth::attempt(['email' => $email, 'password' => $password]);
            if ($loggedIn) {
                // Authentication passed...
                return response()->json(
                    [
                    'code'      => 200,
                    'success'   => true,
                    'data'      => Auth::user()->role,
                    'error'     => null,
                    ]
                );
            } else {
                return response()->json(
                    [
                    'code'      => 501,
                    'success'   => false,
                    'data'      => null,
                    'error'     => true,
                    ]
                );
            }
        }
    }
}
