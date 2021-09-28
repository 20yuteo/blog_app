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

    public function getTagByName(string $name) {
        return Tag::where('name', $name)->get();
    }

    public function getTagByArray($array){
        if (!empty($array)){
            return Tag::whereIn('name', $array)->get();
        }
        return null;
    }
}