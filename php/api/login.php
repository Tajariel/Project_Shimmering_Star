<?php

require '../access.php';

session_start();

header('Content-Type: application/json');
header('Cache-Control: no-cache,must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

$database = new Access();

$connected_user = $database->getLoggedInfo();
if(isset($connected_user)) {
    //User already logged in
    $user_data = array("id" => $connected_user->getId(), "username" => $connected_user->getUsername(),"money"=>$connected_user->getMoney());
    echo json_encode($user_data);
}else{
    if(isset($_POST['username'])&& isset($_POST['password'])){
        $username = filter_var($_POST['username'],FILTER_SANITIZE_STRING);
        $password = filter_var($_POST['password'],FILTER_SANITIZE_STRING);
        $users_list=$database->getUsersbyUsername($username);

        foreach ($users_list as $user) {
            if ($password == $user->getPassword()){
                $user_data = array("id" => $user->getId(), "username" => $user->getUsername(),"money" => $user->getMoney());
                $_SESSION['current_user'] = $user->getId();
                echo json_encode($user_data);
            }
        }
    }else{
        echo '{}' ;
    };
}
