var friendNames;
function findFriends (user) {
	var friends = [];
	if (user) {
		friends = user.getFriends().map(function (friend) {
			return friend.firstName + " " + friend.lastName;
		});
	} else {
		friends = ["You are unpopular!"];
	}
	return friends;
}
friendNames = findFriends();