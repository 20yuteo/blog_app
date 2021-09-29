<?php
namespace App\Services\TagServices;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Repositories\Tag\TagRepositoryInterface;
use App\Factories\TagFactory;
use Illuminate\Support\Collection;

class TagService implements TagServiceInterface {

    protected $matches = [];

    protected $tag;

    protected $tag_ids;

    protected $tag_repository_interface;

    public function __construct(Tag $tag, TagRepositoryInterface $tag_repository_interface, Collection $collection){

        $this->tag = $tag;

        $this->tag_ids = array();

        $this->tag_collection = $collection;

        $this->tag_repository_interface = $tag_repository_interface;
    }

    public function getTagsArray(Request $request) {

        if ($request->has('tag')){
            return explode(" ", str_replace("　", " ", $request->tag));
        }
        return [];
    }

    public function createTagsByArray(Request $request) {

        foreach($this->getTagsArray($request) as $name){
            if($this->tag_repository_interface->getTagByName($name)->isEmpty())
            {
                if ($this->tag->create(['name' => $name])){
                    $this->tag_collection =
                        $this->tag_collection->merge(
                            $this->tag->where('name', $name)->get()
                        );
                }
            }
        }

        return $this->tag_collection;
    }

    public function fetchTagsByArray(Request $request){

        if ($request->has('tagIds')){
            return $this->tag->whereIn('id', $request->tagIds)->get();
        }
    }

    public function getTags(Request $request){

        $this->tag_collection = $this->createTagsByArray($request);

        $this->tag_collection =
            $this->tag_collection->merge(
                $this->fetchTagsByArray($request)
            );

        return $this->tag_collection;
    }
}