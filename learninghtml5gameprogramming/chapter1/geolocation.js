if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function (pos) {
		var latitude = pos.coords.latitude;
		var longitude = pos.coords.longitude;

		var options = {
			position: new google.maps.LatLng(latitude, longitude),
			title: "Your location"
		}

		var marker = new google.maps.Circle({
			map: map,
			radius: pos.coords.accuracy
		});
		circle.bindTo('center', marker, 'position');
		marker.setMap(map);
		map.setCenter(new google.maps.LatLng(latitude, longitude));
	},
	function (error) {
		console.log(error.message);
	});
}