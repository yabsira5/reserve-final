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
        $sql = "SELECT booking.BookingID,user.Username,user.Email,user.Phone,room.RoomNo,room.Booked_Status,room.roomNumbers,booking.BookingDate,booking.CheckIn,booking.CheckOut,booking.NumAdults,booking.NumChildren FROM booking
        inner join room on booking.RoomNo=room.RoomNo
        inner join user on booking.UserID=user.UserID";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE booking.HotelCode = :HotelCode";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':HotelCode', $path[3]);
            $stmt->execute();
            $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($books);

        
        break;


    case "POST":
        $book = json_decode( file_get_contents("php://input") );
        $sql = "INSERT INTO booking(BookingID, HotelCode ,UserID ,RoomNo ,BookingDate ,CheckIn ,CheckOut ,NumAdults ,NumChildren) 
        VALUES(:BookingID, :HotelCode, :UserID, :RoomNo, Now(), :CheckIn, :CheckOut, :NumAdults, :NumChildren)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':BookingID', $book->BookingID);
        $stmt->bindParam(':HotelCode', $book->HotelCode);
        $stmt->bindParam(':UserID', $book->UserID);
        $stmt->bindParam(':RoomNo', $book->RoomNo);
        // $stmt->bindParam(':BookingDate', $book->BookingDate);
        $stmt->bindParam(':CheckIn',$book->CheckIn);
        $stmt->bindParam(':CheckOut',$book->CheckOut);
        $stmt->bindParam(':NumAdults',$book->NumAdults);
        $stmt->bindParam(':NumChildren',$book->NumChildren);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;   
        
        case "PUT":
        $booke = json_decode( file_get_contents('php://input') );
        $sql1 = "UPDATE booking SET BookingID =:BookingID, HotelCode =:HotelCode, UserID =:UserID, RoomNo =:RoomNo, BookingDate =:BookingDate, CheckIn =:CheckIn, CheckOut =:CheckOut, :NumAdults, :NumChildren WHERE BookingID =:BookingID";
        $stmt = $conn->prepare($sql1);
        $stmt->bindParam(':BookingID', $booke->BookingID);
        $stmt->bindParam(':HotelCode', $booke->HotelCode);
        $stmt->bindParam(':UserID', $booke->UserID);
        $stmt->bindParam(':RoomNo', $booke->RoomNo);
        $stmt->bindParam(':BookingDate', $booke->BookingDate);
        $stmt->bindParam(':CheckIn',$booke->CheckIn);
        $stmt->bindParam(':CheckOut',$booke->CheckOut);
        $stmt->bindParam(':NumAdults',$booke->NumAdults);
        $stmt->bindParam(':NumChildren',$booke->NumChildren);


        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM booking WHERE BookingID = :BookingID";
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