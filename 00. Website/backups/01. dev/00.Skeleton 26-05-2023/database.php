<?php
// database connection
$HOSTNAME='wheatley.cs.up.ac.za';
$USERNAME ='u21434965';
$PASSWORD ='Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP';
$DATABASE ='u21434965_dionysus';

try {
    $con = mysqli_connect($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
    if (!$con) {
        throw new Exception(mysqli_connect_error());
    }
} catch (Exception $e) {
    die("Connection failed: " . $e->getMessage());
}



?>