let b = document.getElementById("caroGame"),
	boar = [],
	data = "";

for(var i = 0; i < 5; i++){
	boar[i] = [0,0,0,0,0];
}

for( i = 0; i < 5; i++){
	data += "<br>";
	for(var j = 0; j < 5; j++){
		data += boar[i][j] + "&nbsp;&nbsp;";
	}
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
b.innerHTML = data;

function changeValue() {
	let positionX = prompt("x:"),
		positionY = prompt("y: ");
		data = "";
		boar[positionX][positionY] = "x"
	for(var i = 0; i < 5; i++){
		data += "<br>";
		for(var j= 0; j < 5; j++){
			data += boar[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
		}
	}
	data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data;
}