<?php

namespace App\Repositories\Post;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostRepository implements PostRepositoryInterface
{
    protected $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }
    /**
     * get all posts login user
     *
     * @param Request
     */
    public function savePost(Request $request)
    {
        if ($request->filled('content')){
            return Auth::user()->posts()->save($this->post->fill($request->all()));
        }
        return null;
    }
}