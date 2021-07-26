<?php

namespace App\Repositories\Tag;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagRepository implements TagRepositoryInterface
{
    protected $match = [];

    protected $tag;

    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    /**
     * add new tags
     *
     * @param Request;
     * @return array;
     */
    public function addNewTags(Request $request){
        if ($request->has('tag_name')){
            preg_match_all('/#([a-zA-z0-9０-９ぁ-んァ-ヶ亜-熙]+)/u', $request->tag_name, $this->match);
            foreach($this->match[0] as $tag_name){
                if ($this->tag->where('name', $tag_name)->exists()){
                    $this->tag->where('name', $tag_name)->first()->name;
                }else {
                    $this->tag->create(['name' => $tag_name])->name;
                }
            }
        }
        return $this->tag->whereIn('name', $this->match[0])->get()->toArray();
    }


    /**
     * Get all tags
     *
     * @return array;
     */
    public function getAllTags(){
        return $this->tag->all()->toArray();
    }
}