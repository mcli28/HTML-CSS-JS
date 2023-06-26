<?

@session_start();
$UserName = array();
$UserName[0] = 'demo1';
$UserName[1] = 'demo2';
$UserName[2] = 'demo3';
$UserName[3] = 'demo4';
$UserName[4] = 'demo5';

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>prueba de pusher</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script src="http://js.pusher.com/2.1/pusher.min.js" type="text/javascript"></script>
	<script type="text/javascript">
    	// Enable pusher logging - don't include this in production
    	Pusher.log = function(message) {
	    	  if (window.console && window.console.log) {
	    	    window.console.log(message);
	    	  }
	    	};
	
    	var pusher = new Pusher('5c7fc4e38af4a1a7d006');
    	var channel = pusher.subscribe('test_channel');
    	channel.bind('my_event', function(data) {
    	  alert(data.message);
    	});
	</script>
	<script>
		$(function () {
			var pusher = new Pusher('5c7fc4e38af4a1a7d006');
			var canal = pusher.subscribe('canal_prueba');
			canal.bind('msj_<?=$_SESSION["USUARIO"]?>', function (respuesta) {

			});
			$('form#msj').submit(function () {
				$.post('ajax.php', 
					usuario: '<?=$_GET["usuario"]?>',
					msj: $('#send').val(),
					), function (respuesta) {
						$('#mensajes').append('<tr><td><span class="label label-info">'+respuesta.session+':'+respuesta+'</td></tr>')
					}
			}, 'json');
		});
	</script>

</head>
<body>
	<?php
	if (empty($_SESSION['USUARIO'])) {

		$user = htmlspecialchars($_POST['user']);
		$usuario = htmlspecialchars($_GET['usuariochat']);
		echo' 
		<form method="post" id="login" action="index.php">
			<input type="text" name="user" id="user" placeholder="ingrese nombre de usuario">
		</form>
		';

		for ($i=0; $i < count($UserName); $i++) {
			if ($UserName == $user) {
				$_SESSION['USUARIO'];
				echo 'session correcta - click <a href="">recargar</a>';
			}
		}
	}elseif (!empty($_SESSION['USUARIO']0) && empty($usuariochat)) {
		for ($i=0; $i < count($UserName); $i++) {
			if ($UserName[$i]!=$_SESSION['USUARIO']) {
				echo '<a href="index.php?usuario='.$UserName[$i].'">'.$UserName[$i].'</a>';
			}
		}
	}elseif (!empty($usuariochat)) {
		echo '
		<table class="table table-striped">
		<tbody id="mensajes">
		</table>
		<form id="msj">
			<input type="text" id="send" placeholder="ingrese mensaje">
		</form>
		';
	}
	?>
</body>
</html>