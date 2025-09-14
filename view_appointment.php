<?php
include 'db_connect.php';

$sql = "SELECT * FROM patients ORDER BY appointment_date, appointment_time ASC";
$result = mysqli_query($conn, $sql);

echo "<h2>📅 All Appointments</h2>";
echo "<table border='1' cellpadding='10'>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Doctor</th>
<th>Date</th>
<th>Time</th>
<th>Reason</th>
</tr>";

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
        <td>".$row['patient_id']."</td>
        <td>".$row['name']."</td>
        <td>".$row['email']."</td>
        <td>".$row['phone']."</td>
        <td>".$row['doctor']."</td>
        <td>".$row['appointment_date']."</td>
        <td>".$row['appointment_time']."</td>
        <td>".$row['reason']."</td>
        <td>
            <a href='delete.php?id=".$row['patient_id']."' onclick=\"return confirm('Are you sure you want to delete this appointment?');\">Delete</a>
        </td>
        <td>
            <a href='edit.php?id=".$row['patient_id']."'>Edit</a>
        </td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='8'>No Appointments Found</td></tr>";
}
echo "</table>";

mysqli_close($conn);
?>