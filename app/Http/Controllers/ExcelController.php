<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\SEA;
class ExcelController extends Controller
{
    public function uploadAndProcess(Request $request)
    {
        $file = $request->file('SEA.xls');
        $path = $file->store('uploads');

        $data = Excel::toCollection(new SEA, storage_path('app/'.$path));
        $processedData = $data[0]->map(function ($row) {
            return [
                'x' => $row[0],
                'y' => $row[1],
            ];
        });

        Inertia::render('SEA',[
            'excelData' => $processedData,
        ]);

        return redirect()->route('show.excel.data');
    }
}
