<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['name' => Auth::user()->email], 200);
        }

        throw new Exception('ログインに失敗しました。再度お試しください');
    }
    /**
     * ログアウトテスト
     */
    public function logout(Request $request)
    {
        // return response(['message' => 'You have been successfully logged out.'], 200);
        // return response()->json(['name' => Auth::user()->email], 200);
        // logout

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(true);
        // Auth::guard('web')->logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();
        // return response()->json(true);
    }
}
