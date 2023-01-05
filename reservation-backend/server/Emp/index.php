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
        $sql = "SELECT * FROM employee";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE EmployeeID = :EmployeeID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':EmployeeID', $path[3]);
            $stmt->execute();
            $Emps = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $Emps = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($Emps);

        
        break;


    case "POST":
        $Emp = json_decode( file_get_contents("php://input") );
        $sql = "INSERT INTO employee(EmployeeID, HotelCode ,FirstName ,LastName ,Email ,Password) 
        VALUES(:EmployeeID, :HotelCode, :FirstName, :LastName, :Email, :Password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':EmployeeID', $Emp->EmployeeID);
        $stmt->bindParam(':HotelCode', $Emp->HotelCode);
        $stmt->bindParam(':FirstName', $Emp->FirstName);
        $stmt->bindParam(':LastName', $Emp->LastName);
        $stmt->bindParam(':Email', $Emp->Email);
        $stmt->bindParam(':Password',$Emp->Password);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;   
        
        case "PUT":
        $emp = json_decode( file_get_contents('php://input') );
        $sql1 = "UPDATE employee SET EmployeeID =:EmployeeID, HotelCode =:HotelCode, FirstName =:LastName, Email =:Email,  Password =:Password WHERE EmployeeID =:EmployeeID";
        $stmt = $conn->prepare($sql1);
        $stmt->bindParam(':EmployeeID', $emp->EmployeeID);
        $stmt->bindParam(':HotelCode', $emp->HotelCode);
        $stmt->bindParam(':FirstName', $emp->FirstName);
        $stmt->bindParam(':LastName', $emp->LastName);
        $stmt->bindParam(':Email', $emp->Email);
        $stmt->bindParam(':Password', $emp->Password);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM employee WHERE EmployeeID = :EmployeeID";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':EmployeeID', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;

}

?>