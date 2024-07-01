<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/login', function () {
    return view('app'); 
});

Route::get('/register', function () {
    return view('app'); 
});

Route::get('/admin/dashboard', function () {
    return view('app'); 
});

Route::get('/teacher/dashboard', function () {
    return view('app');
});

Route::get('/student/dashboard', function () {
    return view('app'); 
});


Route::get('{any}', function () {
    return view('app'); 
})->where('any', '.*');
