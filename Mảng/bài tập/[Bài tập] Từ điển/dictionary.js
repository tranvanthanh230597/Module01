let dictVie = ["xin chào","Cán ơn","tạm biệt","đúng","sai" ],
	dictEng = ["hello", "thanks","bye","true","false"];

function mySearch() {
	let words = document.getElementById("words").value;
	console.log(words);
	for(var i = 0, length1 = dictEng.length; i < length1; i++){
		if (dictEng[i] == words) {
			document.getElementById("result").innerHTML = dictVie[i];
			break;
		}
		else{
			document.getElementById("result").innerHTML = "can't found";
		}
	}
}