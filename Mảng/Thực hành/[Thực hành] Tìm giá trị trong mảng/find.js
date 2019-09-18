let x = [-3, 5, 1, 3, 2, 10],
	value = prompt("enter your number"),
	e;

for(var i = 0; i < x.length;  i++){
	if (value == x[i]) {
		e ="Value " + x[i] + "found at " + i;
		break;
	}
	else
		e ="Value " + value + " is not found" ;
}
alert(e);