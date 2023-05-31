<?php 
include 'signup_validation.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="Stylesheet" href = "Signup.css">
</head>
<body>
    <div id="id01" class="modal">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="modal-content" action="signup_validation.php" method="post">
          <div class="container">
            <h1>Sign Up</h1>
            <p>Sign up and discover your inner wine connoiseur</p>
            <hr>

            <label for="Username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="Username" required><br>

            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required><br>

            <label for="First_name"><b>First_name</b></label>
            <input type = "text" placeholder="Enter First Name" name="First_name" required><br>
      
            <label for="Last_Name"><b>Last_Name</b></label>
            <input type = "text" placeholder="Enter Last Name" name="Last_Name" required><br>
            
            <label for="DateofBirth"><b>Date of Birth</b></label>
            <input type = "date" placeholder="Enter Date of Birth" name="DateofBirth" required><br>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required><br>
      
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required><br>
      
            <p>By creating an account you agree to our <a href="Terms_&_privacy.html" style="color:dodgerblue">Terms & Privacy</a>.</p>
      
            <div class="clearfix">
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
              <button type="submit" class="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
</body>
</html>