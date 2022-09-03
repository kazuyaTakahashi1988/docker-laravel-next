<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // use HasFactory;
    protected $fillable = [
        'id', 'user_id', 'category_id', 'content', 'title', 'image'
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }
    public function category()
    {
        return $this->belongsTo(\App\Models\Category::class, 'category_id');
    }
    // public function likes()
    // {
    //     // いいね用リレーション
    //     return $this->hasMany(\App\Models\Like::class, 'post_id', 'id');
    // }
    // public function answer()
    // {
    //     // ベストアンサー用リレーション
    //     return $this->belongsTo(\App\Models\Answer::class, 'id', 'post_id');
    // }
}
