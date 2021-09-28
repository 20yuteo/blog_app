<?php
namespace App\Services\TagServices;

use Illuminate\Http\Request;

interface TagServiceInterface {

    public function getTagsArray(Request $request);

    public function createTagsByArray(Request $request);

    public function fetchTagsByArray(Request $request);

    public function getTags(Request $request);
}