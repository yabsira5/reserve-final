<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();




$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
$city = $_GET['city'];
$cheapestPrice = $_GET['cheapestPrice'];
$price = $_GET['price'];

        //List allHotel by city from database
        $sql = "SELECT * from hotel where city='".$city."' ";
        $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($price) && isset($cheapestPrice)){
                // grouping them by there price range and ordering by there rating
                $sql .= "OR cheapestPrice='".$cheapestPrice."' AND price='".$price."'
                order by rating DESC, distance ASC  ";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);

            }else{
               
                $hotels = "sorry Hotel not found";

            }

        echo json_encode($hotels);
        break;
    }
?>