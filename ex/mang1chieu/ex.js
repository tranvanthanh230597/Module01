function input() {
	let n =0;
	while (n < 10) {
		n = prompt("Enter n");
	}
	return n;
}


function creatArray(n) {
	a = new Array(n);
	for (var i = 0; i < n; i++) {
		a[i] = Math.floor(Math.random() * 100 + 1);
	}
	return a;
}

function isPrime(n) {
	let count = 0;
	if (n <2) {
		return false;
	}
	else {
		for ( let i =2 ; i < n-1 ; i ++) {
			if ((n % i) == 0) {
				count ++;
			}
		}
		if (count == 0) {
			return true;
		} 
		else {
			return false;
		}
	}
}

function totalPrime(a){
	let total = 0;
	for (let i = 0; i< n; i++) {
		if (isPrime(a[i])) {
			total ++;
		}
	}
	return total;
}
function show(a) {
	for (var i = 0; i < n; i++) {
		console.log(a[i]);
	}
}