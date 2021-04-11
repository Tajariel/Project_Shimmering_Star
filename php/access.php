<?php

include 'user.php';

class Access {
    private $mysqli;

    public function __construct() {
        $this->mysqli = new mysqli('mysql-shimmeringstar.alwaysdata.net','231557','PenguinLogistics','shimmeringstar_db');
        if ($this->mysqli->connect_errno) {
            echo "c'est de la merde";
        }
    }

    public function registerUser(string $username, string $password) {
        $prepared_query = $this->mysqli->prepare('INSERT INTO user (username,password) VALUES(?, ?)');
        $prepared_query->bind_param('ss',$username,$password);
        if(!$prepared_query->execute()){
            error_log("Erreur dans l'ajout d'un nouvel utilisateur(file: access.php)",3,"logs");
        }
    }

    public function getUserById(int $id): User {
        $prepared_query = $this->mysqli->prepare('SELECT * FROM user WHERE id= ?');
        $prepared_query->bind_param('i',$id);
        if(!$prepared_query->execute()){
            error_log("Erreur dans la recherche d'un User par id (file:access.php)",3,"logs");     
        }
        $result = $prepared_query->get_result();
        $user_data = $result->fetch_array(MYSQLI_ASSOC);
        return new User($user_data['id'],$user_data['username'],$user_data['password'],$user_data['money']);
    }

    public function getLeaderboardUser(): array {
        $prepared_query = $this->mysqli->prepare('SELECT username,money FROM user ORDER BY money DESC');
        $prepared_query->execute();
        $result= $prepared_query->get_result();
        $users_data = $result->fetch_all(MYSQLI_ASSOC);
        return $users_data;

    }

    public function spinWheel($money): int {
        $roll = rand(0,10);
        switch($roll){
            case($roll<'1');
                $roll_result = $money*2;
                break;

            case($roll>='1' && $roll <'3');
                $roll_result=$money*1;
                break;

            case($roll>='3' && $roll <'6');
                $roll_result=$money*0.5;
                break;

            case($roll>='6' && $roll <= '10');
                $roll_result=$money*-1;
                break;
        }
        return $roll_result;
    }

    public function addMoneytoUser(int $money, int $id){
        $prepared_query= $this->mysqli->prepare('UPDATE user SET money = money + ? WHERE id=?');
        $prepared_query->bind_param('ii',$money,$id);
        $prepared_query->execute();

    }

    public function getUsersByUsername(string $username): ?array {
        $prepared_query = $this->mysqli->prepare('SELECT * FROM user WHERE username = ?');
        $prepared_query->bind_param('s', $username);
        if(!$prepared_query->execute()) {
            error_log("Erreur dans la recherche d'un User par username (file: DatabaseAccess.php)", 3, "logs");
        }
        $result = $prepared_query->get_result();
        while ($user_data = $result->fetch_array(MYSQLI_ASSOC)) {
            $users_array[] = new User($user_data['id'], $user_data['username'], $user_data['password'],$user_data['money']);
        }
        if (isset($users_array)) {
            return $users_array;
        }
        return null;
    }



    public function getLoggedInfo(): ?User {
        if(!is_int($_SESSION['current_user'])) {
            //no one is logged in
            return null;
        }

        try {
            return $this->getUserById($_SESSION['current_user']);
        } catch(Exception $e) {
            // Stored logged in user is invalid, fix this
            unset($_SESSION['current_user']);
            return null;
        }
    }

    public function __destruct(){
        $this->mysqli->close();
    }
}