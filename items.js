exports.get_price = function(item) {
    switch(item) {
    case "hotdogs":
	return 3.5;
	break;
    case "fries":
	return 2;
	break;
    case "soda":
	return 1.5;
	break;
    }
}


