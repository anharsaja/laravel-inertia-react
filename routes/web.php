<?php

use App\Http\Controllers\PostController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     sleep(1);
//     return Inertia::render('Home', ['name' => 'home']);
// });
// Route::get('/create', function () {
//     return Inertia::render('Create', ['name' => 'create']);
// });

Route::get("/", [PostController::class,"index"]);

Route::resource("post",PostController::class)->except("index");