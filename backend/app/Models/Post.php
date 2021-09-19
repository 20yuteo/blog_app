<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y年m月d日',
        'updated_at' => 'datetime:Y年m月d日',
    ];

    public function users()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function tags(){
        return $this->belongsToMany('App\Models\Post', 'App\Models\PostTagTagging');
    }
}
