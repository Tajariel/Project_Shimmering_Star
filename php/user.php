<?php

class User{
    private $id;
    private $username;
    private $password;
    private $money;

    public function __construct(int $id, string $username, string $password, int $money){
        $this->id = $id;
        $this->username = $username;
        $this->password = $password;
        $this->money=$money;
    }
    
    public function getId() : int{
        return $this->id;
    }

    public function getUsername():string{
        return $this->username;
    }

    public function getPassword():string{
        return $this->password;
    }

    public function getMoney():int{
        return $this->money;
    }
}