<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TeacherController;

Route::post('/logout', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth:sanctum');

Route::get('/teachers', [TeacherController::class, 'index']);
Route::post('/teachers', [TeacherController::class, 'store']);
Route::get('/teachers/{teacher}', [TeacherController::class, 'show']);
Route::put('/teachers/{teacher}', [TeacherController::class, 'update']);
Route::delete('/teachers/{teacher}', [TeacherController::class, 'destroy']);

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
