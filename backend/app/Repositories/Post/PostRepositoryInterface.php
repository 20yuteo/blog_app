<?php

namespace App\Repositories\Post;

use Illuminate\Http\Request;

interface PostRepositoryInterface {

    /**
     * saving new post
     *
     * @param Request
     */
    public function savePost(Request $request);

    /**
     * get all post
     *
     * @return array
     */
    public function getAllPosts();
}