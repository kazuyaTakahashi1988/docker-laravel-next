<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /* ------------------------------------ 
        ▽ POST コメント回答 ▽
    ------------------------------------ */
    public function store($id, Request $request): JsonResponse
    {
        /* ▽ バリデートの処理 ▽ */
        $credentials = $request->validate([
            'comment' => ['required', 'string'],
        ]);

        /* ▽ DB登録処理 ▽ */
        $comment = Comment::create([
            'user_id' => Auth::user()->id,
            'post_id' => $id,
            'comment' => $credentials['comment'],
        ]);
        return response()->json($id, 200);
    }
}
