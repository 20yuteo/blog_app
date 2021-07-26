<?php

namespace App\Repositories\Tag;

use Illuminate\Http\Request;

interface TagRepositoryInterface {

    /**
     * add new tags
     *
     * @param Request;
     * @return array;
     */
    public function addNewTags(Request $request);

    /**
     * Get all tags
     *
     * @return array;
     */
    public function getAllTags();
}