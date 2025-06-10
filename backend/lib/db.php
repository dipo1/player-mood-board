<?php

# Reusable PDO connection logic

function getDB(): PDO {
  return new PDO('sqlite:' . __DIR__ . '/../db/player_mood_board.db');
}
