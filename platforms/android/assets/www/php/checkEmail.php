<?php
// The back-end then will determine if the username is available or not,
// and finally returns a JSON { "valid": true } or { "valid": false }
// The code bellow demonstrates a simple back-end written in PHP

// Get the username from request
$username = $_POST['email'];

// Check its existence (for example, execute a query from the database) ...
$isAvailable = true; // or false

// Finally, return a JSON
echo json_encode(array('valid' => $isAvailable));