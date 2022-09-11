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
        $credentials = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'email']
        ]);
        $user =  User::find(Auth::user()->id);
        $user->name = $credentials['name'];
        $user->email = $credentials['email'];
        $user->save();
        return response()->json($user->password, 200);
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
