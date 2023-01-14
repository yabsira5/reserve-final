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
       
        if(isset($price) && isset($cheapestPrice) && is_numeric($price)){
            // ordering them by there price range , rating and distance
            $sql .= " AND (price BETWEEN '".$cheapestPrice."' AND '".$price."') 
            ORDER BY cheapestPrice = '".$cheapestPrice."' DESC,
             rating DESC, distance ASC LIMIT 0, 10  ";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }else{

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        echo json_encode($hotels);
        break;
    }
?>