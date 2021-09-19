<?php

namespace App\Repositories\Tag;

use App\Models\Tag;

class TagRepository implements TagRepositoryInterface {

    protected $tag;

    public function __construct(Tag $tag){
        $this->tag = $tag;
    }

    public function getAllTag(){
        return $this->tag->all()->toArray();
    }
}