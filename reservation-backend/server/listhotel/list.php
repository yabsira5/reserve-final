<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");


//Connect to database

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"test");

// $data = json_decode(file_get_contents("php://input"));
// //accept data and decode

// $city = trim($data->city);
// $cheapestPrice = trim($data->cheapestPrice);
// $price=trim($data->price);
$city = $_GET['city'];
$cheapestPrice = $_GET['cheapestPrice'];
$price = $_GET['price'];

$result = mysqli_query($con,"SELECT * from hotel where 
 city='".$city."' 
 group by cheapestPrice='".$cheapestPrice."' AND price='".$price."'
 order by rating desc ");
//Check if user/Admin exsist in the database

 $nums = mysqli_num_rows($result);
//  $rs=mysqli_fetch_array($result);
//  echo json_encode($rs);
$outp = "";
 if($nums>=1){
    while($rs = mysqli_fetch_array($result)){
        if ($outp != "") {$outp .= ",";}
        $outp .='{"name":' . $rs["name"] . '",';
            $outp .='"type":' . $rs["type"] . '",';
            $outp .='"city":' . $rs["city"] . '",';
            $outp .='"address":' . $rs["address"] . '",';
            $outp .='"distance":' . $rs["distance"] . '",';
            $outp .='"photo":' . $rs["photo"] . '",';
            $outp .='"title":' . $rs["title"] . '",';
            $outp .='"disc":' . $rs["disc"] . '",';
            $outp .='"rating":' . $rs["rating"] . '",';
            $outp .='"cheapestPrice":' . $rs["cheapestPrice"] . '",';
            $outp .='"featured":' . $rs["featured"] . '"}';
    }
  

      echo json_encode($outp);
 }
 else{
    http_response_code(202);
 }

    ?>