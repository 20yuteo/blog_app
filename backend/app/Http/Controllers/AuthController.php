<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginUserRequest;

class AuthController extends Controller
{
    use AuthenticatesUsers;

    public function __construct(UserRepositoryInterface $user)
    {
        $this->user = $user;
    }

    public function getLoginUser()
    {
        $auth_response = $this->user->getAuthUser();
        return response()->json($auth_response);
    }

    public function login(LoginUserRequest $request)
    {
        $login_response = $this->user->attemptLogin($request);
        return response()->json($login_response);
    }

    public function logout(Request $request)
    {
        $logout_response = $this->user->logout($request);
        return response()->json($logout_response);
    }
}
