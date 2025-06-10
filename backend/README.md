# Backend – Player Mood Board API

This is the PHP backend for the Player Mood Board app. It stores and serves mood data submitted by soccer players after training.

## Folder Structure
```
/backend
├── /api # API handlers
├── /db # SQLite database + init script
├── /lib # Shared PHP functions
├── /public # Public entry (index.php, .htaccess)
└── router.php # Routes requests to handlers
```

## Getting Started

### 1. Requirements

- PHP 7.4+
- SQLite (included in most PHP builds)

### 2. Initialize the Database

```bash
php backend/db/db_init.php
```
This creates player_mood_board.db in the /db folder.

### 3. Start Development Server
```bash
php -S localhost:8000 -t backend/public
```
