<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home', [PostController::class, 'home']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/detail/{id}', [PostController::class, 'detail']);
Route::get('/posts/category/{id}', [PostController::class, 'category']);
Route::get('/posts/user/{id}', [PostController::class, 'user']);
Route::get('/posts/create/', [PostController::class, 'create']);
Route::post('/posts/store/', [PostController::class, 'store']);
