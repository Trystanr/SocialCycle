<?php
	header("Content-Type: application/json; charset=UTF-8");
	$val = $_GET["value"];

	include 'dbConnect.php';

	// Check connection
	if ($conn->connect_error) {
	    die("0Connection failed: " . $conn->connect_error);
	} else {
		// echo "DB Connected";
	}


	$sql = "SELECT TOP 1 * FROM `SocialCycleData` ORDER BY id DESC";

	$sql = "SELECT * FROM SocialCycleData ORDER BY id DESC LIMIT 1 ";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
	        echo $row["stars"].$row["id"]. "," . $row["profile"];
	    }
	} else {
	    echo "0";
	}

	$conn->close();
?>