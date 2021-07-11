<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginUserRequest;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function __construct(UserRepositoryInterface $user)
    {
        $this->user = $user;
    }

    public function login(LoginUserRequest $request)
    {
        $login_response = $this->user->attemptLogin($request);
        return response()->json($login_response);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $result = true;
        $status = 200;
        $message = 'ログアウトしました';
        return response()->json(['result' => $result, 'status' => $status, 'message' => $message]);
    }
}
