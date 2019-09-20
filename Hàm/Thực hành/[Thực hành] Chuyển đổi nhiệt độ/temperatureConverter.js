function temperatureConverter(valNum) {
	valNum = parseInt(valNum);
	document.getElementById("outputCelsius").innerHTML =(valNum-32) / 1.8;
}