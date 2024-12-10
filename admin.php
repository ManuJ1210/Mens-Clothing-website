<?php

@include 'db.php';

session_start();

if(!isset($_SESSION['admin_name'])){
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>admin page</title>

   <!-- custom css file link  -->
   <link rel="stylesheet" href="style.css">
   <style>
        body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Spartan',sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container2 {
            width: 80%;
            padding: 20px;
            border-radius: 8px;
            overflow-y: auto;
            max-height: 90vh;
            margin-top: 20px;
        }
        h1 {
            text-align: center;
            font-size: 40px;
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        td img {
            max-width: 50px;
        }
        .actions button {
            margin: 5px 0;
            padding: 8px 12px;
            border: none;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            border-radius: 4px;
        }
        .actions button:hover {
            background-color: #0056b3;
        }
        .welcome {
            margin-top: 50px;
            text-align: center;
        }
        .welcome h1 {
            color: crimson;
            border-radius: 7px;
            font-size: 60px;
        }
        .welcome span {
            color: crimson;
            border-radius: 7px;
        }
        #header {
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 20px 80px;
          
           position: sticky;
           top: 0;
           left: 0;
        }
    </style>

</head>
<body>
<section id="header" class="section-p1">
    <a href="index.html"><img src="images/logo.jpg" class="logo" width="180px" alt=""></a>
    <div class="menu-toggle" id="menu-toggle">&#9776;</div>
    <div>
        <ul id="navbar">
         
           
            <button id="checkout-btn" onclick="window.location.href='logout.php';">Logout</button>
        </ul>
    </div>
</section>
    <div class="welcome">
        <h1>welcome <span><?php echo $_SESSION['admin_name'] ?></span></h1>

    </div>
    <div class="container2">
        <h1>Admin Page</h1>
        <div id="orders">
            <!-- Orders will be dynamically inserted here -->
        </div>
    </div>
    <script src="admin.js"></script>
</body>
</html>
