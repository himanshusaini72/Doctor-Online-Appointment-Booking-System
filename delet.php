<?php
include 'db_connect.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);

    $sql = "DELET FROM patents WHERE id = $id;"

    if (mysqli_query($conn, $sql)) {
        echo "<script>
                alert('Appointment deleted successfully!');
                window. location.href = 'view_appoinment.php';
                </script>";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }
} else {
    echo "invalid request!";
}

mysqli_close($conn);
?>