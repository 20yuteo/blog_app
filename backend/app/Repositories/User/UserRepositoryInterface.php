<?php

namespace App\Repositories\User;

use Illuminate\Http\Request;

interface UserRepositoryInterface {

    /**
     * Get Auth User
     *
     * @param void
     * @return array
     */
    public function getAuthUser();

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