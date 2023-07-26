<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventLogController;
use App\Http\Controllers\ExcelController;


Route::get('/', [AppController::class, 'index']);
Route::get('/Dashboard', [DashboardController::class, 'index']);
Route::get('/EventLog', [EventLogController::class, 'index']);
Route::get('/showExcel', [ExcelController::class, 'index']);
