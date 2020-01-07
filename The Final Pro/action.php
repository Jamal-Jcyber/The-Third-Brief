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
    echo 'Full name is :' .$completeName. "<br/>";
    $phone = $_POST['phone'];
    echo 'Phone number is :' .$phone. "<br/>";
    $mail = $_POST['email'];
    echo 'Your address email is :' .$mail. "<br/>";
    $subjects = $_POST['subject'];
    echo 'The subject ?' .$subjects. "<br/>";
    $message = $_POST['message'];
    echo 'THE FULL MESSAGE IS HERE :' .$message. "<br/>";
}


?>
<button><a href="index.html">GO BACK HOME</a></button>
</body>
</html>











