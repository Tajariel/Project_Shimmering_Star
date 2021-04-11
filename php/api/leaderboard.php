<?php

require '../access.php';

session_start();

header('Content-Type: application/json');
header('Cache-Control: no-cache,must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

$database = new Access();

$users_info = $database->getLeaderboardUser();
echo (json_encode($users_info));

