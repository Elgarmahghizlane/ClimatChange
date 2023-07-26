<?php
namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;

class SEA implements ToCollection
{
    public function collection(Collection $rows)
    {
        $processedData = $rows->map(function ($row) {
            return [
                'column1' => $row[0],
                'column2' => $row[1],
            ];
        });

        return $processedData;
    }
}
