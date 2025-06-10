<?php

# Handles GET /moods?date=YYYY-MM-DD

require_once '../lib/db.php';

$date = $_GET['date'] ?? date('Y-m-d');

$db = getDB();

$stmt = $db->prepare(" SELECT emoji, COUNT(*) as count FROM moods WHERE DATE(timestamp) = ? GROUP BY emoji");

$stmt->execute(array($date));

$result = array('happy' => 0, 'neutral' => 0, 'sad' => 0);

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  $result[$row['emoji']] = (int)$row['count'];
}

return $result;
