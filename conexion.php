<?php 
	// conetando con la base de datos
	$servidor="mysql:dbname=crud;host=localhost";
	$user="root"; 
	$pass="vicykei456$";

	try {
		$pdo= new PDO($servidor, $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")); 
		
	} catch (PDOException $e) {
		echo "conexion fallida".$e->getMessage();
	}


 ?>