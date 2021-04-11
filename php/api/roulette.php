<?php

require '../access.php';


session_start();

$lowprice=100;
$mediumprice=1000;
$highprice=5000;

$database = new Access();

$users_info = $database->getLoggedInfo();

switch($_POST['bid']){
    case ('low');
    if($users_info->getMoney() >= $lowprice){
        $database->addMoneytoUser($database->spinWheel($lowprice),$users_info->getId());
    }else{
        echo 'denied';
    }
    break;

    case('medium');
    if($users_info->getMoney() >= $mediumprice){
        $database->addMoneytoUser($database->spinWheel($mediumprice),$users_info->getId());
    }else{
        echo 'denied';
    }
    break;

    case('high');
    if($users_info->getMoney() >=$highprice){
        $database->addMoneytoUser($database->spinWheel($highprice),$users_info->getId());
    }else{
        echo 'denied';
    }
    break;
}


echo (json_encode($users_info->getMoney()));