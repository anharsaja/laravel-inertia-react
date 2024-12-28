<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'home']);
});
Route::get('/create', function () {
    return Inertia::render('Create', ['name' => 'create']);
});

// Route::inertia('/', 'Home');