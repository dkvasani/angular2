<?php

header('Access-Control-Allow-Origin: *');

include 'connection.php';

$data = file_get_contents('php://input');
$dataArr = json_decode($data, true);

$response = [];

$sql = "SELECT * FROM posts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    
    while($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($response);
$conn->close();
exit(); 


?>

