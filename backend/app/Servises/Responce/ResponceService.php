<?php

namespace App\Servises\Responce;

class ResponceService
{
    public static function sendJsonRespon($status, $data = [], $code = 200, $errors = [])
    {
        return response()->json([
            "status" => $status,
            "data" => $data,
            "errors" => $errors
        ], $code );
    }
}
