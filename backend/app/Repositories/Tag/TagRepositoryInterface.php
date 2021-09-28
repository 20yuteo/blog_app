<?php

namespace App\Repositories\Tag;

interface TagRepositoryInterface {

    public function getAllTag();

    public function getTagByName(string $name);

    public function getTagByArray(array $array);

}