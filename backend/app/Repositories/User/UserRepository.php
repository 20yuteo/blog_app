<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Services\Image\LocalImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserRepositoryInterface
{
    protected $user;

    protected $image_service;

    /**
    * @param object $user
    */
    public function __construct(User $user, LocalImageService $image_service_interface)
    {
        $this->user = $user;

        $this->auth_response = [
            'result' => false,
            'status' => 401,
            'message' => 'ユーザが見つかりません',
            'user' => null,
            'image_url' => '',
        ];

        $this->image_service = $image_service_interface;
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
            $this->auth_response['image_url'] = Auth::user()->profile->image_url;
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
            $this->auth_response['image_url'] = Auth::user()->profile->image_url;
            $request->session()->regenerate();
        }
        return $this->auth_response;
    }


    /**
     * Attempt for logout
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

    /**
     * Update user profile
     *
     * @param Response
     * @return array
     */
    public function updateProfile(Request $request)
    {
        $upload_result = $this->image_service->upload($request);

        if ($upload_result){
            Auth::user()->profile->image_url = '/images/LocalImages/'.$upload_result;
            Auth::user()->profile->save();
        }
        $this->auth_response['image_url'] = Auth::user()->profile->image_url;
        return $this->auth_response;
    }
}