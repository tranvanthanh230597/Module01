let x = [-3, 5, 1, 3, 2, 10],
	value = prompt("enter your number");

for(var i = 0; i < x.length -1;  i++){
	if (value == x[i]) {
		alert("Value " + x[i] + "found at " + i);
	}
	else
		alert("Value " + value + " is not found" );
}