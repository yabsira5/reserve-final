<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-type:application/json; charset=UTF-8; multipart/form-data;");


$conn = mysqli_connect('localhost','root','','test');
echo "isset";
if (isset($_POST["HotelCode"])) {

    $HotelCode = $_POST['HotelCode'];
       $images = $_FILES['file']['name'];
        echo $images;
        $fileName = implode(",",$images);
        echo $fileName;
        $targetDir = "images/";
       
        if(!empty($images)){
            foreach ($images as $key => $val) {
                $targetFilePath = $targetDir . $val;
                move_uploaded_file($_FILES['file']['tmp_name'][$key], $targetFilePath);
            }
        

        $query = "UPDATE hotel SET photo = '$fileName' Where HotelCode = '$HotelCode' ";

        $query_run = mysqli_query($conn, $query);

        echo "   Uploaded Successfully";

        }
        
        else
    {
            echo "   Not Inserted";
        }


 


 }

?>