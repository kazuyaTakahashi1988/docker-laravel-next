<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request): JsonResponse
    {
        
        $user =  User::find(Auth::user()->id);
        if(isset($request->name)){
            $user->name = $request->name;
        }
        if(isset($request->name)){
            $user->email = $request->email;
        }
        /* ▽ 画像アップ時の処理 ▽ */
        if ($request->hasFile('image')) {

            /* 保存フォルダ、保存ネームの指定 */
            $filePath = storage_path('app/public/icon/');
            $filename = date('Ymd_His') . basename($request->image) . '.jpg';

            /* リサイズ・エンコード・圧縮処理 */
            \Image::make($request->image)->resize(
                800,
                null,
                function ($constraint) {
                    $constraint->aspectRatio(); // 縦横比を保持
                    $constraint->upsize(); // 小さい画像まま
                }
            )->encode('jpg')->save($filePath . $filename, 70); // 圧縮比率70

            $user->icon_img = $filename;
        }

        $user->save();
        return response()->json($user, 200);
    }
    public function password(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'password' => 'required',
            'passwordNew' => 'required',
            'passwordConform' => 'required',
        ]);

        $passwordNew = Hash::make($credentials['passwordNew']);
        $user = User::find(Auth::user()->id);

        if (Hash::check($credentials['password'], $user->password)) {
            if ($credentials['passwordNew'] == $credentials['passwordConform']) {
                $user->password = $passwordNew;
                $user->save();
                return response()->json("パスワードを変更しました！！", 200);
            } else {
                return response()->json("新規のパスワード確認が違います！！", 200);
            }
        } else {
            return response()->json("現在のパスワードが違います！！", 200);
        }

        return response()->json($user->password, 200);
    }
}
