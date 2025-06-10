<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

// Register global error and exception handlers
set_exception_handler(function (Throwable $e) {
    http_response_code(500);
    echo json_encode(array(
        'error' => 'Internal Server Error',
        // 'message' => $e->getMessage(), // ← Uncomment this only in dev
    ));
    exit;
});

set_error_handler( function ($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

// Optional: handle fatal errors on shutdown
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Fatal Error',
            // 'details' => $error['message'] // Uncomment for debugging
        ]);
    }
});

// Handle preflight requests early
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$response = include( '../router.php');

echo $response;

exit;
