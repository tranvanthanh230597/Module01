function checkPrime(){
	let amount = document.getElementById("amount").value;
	let count = 0,
		chain = "";
	for (var i = 2; count < amount; i++) {

		if (isPrime(i) == true) {
			count ++;
			chain += i +" ";
		}
	}
	document.getElementById("result").innerHTML = "<b>Kết quả: </b>" +chain;

}

function isPrime(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i < (num-1); i++) {
		if ((num % i) == 0) {
			return false;
		}
	}
	return true;
}