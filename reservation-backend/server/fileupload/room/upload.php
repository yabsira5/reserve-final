<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-type:application/json; charset=UTF-8; multipart/form-data;");


$conn = mysqli_connect('localhost','root','','test');
echo "isset";
if (isset($_POST['title'])) {

	echo "post works";

      echo ( $_FILES['file']['name']);
     
   
   
        $HotelCode = $_POST['HotelCode'];
        $title = $_POST['title'];
        $price = $_POST['price'];
        $maxpeople = $_POST['maxpeople'];
        $disc = $_POST['disc'];
       $images = $_FILES['file']['name'];
        echo $images;
        $targetDir = "images/";
        $roomNumbers = $_POST['roomNumbers'];
      
                $targetFilePath = $targetDir . $images;
                move_uploaded_file($_FILES['file']['tmp_name'], $targetFilePath);
            

        $query = "INSERT INTO room (HotelCode ,title ,img ,price ,maxpeople ,disc ,roomNumbers ) 
        VALUES ('$HotelCode','$title','$images','$price','$maxpeople','$disc','$roomNumbers')";

        $query_run = mysqli_query($conn, $query);

        echo "   Uploaded Successfully";

        }
        
        else
    {
            echo "   Not Inserted";
        }


 

?>