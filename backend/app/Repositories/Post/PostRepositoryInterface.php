<?php

namespace App\Repositories\Post;

use Illuminate\Http\Request;

interface PostRepositoryInterface {

    /**
     * get all posts login user
     *
     * @param Request
     */
    public function savePost(Request $request);
}