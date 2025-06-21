<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EventController;


// Route::get('/', [EventController::class, 'index'])->name('home');





Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('user/dashboard', function () {
        return Inertia::render('user/dashboard');
    })->name('dashboard');
});



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('user/event', function () {
        return Inertia::render('user/event');
    })->name('event');
});


Route::get('/', fn() => app(EventController::class)->index('welcome'))->name('home');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/user/event', fn() => app(EventController::class)->index('user/event'));
});





Route::post('/events', [EventController::class, 'store'])->name('events.store');


Route::get('/user-page', function () {
    return Inertia::render('user-page');
})->middleware('auth',  'is_admin:admisn');


Route::get('/sample', function () {
    return Inertia::render('sample');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
