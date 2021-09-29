<?php

namespace App\Factories;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostFactory extends ModelFactory {

    protected $user;

    protected $post;

    public function __construct(Post $post){

        $this->post = $post;

        $this->user = Auth::user();

    }

    public function createModel(Request $request)
    {
        return $this->post->fill($request->all());
    }
}