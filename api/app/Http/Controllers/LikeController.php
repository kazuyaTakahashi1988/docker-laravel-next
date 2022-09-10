<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return response()->json("aaaaa", 200);
        $likes = Like::latest()->where('user_id', Auth::user()->id)->get();
        $likes->load('post');
        return $likes;
    }
    public function like($id)
    {
        $user_id = Auth::user()->id;
        Like::create(['post_id' => $id, 'user_id' => $user_id]);
        $likeCount = count(Like::where('post_id', $id)->get());
        return response()->json($likeCount, 200);
    }
    public function unlike($id)
    {
        $user_id = Auth::user()->id;
        $like = Like::where('user_id', $user_id)->where('post_id', $id)->first();
        $like->delete();
        $likeCount = count(Like::where('post_id', $id)->get());
        return response()->json($likeCount, 200);
    }
}
