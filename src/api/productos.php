<?php 
	include 'funciones.php';

	$opcion = $_GET["opcion"];
	switch ($opcion) {
		case '1':
			$sql = "SELECT * FROM productos WHERE vigencia = 1";
			echo getSQL($sql);
			break;

		case '2':
			$id = $_GET["id"];
			$sql = "SELECT * FROM productos WHERE idproducto = $id";
			echo getSQL($sql);
			break;

		case '3':
			$desc = $_POST["descripcion"];
	  	$marca = $_POST["marca"];
	  	$pventa = $_POST["pventa"];
	  	$observaciones = $_POST["observaciones"];
			$sql = "INSERT INTO productos VALUES(null, '$desc', 1, '$marca', NOW(), 0, $pventa, '$observaciones', 1, NOW(), null)";
			echo putSQL($sql);
			break;

		case '4':
			$idsel = $_POST["idsel"];
			$marca = $_POST["marca"];
	  	$pventa = $_POST["pventa"];
	  	$observaciones = $_POST["observaciones"];
			break;

		case '5':
			$idsel = $_GET["id"];
			$sql = "UPDATE productos SET vigencia = 0, modificacion = NOW() WHERE idgrado = $idsel";
			echo putSQL($sql);
			break;

		default:
			# code...
			break;
	}
?>