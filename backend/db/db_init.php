<?php

# Script to create the database and table

$db = new PDO('sqlite:' . __DIR__ . '/player_mood_board.db');

$db->exec("CREATE TABLE IF NOT EXISTS moods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    emoji TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)");
