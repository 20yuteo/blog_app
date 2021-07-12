<?php

namespace App\Repositories\User;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserRepositoryInterface
{
    protected $user;

    /**
    * @param object $user
    */
    public function __construct(User $user)
    {
        $this->user = $user;

        $this->login_response = [
            'result' => false,
            'status' => 401,
            'message' => 'ユーザが見つかりません',
            'user' => null
        ];
    }

    /**
     * Attempt for login
     *
     * @param Response
     * @return array
     */
    public function attemptLogin(Request $request)
    {
        if (Auth::attempt($request->only('email', 'password'))){
            $this->login_response['result'] = true;
            $this->login_response['status'] = 200;
            $this->login_response['message'] = 'OK';
            $this->login_response['user'] = Auth::user();
            $request->session()->regenerate();
        }
        return $this->login_response;
    }
}