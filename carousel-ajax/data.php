<?php
  // Maak contact met de mysql-server
  include("./connect_db.php");

  // Maak de sql-query
  $sql = "SELECT * FROM `ajax` WHERE `category` = '{$_POST["category"]}'";

  // Vuur de query af op de database
  $result = mysqli_query($conn, $sql);

  // Zet het resultaat om naar een associatief array
  $records = mysqli_fetch_all($result, MYSQLI_ASSOC);

  // Zet het associatieve array om naar een array van javascriptobjecten
  echo json_encode($records);
?>