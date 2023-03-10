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
        $sql = "SELECT room.RoomNo, room.HotelCode, room.title, room.price, hotel.name 
        FROM room
        inner join hotel on room.HotelCode = hotel.HotelCode";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $room = json_decode( file_get_contents("php://input") );
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE RoomNo = :RoomNo";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':RoomNo', $path[3]);
            $stmt->execute();
            $rooms = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($rooms);

        
        break;


    case "POST":
        $room = json_decode( file_get_contents("php://input") );
        $sql = "INSERT INTO room(RoomNo, HotelCode ,title ,price ,maxpeople ,disc ,roomNumbers) 
        VALUES(:RoomNo, :HotelCode, :title, :price, :maxpeople, :disc, :roomNumbers)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':RoomNo', $room->RoomNo);
        $stmt->bindParam(':HotelCode', $room->HotelCode);
        $stmt->bindParam(':title', $room->title);
        $stmt->bindParam(':price', $room->price);
        $stmt->bindParam(':maxpeople', $room->maxpeople);
        $stmt->bindParam(':disc',$room->disc);
        $stmt->bindParam(':roomNumbers',$room->roomNumbers);
        

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;   
        
        case "PUT":
        $roome = json_decode( file_get_contents('php://input') );
        $sql1 = "UPDATE room SET RoomNo =:RoomNo, HotelCode =:HotelCode, title =:title, price =:price, maxpeople =:maxpeople, disc =:disc, roomNumbers =:roomNumbers, Booked_Status =:Booked_Status WHERE RoomNo =:RoomNo";
        $stmt = $conn->prepare($sql1);
        $stmt->bindParam(':RoomNo', $roome->RoomNo);
        $stmt->bindParam(':HotelCode', $roome->HotelCode);
        $stmt->bindParam(':title', $roome->title);
        $stmt->bindParam(':price', $roome->price);
        $stmt->bindParam(':maxpeople', $roome->maxpeople);
        $stmt->bindParam(':disc',$roome->disc);
        $stmt->bindParam(':roomNumbers',$roome->roomNumbers);
        $stmt->bindParam(':Booked_Status',$roome->Booked_Status);


        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM room WHERE RoomNo = :RoomNo";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':RoomNo', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;

}

?>