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
        $sql = "SELECT * FROM user";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE UserID = :UserID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':UserID', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);

        
        break;


    case "POST":
        $user = json_decode( file_get_contents("php://input") );
        $sql = "INSERT INTO user(UserID, Username ,Email ,Country ,City ,Phone ,Password) 
        VALUES(null, :Username, :Email, :Country, :City, :Phone, :Password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':Username', $user->Username);
        $stmt->bindParam(':Email', $user->Email);
        $stmt->bindParam(':Country', $user->Country);
        $stmt->bindParam(':City', $user->City);
        $stmt->bindParam(':Phone', $user->Phone);
        $stmt->bindParam(':Password',$user->Password);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;   
        
        case "PUT":
        $user = json_decode( file_get_contents('php://input') );
        $sql1 = "UPDATE user SET Username =:Username, Email =:Email, Country =:Country, City =:City, Phone =:Phone, Password =:Password WHERE UserID =:UserID";
        $stmt = $conn->prepare($sql1);
        $stmt->bindParam(':UserID', $user->UserID);
        $stmt->bindParam(':Username', $user->Username);
        $stmt->bindParam(':Email', $user->Email);
        $stmt->bindParam(':Country', $user->Country);
        $stmt->bindParam(':City', $user->City);
        $stmt->bindParam(':Phone', $user->Phone);
        $stmt->bindParam(':Password', $user->Password);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM user WHERE UserID = :UserID";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':UserID', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;

}

?>