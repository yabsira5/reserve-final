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
        //List allRoom or by HotelCode from database
        $sql = "SELECT * FROM room";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $room = json_decode( file_get_contents("php://input") );
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE HotelCode = :HotelCode AND Booked_Status != 1 ";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':HotelCode', $path[3]);
            $stmt->execute();
            $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($rooms);

        
        break;


   
}

?>