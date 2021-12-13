<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "kieswijzer";

    //connectie maken
    $conn = new mysqli($servername, $username, $password, $dbname);

    //check connectie
    if($conn->connect_error){
        die("Connection mislukt" .$conn->connect_error);
    }
    else{
        echo "connectie succesvol";
    }