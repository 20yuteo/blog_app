<?php

namespace App\Repositories\Post;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Factories\PostFactory;

class PostRepository implements PostRepositoryInterface
{
    protected $post;

    protected $post_factory;

    public function __construct(Post $post, PostFactory $post_factory)
    {
        $this->post = $post;

        $this->post_factory = $post_factory;
    }

    /**
     * get all posts login user
     *
     * @param Request
     */
    public function savePost(Request $request)
    {
        return Auth::user()->posts()->save(
                $this->post_factory->create($request)
            );
    }

    /**
     * update posts
     *
     * @param Request
     */
    public function updatePost(Post $post, Request $request)
    {
        return $post->fill($request->all())->save();
    }

    /**
     * get all post
     *
     * @return array
     */
    public function getAllPosts()
    {
        return $this->post->all()->toArray();
    }
}