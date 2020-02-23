<?php
	header("Content-Type: application/json; charset=UTF-8");

	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$servername = "sql29.jnb2.host-h.net";
	$username = "affixnruuc_1";
	$password = "6Tf0Q2yhNbCz87cQW3ZR";
	$dbname = "affixnruuc_db1";

	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("0Connection failed: " . $conn->connect_error);
	}
?>