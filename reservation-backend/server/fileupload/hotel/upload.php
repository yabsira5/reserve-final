<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-type:application/json; charset=UTF-8; multipart/form-data;");


$conn = mysqli_connect('localhost','root','','test');
echo "isset";
if (isset($_POST["name"])) {

	echo "post works";

      echo ( $_FILES['file']['name']);
     
   
   
        $name = $_POST['name'];
        $type = $_POST['type'];
        $city = $_POST['city'];
        $address = $_POST['address'];
        $distance = $_POST['distance'];
       $images = $_FILES['file']['name'];
        echo $images;
        $fileName = implode(",",$images);
        echo $fileName;
        $targetDir = "images/";
        $title = $_POST['title'];
        $disc = $_POST['disc'];
        $rating = $_POST['rating'];
        $rooms = $_POST['rooms'];
        $cheapestPrice = $_POST['cheapestPrice'];
        $featured = $_POST['featured'];

      

        if(!empty($images)){
            foreach ($images as $key => $val) {
                $targetFilePath = $targetDir . $val;
                move_uploaded_file($_FILES['file']['tmp_name'][$key], $targetFilePath);
            }
        

        $query = "INSERT INTO hotel (name ,type ,City ,address ,distance ,photo ,title ,disc ,rating ,rooms ,cheapestPrice ,featured) 
        VALUES ('$name','$type','$city','$address','$distance','$fileName','$title','$disc','$rating','$rooms','$cheapestPrice','$featured')";

        $query_run = mysqli_query($conn, $query);

        echo "   Uploaded Successfully";

        }
        
        else
    {
            echo "   Not Inserted";
        }


 


 }

?>