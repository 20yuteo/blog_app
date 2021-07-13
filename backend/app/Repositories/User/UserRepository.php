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

        $this->auth_response = [
            'result' => false,
            'status' => 401,
            'message' => 'ユーザが見つかりません',
            'user' => null
        ];
    }

    /**
     * Get Auth User
     *
     * @param void
     * @return array
     */
    public function getAuthUser()
    {
        if (Auth::user()){
            $this->auth_response['result'] = true;
            $this->auth_response['status'] = 200;
            $this->auth_response['message'] = 'OK';
            $this->auth_response['user'] = Auth::user();
        }
        return $this->auth_response;
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
            $this->auth_response['result'] = true;
            $this->auth_response['status'] = 200;
            $this->auth_response['message'] = 'OK';
            $this->auth_response['user'] = Auth::user();
            $request->session()->regenerate();
        }
        return $this->auth_response;
    }


    /**
     * Attempt for login
     *
     * @param Response
     * @return array
     */
    public function Logout(Request $request)
    {
        Auth::logout();
        $this->auth_response['result'] = true;
        $this->auth_response['status'] = 200;
        $this->auth_response['message'] = 'OK';
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $this->auth_response;
    }
}