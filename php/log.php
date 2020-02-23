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


		$sql = "INSERT INTO `SocialCycleData` (`id`, `date`, `profile`) VALUES (NULL, CURRENT_TIMESTAMP, '$val')";

	if ($conn->query($sql) === TRUE) {
	    echo "1";
	} else {
	    echo "0" . $sql . "<br>" . $conn->error;
	}

	$conn->close();
?>