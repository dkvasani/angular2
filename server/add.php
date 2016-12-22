<?php

header('Access-Control-Allow-Origin: *');

include 'connection.php';

$data = file_get_contents('php://input');
$dataArr = json_decode($data, true);

$response = [];
if(!empty($dataArr['title']) && !empty($dataArr['body'])) {
    $sql = "INSERT INTO posts (title, body, created, modified)
VALUES ('". $dataArr['title'] . "', '". $dataArr['body'] . "', '". date("Y-m-d H:i:s") . "', '".  date("Y-m-d H:i:s")  . "')";

if ($conn->query($sql) === TRUE) {
    //$id = mysql_insert_id();
    $response['status'] = 1;
    $response['message'] = "New record created successfully";
    $dataArr['id'] = $conn->insert_id;
    $response['data'] = $dataArr;
    echo json_encode($response);
} else {
     $response['status'] = 0;
        $response['error_msg'] = "Data Saving Error";
}

$conn->close();        
} else {
    $response['status'] = 0;
        $response['error_msg'] = "Validation error"; 
}
exit(); 


?>

