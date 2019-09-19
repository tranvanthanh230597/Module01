function input() {
	let n =0;
	while (n < 10) {
		n = prompt("Enter value");
	}
	return n;
}

function creatArray(n,m) {
	a = new Array(n);
	for (var i = 0; i < n; i++) {
		a[i] = new Array(m);
		for (var j = 0; j < m; j++) {
			a[i][j] = Math.floor(Math.random() * 100 + 1);
			}
		}	
		return a;
	}

function isPrime(n) {
	for (var i = 2 ; i < n ; i++) {
		if((n % i) === 0){
			return false;
		}
	}    
	return n > 1;

}

function totalPrime(arr2){
	let total = 0;
	for (let i = 0; i< n; i++) {
		for (var j = 0; j < m; j++) {
			if (isPrime(arr2[i][j])) {
				total +=1;
			}
		}
	}
	return total;
}
function show(arr2) {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++){
			document.write(arr2[i][j] + " ");
		}
		document.write("<br>");
	}
}