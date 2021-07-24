<?php

namespace App\Providers;

use App\Services\Image\ImageService;
use App\Services\Image\ImageServiceInterface;
use App\Services\Image\LocalImageService;
use Illuminate\Support\ServiceProvider;

class ImageServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        if(app()->environment('production')){
            $this->app->bind(ImageServiceInterface::class, ImageService::class);
        } else {
            $this->app->bind(ImageServiceInterface::class, LocalImageService::class);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
