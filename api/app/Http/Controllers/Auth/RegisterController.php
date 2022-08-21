<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class RegisterController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);
        // return response()->json(['name' => '通信成功'], 200);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['name' => Auth::user()->email], 200);
        }

        throw new Exception('アカウント作成に失敗しました。再度お試しください');
    }
}
