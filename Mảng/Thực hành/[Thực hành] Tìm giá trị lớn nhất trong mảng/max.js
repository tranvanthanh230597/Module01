let x = [-3, 5, 1, 3, 2, 10],
	max = x[0];
for(var i = 0, length1 = x.length; i < length1; i++){
	if (max < x[i]) {
		max = x[i];
	}
}
document.write(max);