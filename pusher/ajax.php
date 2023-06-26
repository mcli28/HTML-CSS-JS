<?php
session_start();
require "pusher.php";
$usuario = htmlspecialchars($_POST['usuario']);
$mensaje = htmlspecialchars($_POST['msj']);
$session = htmlspecialchars($_SESSION['USUARIO']);

$pusher = Pusherinstance::get_pusher();

$pusher -> trigger(
	'canal_prueba',
	'msj_'.$usuario,
	array('mensaje' ==> $mensaje, 'session' ==> $session)
	);
$mostrar = array('mensaje' ==> $mensaje, 'session' ==> $session);
echo json_encode($mostrar);
?>