<?php

# Handles POST /mood

require_once '../lib/db.php';

$data = json_decode(file_get_contents('php://input'), true);

$emoji = $data['emoji'] ?? '';

$valid = array('happy', 'neutral', 'sad');

if (in_array($emoji, $valid)) {
    $db = getDB();

    $stmt = $db->prepare("INSERT INTO moods (emoji) VALUES (?)");

    $stmt->execute(array($emoji));

    return array('status' => 'success');
} else {
    http_response_code(400);
    return array('error' => 'Invalid emoji');
}

