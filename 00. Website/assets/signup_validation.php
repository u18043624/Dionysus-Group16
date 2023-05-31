<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include 'database.php';
    $username = $_POST['Username'];
    $f_name = $_POST['First_name'];
    $l_name = $_POST['Last_Name'];
    $password = $_POST['psw'];
    $email = $_POST['email'];
    $date = $_POST['DateofBirth'];
    $sql_username = "SELECT * FROM `Users` WHERE username = '$username'";
    $sql_email = "SELECT * FROM `Users` WHERE email = '$email'";

    $results_user = mysqli_query($con, $sql_username);
    $results_email = mysqli_query($con, $sql_email);
    $num_usernames = mysqli_num_rows($results_user);
    $num_emails = mysqli_num_rows($results_email);

    function generateUserID()
    {
        $timestamp = time();
        $randomNumber = rand(10, 99);
        $userID = $randomNumber ;
        return $userID;
    }
    function calculateAge($date) {
        $currentDate = new DateTime();
        $birthDate = new DateTime($date);
        $age = $currentDate->diff($birthDate)->y;
        return $age;
    }
    $age=calculateAge($date);
    // Generate a user ID
    $id = generateUserID();

    if (strlen($password) < 8) {
        die("Password must be at least 8 characters");
    }
    if (!preg_match("/[a-z]/", $password)) {
        die("Password must contain at least one lowercase character");
    }
    if (!preg_match("/[0-9]/", $password)) {
        die("Password must have at least one number");
    }
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    if ($num_usernames > 0) {
        
        die("Oops! The username is already in use");
        
    }

    if ($num_emails > 0) {
        die("Oops! The email is already in use");
    } else {
        $sql = "INSERT INTO `Users` (username, first_name, last_name, email, password, date_of_birth, user_ID ,age) 
                VALUES ('$username', '$f_name', '$l_name', '$email', '$password_hash', '$date', '$id' ,$age)";

        $results =mysqli_query($con ,$sql); 
        if($results){
      echo "signed in successfull";
      header("Location: login.php");
        }else{
            die(mysqli_error($con));
        }
    }
}
?>
