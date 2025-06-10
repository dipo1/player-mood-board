<?php
# Routes request to their respective file

require_once 'lib/helpers.php';

header('Content-Type: application/json');

$request = strtolower($_SERVER['REQUEST_URI']);
$method = strtolower($_SERVER['REQUEST_METHOD']);

$response = null;

$path = trim(parse_url($request, PHP_URL_PATH), '/');

$routes = array(
    array('method' => 'post', 'path' => 'mood', 'use' => 'mood_add'),
    array('method' => 'get', 'path' => 'moods','use' => 'mood_list')
);

$route = array_find($routes, function($route) use ($path, $method) {
    return strtolower($route['path']) === $path && strtolower($route['method']) === $method;
});

if($route) {
    $file_path = __DIR__.'/api/'.$route['use'].'.php';
    if(file_exists($file_path)) {
        $response = require($file_path);
    }
}

if(!$response) {
    $response = array('error' => 'Not found');
    http_response_code(404);
}

return json_encode($response);
