<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    try {
        DB::connection()->getPdo();
        return "Database connection established successfully!";
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage();
    }
});
