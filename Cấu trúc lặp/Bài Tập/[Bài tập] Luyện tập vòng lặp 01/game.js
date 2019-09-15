
function start() {

	let from = document.getElementById("from").value,
    to     = document.getElementById("to").value,
    c 	   = myRandom(from,to),
    count  = 1;
	alert(c);


	let reckon = prompt("Nhập vào số cần đoán");

	if (reckon == c) {
		alert("congratulations !!!");
	}
	else if ((reckon < c) && (count <=3)){
			reckon = prompt("Số vừa nhập bé hơn số cần tìm.");
			count ++;
	}
	else if ((reckon > c) && (count <=3)){
			reckon = prompt("Số vừa nhập lớn hơn số cần tìm.");
			count ++;
		}
	}

function myRandom(from,to) {
	return parseInt(Math.random() * (to- from) + from);
}