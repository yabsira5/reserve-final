<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
// header('Access-Control-Allow-Origin: http//:localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Method:POST");
header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-type,
// Access-Control-Allow-Headers, Authorization, X-Requested-With");
$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con,"test");
if($con->connect_error){
    die('Connection Failed: '.$con->connect_error);
}
$data = json_decode(file_get_contents("php://input"));
$Email = $data->Email;
$FirstName = $data->FirstName;
$LastName = $data->LastName;
$Password = $data->Password;

//  include 'DbConnect.php';
//  $objDb = new DbConnect;
//  $conn = $objDb->connect();
//  var_dump($conn);

if($FirstName && $LastName && $Email && $Password){
$sql = "insert into employee (
    FirstName,
    LastName,
    Email,
    Password
    )
    value (
        '$FirstName',
        '$LastName',
        '$Email',
        '$Password'
    )";

    $result = mysqli_query($con,$sql);

    if($result){
        $response['data']=array(
            'status' => 'valid'
        );
        echo json_encode($response);
    }
    else{
        $response['data']=array(
            'status'=>'invalid'
        );
        echo json_encode($response);
    }
}
?>