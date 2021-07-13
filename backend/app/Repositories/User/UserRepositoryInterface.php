<?php

namespace App\Repositories\User;

use Illuminate\Http\Request;

interface UserRepositoryInterface {

    /**
     * Attempt for login
     *
     * @param Response
     * @return array
     */
    public function attemptLogin(Request $request);

    /**
     * Attempt for login
     *
     * @param Response
     * @return array
     */
    public function Logout(Request $request);
}