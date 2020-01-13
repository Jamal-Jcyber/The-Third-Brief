<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

<h1>Your Credential That Your inserted </h1>
<?php
  //check if the form submited
  if (isset($_POST['submit'])) {

    //DECLARING &  display the results

    $completeName = $_POST['name'];
    echo 'FULL NAME :' .$completeName. "<br/><br>";
    $phone = $_POST['phone'];
    echo 'PHONE NUMBER :' .$phone. "<br/><br>";
    $mail = $_POST['email'];
    echo 'EMAIL :' .$mail. "<br/><br>";
    $subjects = $_POST['subject'];
    echo 'SUBJECT ?' .$subjects. "<br/><br>";
    $message = $_POST['message'];
    echo 'MESSAGE :' .$message. "<br/><br>";
}


?>
<button><a href="index.html">HOME</a></button>
</body>
</html>











