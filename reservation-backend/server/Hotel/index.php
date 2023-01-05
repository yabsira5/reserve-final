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
        $sql = "SELECT * FROM hotel";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE HotelCode = :HotelCode";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':HotelCode', $path[3]);
            $stmt->execute();
            $hotels = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $hotels = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($hotels);

        
        break;


    case "POST":
        $hotel = json_decode( file_get_contents("php://input") );
        $sql = "INSERT INTO hotel(HotelCode, name ,type ,City ,address ,distance ,photo ,title ,desc ,rating ,rooms ,cheapestPrice ,featured) 
        VALUES(null, :Username, :Email, :Country, :City, :Phone, :Password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':HotelCode', $hotel->HotelCode);
        $stmt->bindParam(':name', $hotel->name);
        $stmt->bindParam(':type', $hotel->type);
        $stmt->bindParam(':city', $hotel->city);
        $stmt->bindParam(':address', $hotel->address);
        $stmt->bindParam(':distance',$hotel->distance);
        $stmt->bindParam(':photo',$hotel->photo);
        $stmt->bindParam(':title',$hotel->title);
        $stmt->bindParam(':desc',$hotel->desc);
        $stmt->bindParam(':rating',$hotel->rating);
        $stmt->bindParam(':rooms',$hotel->rooms);
        $stmt->bindParam(':cheapestPrice',$hotel->cheapestPrice);
        $stmt->bindParam(':featured',$hotel->featured);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;   
        
        case "PUT":
        $hotele = json_decode( file_get_contents('php://input') );
        $sql1 = "UPDATE hotel SET HotelCode =:HotelCode, name =:name, type =:type, city =:city, address =:address, distance =:distance, photo =:photo, title =:title, desc =:desc , rating =:rating , rooms =:rooms, cheapestPrice =:cheapestPrice, featured =:featured WHERE HotelCode =:HotelCode";
        $stmt = $conn->prepare($sql1);
        $stmt->bindParam(':HotelCode', $hotele->HotelCode);
        $stmt->bindParam(':name', $hotele->name);
        $stmt->bindParam(':type', $hotele->type);
        $stmt->bindParam(':city', $hotele->city);
        $stmt->bindParam(':address', $hotele->address);
        $stmt->bindParam(':distance',$hotele->distance);
        $stmt->bindParam(':photo',$hotele->photo);
        $stmt->bindParam(':title',$hotele->title);
        $stmt->bindParam(':desc',$hotele->desc);
        $stmt->bindParam(':rating',$hotele->rating);
        $stmt->bindParam(':rooms',$hotele->rooms);
        $stmt->bindParam(':cheapestPrice',$hotele->cheapestPrice);
        $stmt->bindParam(':featured',$hotele->featured);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM hotel WHERE HotelCode = :HotelCode";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':HotelCode', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;

}

?>