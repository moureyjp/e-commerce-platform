<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource("/products", ProductController::class);
Route::apiResource("/cart", CartController::class);
Route::post('/checkout', [CartController::class, "checkout"])->name('checkout');
