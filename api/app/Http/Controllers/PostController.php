<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Post;
use App\Models\User;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /* ------------------------------------ 
        ▽ GET Home ▽
    ------------------------------------ */
    public function home()
    {
        $posts = Post::latest()->paginate(6);
        $posts->load('category', 'user');
        return $posts;
    }
    /* ------------------------------------ 
        ▽ GET Q&A 一覧 ▽
    ------------------------------------ */
    public function index()
    {
        $posts = Post::latest()->paginate(6);
        $posts->load('category', 'user');
        return $posts;
    }
    /* ------------------------------------ 
        ▽ GET カテゴリー一覧 ▽
    ------------------------------------ */
    public function category($id)
    {
        $posts = Post::latest()->where('category_id', $id)->paginate(1000000);
        $posts->load('category', 'user');
        return $posts;
    }
    /* ------------------------------------ 
        ▽ GET ユーザー一覧 ▽
    ------------------------------------ */
    public function user($id)
    {
        $posts = Post::latest()->where('user_id', $id)->paginate(1000000);
        $posts->load('category', 'user');
        return $posts;
    }
    /* ------------------------------------ 
        ▽ GET 投稿する ▽
    ------------------------------------ */
    public function create()
    {
        $categories = Category::all();
        return $categories;
    }
    /* ------------------------------------ 
        ▽ POST 投稿する ▽
    ------------------------------------ */
    public function store(Request $request): JsonResponse
    {
        if($request->image){
            return response()->json($request , 200);
        }
        $credentials = $request->validate([
            'title' => ['required', 'string'],
            'category' => ['required', 'string'],
            'content' => ['required', 'string'],
            // 'image' => ['required', 'image'],
        ]);

        if ($request->hasFile('image')) {
            $post = Post::create([
                'title' => $credentials['title'],
                'user_id' => Auth::user()->id,
                'category_id' => $credentials['category'],
                'content' => $credentials['content'],
                'image' => null,
            ]);
            /* ---------------------------
                ▽ 画像アップ時の処理 ▽
            --------------------------- */
            $filePath = storage_path('app/public/image/'); // ストレージフォルダ取得
            $filename = date('Ymd_His') . basename($credentials['image']) . '.jpg'; // ファイルネーム取得
            return response()->json($filename , 200);

            /* ▽ リサイズ・エンコード・圧縮処理 ▽ */
            \Image::make($credentials['image'])->resize(
                800,
                null,
                function ($constraint) {
                    $constraint->aspectRatio(); // 縦横比を保持
                    $constraint->upsize(); // 小さい画像まま
                }
            )->encode('jpg')->save($filePath . $filename, 70); // 圧縮比率70
            $post->image = $filename;
            $post->save();
            return response()->json($post, 200);
        } else {
            return response()->json("失敗", 200);
        }
    }
    /* ------------------------------------ 
        ▽ POST Q&A 詳細 ▽
    ------------------------------------ */
    public function detail($id)
    {
        $post = Post::findOrFail($id);
        $post->load('category', 'user');
        return $post;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
