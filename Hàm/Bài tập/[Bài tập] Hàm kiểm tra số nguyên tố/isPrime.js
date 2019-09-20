function isPrime(n) {
	for (var i = 2 ; i < n ; i++) {
		if((n % i) === 0){
			return false;
		}
	}    
	return n > 1;
}
function input() {
	let num = document.getElementById("num").value;
	return num;
}
function main() {
	let num = input();
	console.log(isPrime(num)) ;
}