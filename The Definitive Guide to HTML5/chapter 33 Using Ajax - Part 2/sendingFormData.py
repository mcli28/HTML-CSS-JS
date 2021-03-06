<!DOCTYPE HTML>
<html>
<head>
	<title>Example</title>
	<style>
		.table {display:table;}
		.row {display:table-row;}
		.cell {display: table-cell; padding: 5px;}
		.label {text-align: right;}
	</style>
</head>
<body>
	<form id="fruitform" method="post" action="http://titan:8080/form">
		<div class="table">
			<div class="row">
				<div class="cell label">Bananas:</div>
				<div class="cell"><input name="bananas" value="2"/></div>
			</div>
			<div class="row">
				<div class="cell label">Apples:</div>
				<div class="cell"><input name="apples" value="5"/></div>
			</div>
			<div class="row">
				<div class="cell label">Cherries:</div>
				<div class="cell"><input name="cherries" value="20"/></div>
			</div>
			<div class="row">
				<div class="cell label">Total:</div>
				<div id="results" class="cell">0 items</div>
			</div>
		</div>
		<button id="submit" type="submit">Submit Form</button>
	</form>
	<script>
		document.getElementById("submit").onclick = handleButtonPress;
		var httpRequest;
		function handleButtonPress(e) {
			e.preventDefault();
			var form = document.getElementById("fruitform");
			var formData = new FormData(form);
			// var formData = "";
			var inputElements = document.getElementsByTagName("input");
			for (var i = 0; i < inputElements.length; i++) {
				formData += inputElements[i].name + "="
				+ inputElements[i].value + "&";
			}
			httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = handleResponse;
			httpRequest.open("POST", form.action);
			httpRequest.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded');
			httpRequest.send(formData);
		}
		function handleResponse() {
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				document.getElementById("results").innerHTML
				= httpRequest.responseText;
			}
		}
	</script>
</body>
</html>