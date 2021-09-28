<?php

namespace App\Factories;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Services\TagServices\TagService;

class TagFactory extends ModelFactory {

    protected $tag;

    protected $tag_service;

    public function __construct(Tag $tag, TagService $tag_service)
    {
        $this->tag = $tag;

        $this->tag_service = $tag_service;
    }

    public function createModel(Request $request)
    {
        return $this->tag_service->getTags($request);
    }
}