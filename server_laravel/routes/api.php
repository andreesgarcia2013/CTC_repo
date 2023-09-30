<?php

use App\Http\Controllers\LikeController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('v1')->group(function () {
    Route::prefix('task')->controller(TaskController::class)->group(function () {
        Route::get('/tasks', 'index');
        Route::post('/create', 'store');
        Route::delete('/delete/{id}', 'destroy');
    });
    Route::prefix('like')->controller(LikeController::class)->group(function () {
        Route::post('/', 'store');
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
