<?php

namespace App\Repositories\Post;

use Illuminate\Http\Request;
use App\Models\Post;

interface PostRepositoryInterface {

    /**
     * saving new post
     *
     * @param Request
     */
    public function savePost(Request $request);

    /**
     * saving new post
     *
     * @param Request
     */
    public function updatePost(Post $post, Request $request);

    /**
     * get all post
     *
     * @return array
     */
    public function getAllPosts();
}