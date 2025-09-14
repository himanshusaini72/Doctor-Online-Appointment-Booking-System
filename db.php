<?php
$servername = "localhost";
$username = "root";
$password = "";

//create a connection //
$conn = mysqli_connect ($servername, $username, $password);

//die if was connection not successfull!//
if (!$conn) {
    die ("sorry we faild to connect:" . mysqli_connect_error());
} else {
    echo "connection was successful. <br>";
}

//create database//
$sql = "CREATE DATABASE doctor_appointment_db";

$result = mysqli_query($conn, $sql);

if($result) {
    echo "the databse created was successfully!<br>";
} else {
    echo "the database was not created successfully beacuse of this error------>" . mysqli_error($conn);
}