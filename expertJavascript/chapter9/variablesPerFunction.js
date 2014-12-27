var race = function () {
	var totalLaps = 10;
	var currentLap = 0;
	var driver1 = "Bob";
	var driver2 = "Bill";
	var car1 = {
		driver: driver1,
		fuel: 100,
		maxMph: 100,
		miles: 0,
		tires: 4
	}
	var car2 = {
		driver: driver2,
		fuel: 100,
		maxMph: 100,
		miles: 0,
		tires: 4
	}
	var cars = [car1, car2];
	while (currentLap < totalLaps) {
		currentLap++;
		cars.forEach(function (car) {
			cars.miles += Math.floor(Math.random() * car.maxMph) + 1;
		});
	}
	if (car1.miles > car2.miles) {
		console.log(car1.driver + "wins!");
	} else {
		console.log(car2.driver + " wins!");
	}
}

race();

var addCar = function (driver) {
	return {
		driver: driver,
		fuel: 100,
		maxMph: 100,
		miles: 0,
		tires: 4
	}
}

var race = function (cars) {
	var totalLaps = 10;
	var currentLap = 0;
	while(currentLap < totalLaps) {
		currentLap++;
		cars.forEach(function (car) {
			car.miles += Math.floor(Math.random() * car.maxMph) + 1;
		});
	}
	cars.sort(function (a, b) {
		return a.miles > b.miles ? -1: 1;
	});
	console.log(cars[0].driver + " wins!");
}

race([addCar('Bob'), addCar('Bill')]);