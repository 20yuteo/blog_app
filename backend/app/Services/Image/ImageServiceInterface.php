<?php

namespace App\Services\Image;

use Illuminate\Http\Request;

interface ImageServiceInterface {

    /**
     * To upload image file
     *
     * @param Request
     *
     * @return mixed
     */
    public function upload(Request $request);
}