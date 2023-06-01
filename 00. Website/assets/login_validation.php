<?php
$valid = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include 'database.php';

    $email = $con->real_escape_string($_POST['email']);
    $password = $_POST['password']; // Add this line to retrieve the password

    // Prepare and bind parameters for email check
   // $stmt = $con->prepare( "SELECT * FROM `Users` WHERE email = '$email'");
   $stmt = $con->prepare("SELECT * FROM `Users` WHERE email = ?");
   $stmt->bind_param("s", $email); 

    $stmt->execute();
    $results = $stmt->get_result();
    $user = $results->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        // Perform any additional actions or validations
        $response = array(
          'success' => true,
          'message' => 'Login successful',
        
        );
      } else {
        $response = array(
          'success' => false,
          'message' => 'Invalid credentials'
        );
      }
      
      echo json_encode($response);
    }
?>