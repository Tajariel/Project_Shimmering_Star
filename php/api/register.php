<?php
    require '../access.php';

    $database = new Access();
    if(isset($_POST['username'])&& isset($_POST['password'])){
        $username = filter_var($_POST['username'],FILTER_SANITIZE_STRING);
        $password = filter_var($_POST['password'],FILTER_SANITIZE_STRING);
        $database->registerUser($username,$password);
    }
    echo'{}';