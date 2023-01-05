<?php
header("Access-Control-Allow-Headers: *");
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
 header("Access-Control-Allow-Methods: *");

// // header("Access-Control-Allow-Origin: *");
// // header("Access-Control-Allow-Headers: *");
// // header("Access-Control-Allow-Headers: access");
//  header("Access-Control-Allow-Method:POST");
 header("Content-Type: application/json; charset=UTF-8");
// //  header("Access-Control-Allow-Headers: Content-type");
//  header("Access-Control-Allow-Headers: Authorization, X-Requested-With");

$con = mysqli_connect("localhost:3306","root","");
mysqli_select_db($con,"test");
if($con->connect_error){
   die('Connection Failed: '.$con->connect_error);
}
else{
$data = json_decode(file_get_contents("php://input"));

$Email = trim($data->Email);
$Password = trim($data->Password);

$result = mysqli_query($con,"SELECT * from user where Email='".$Email."'
 AND Password='".$Password."'");

 $nums = mysqli_num_rows($result);
 $rs=mysqli_fetch_array($result);

 if($nums>=1){
    http_response_code(200);
    $outp = '"'. $rs["UserID"] .'"';

      // $outp .='{"Email":' . $rs["Email"] . '",';
      // $outp .='"Username":' . $rs["Username"] . '",';
      // $outp .='"Status":"200"}';

      echo $outp;
 }
 else{
    http_response_code(202);
    echo ('no account');
 }
}

?>