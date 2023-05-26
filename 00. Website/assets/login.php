


<?php
$valid =false;
if($_SERVER['REQUEST_METHOD']=='POST'){

    include 'database.php';
    $sql =sprintf( "SELECT * FROM user WHERE email='%s'" , $con->real_escape_string( $_POST["email"]));
    $results = mysqli_query($con,$sql);
    $user = $results->fetch_assoc();

    if($user){
        if(password_verify($_POST["password"], $user["password"])){
            session_start();
            $_SESSION["user_id"] = $user["id"];

          
            
            header("Location: index.php");
            exit;
        }
        $valid=true;
    }
 
}


?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
    <link rel="stylesheet" href="login.css">

</head>
<body>


<h1 class="text-center">Login</h1>

<?php
if($valid):
 ?>
 <em>Invalid login</em>
 <?php endif; ?>
<div class="container">

    <form method="post" >
       

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"   ><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" ><br><br>
        <input type="submit" value="submit">
    </form>

    <a href="signup.php"> <button id="signup"> signup  </button></a>
</div>
</body>

</html>