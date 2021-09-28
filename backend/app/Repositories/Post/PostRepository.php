<?php

namespace App\Repositories\Post;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Factories\PostFactory;
use App\Factories\TagFactory;

class PostRepository implements PostRepositoryInterface
{
    protected $post;

    protected $post_factory;

    protected $tag_factory;

    public function __construct(Post $post, PostFactory $post_factory, TagFactory $tag_factory)
    {
        $this->post = $post;

        $this->post_factory = $post_factory;

        $this->tag_factory = $tag_factory;
    }

    /**
     * get all posts login user
     *
     * @param Request
     */
    public function savePost(Request $request)
    {
        $post = Auth::user()->posts()->save(
                $this->post_factory->create($request)
            );

        $tags = $this->tag_factory->create($request);

        return $post->tags()->sync($tags->pluck('id')->toArray());

    }

    /**
     * update posts
     *
     * @param Request
     */
    public function updatePost(Post $post, Request $request)
    {
        $post->fill($request->all())->save();

        $tags = $this->tag_factory->create($request);

        return $post->tags()->sync($tags->pluck('id')->toArray());
    }

    /**
     * get all post
     *
     * @return array
     */
    public function getAllPosts()
    {
        return $this->post->with('tags')->get()->toArray();
    }
}