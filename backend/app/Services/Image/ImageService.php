<?php

namespace App\Services\Image;

use App\Services\Image\ImageServiceInterface;
use Illuminate\Http\Request;
use Storage;

class ImageService implements ImageServiceInterface {

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
            $path = Storage::desk('s3')->putFile('Images', $request->file('file'), 'public');
            return Storage::disk('s3')->url($path);
        }
        return null;
    }
}