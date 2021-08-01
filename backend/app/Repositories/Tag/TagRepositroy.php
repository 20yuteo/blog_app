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

        if ($request->tag_name !== null && $request->tagsArray !== false){
            $array = array_merge($this->match[0], $request->tagsArray);
        } else if ($request->tag_name !== null){
            $array = $this->match[0];
        } else if ($request->tagsArray !== false){
            $array = $request->tagsArray;
        } else {
            $array = [];
        }

        if (!empty($array)){
            return $this->tag->whereIn('name', $array)->get();
        } else {
            return null;
        }
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