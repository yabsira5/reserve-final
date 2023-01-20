<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-type:application/json; charset=UTF-8; multipart/form-data;");


$conn = mysqli_connect('localhost','root','','test');
echo "isset";
if (isset($_POST["RoomNo"])) {

    $RoomNo = $_POST['RoomNo'];
       $images = $_FILES['file']['name'];
        echo $images;
        $targetDir = "images/";
       
        if(!empty($images)){
            
                $targetFilePath = $targetDir . $images;
                move_uploaded_file($_FILES['file']['tmp_name'], $targetFilePath);
            
        

        $query = "UPDATE room SET img = '$images' Where RoomNo = '$RoomNo' ";

        $query_run = mysqli_query($conn, $query);

        echo "   Uploaded Successfully";

        }
        
        else
    {
            echo "   Not Inserted";
        }


 


 }

?>