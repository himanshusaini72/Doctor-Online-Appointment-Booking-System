<?php
include 'db_connect.php';

//check if form submitted 
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $doctor = $_POST['doctor'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $reason = $_POST['reason'];


    //insert query
    $sql = "INSERT INTO patients(name, email, phone, address, doctor, appointment_date, appointment_time, reason)
             VALUES ('$name', '$email', '$phone', '$address', '$doctor', '$date', '$time', '$reason')";

            if (mysqli_query($conn, $sql)) {
                echo "<h2> ✅ appointment booked successfully!</h2>";
                echo "<a href = 'index.html'>Go back </a>";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
}

//close connection
mysqli_close($conn);
?>

