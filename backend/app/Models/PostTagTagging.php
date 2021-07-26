<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTagTagging extends Model
{
    use HasFactory;

    protected $table = 'post_tag_tagging';

    public function tags()
    {
        return $this->belongsTo('App\Models\Tag');
    }

    public function posts()
    {
        return $this->belongsTo('App\Models\Post');
    }
}
