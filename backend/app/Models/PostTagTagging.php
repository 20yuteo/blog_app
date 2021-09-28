<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTagTagging extends Model
{
    use HasFactory;

    protected $table = 'post_tag_tagging';

    protected $fillable = [
        'tag_id'
    ];

    public function posts(){
        return $this->belongsTo('App\Models\Post');
    }

    public function tags(){
        return $this->belongsTo('App\ModelsTag');
    }
}
