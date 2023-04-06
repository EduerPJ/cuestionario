<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/form', [FormController::class, 'index'])->name('form.index');
    Route::get('/form/{form}/show', [FormController::class, 'show'])->name('form.show');
    Route::get('/form/create', [FormController::class, 'create'])->name('form.create');
    Route::post('/form/create', [FormController::class, 'store'])->name('form.store');
    Route::patch('/form', [FormController::class, 'update'])->name('form.update');
    Route::delete('/form', [FormController::class, 'destroy'])->name('form.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/question/{id}/show', [QuestionController::class, 'show'])->name('question.show');
    Route::get('/question/create', [QuestionController::class, 'create'])->name('question.create');
    Route::post('/question/create', [QuestionController::class, 'store'])->name('question.store');
    Route::patch('/question', [QuestionController::class, 'update'])->name('question.update');
    Route::delete('/question', [QuestionController::class, 'destroy'])->name('question.destroy');
});

require __DIR__.'/auth.php';
