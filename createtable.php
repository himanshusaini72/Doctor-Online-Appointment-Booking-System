<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "doctor_appointment_db";

//create a connection
$conn = mysqli_connect ($servername, $username,$password, $database);

//die if was connection not successful!
if (!$conn) {
    die("sorry we failed to connect:" . mysqli_connect_error());
} else {
    echo "connection was successful! <br>";
}

//cretate table in the databse 
$servername = "localhost";
$username = "root";
$password = "";
$database = "doctor_appointment_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connection successful!<br>";

// Create table query
$sql = "CREATE TABLE patients (
    patient_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    doctor VARCHAR(50) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

// Run query
if (mysqli_query($conn, $sql)) {
    echo "Table patients created successfully!";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
