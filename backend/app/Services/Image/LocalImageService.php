<?php

namespace App\Services\Image;

use App\Services\Image\ImageServiceInterface;
use Illuminate\Http\Request;
use Storage;

class LocalImageService implements ImageServiceInterface{

    /**
     * To upload image file
     *
     * @param Request
     *
     * @return mixed
     */
    public function upload(Request $request)
    {
        if ($request->has('file')){
            return Storage::disk('local')->put('', $request->file('file'));
        }
        return null;
    }
}