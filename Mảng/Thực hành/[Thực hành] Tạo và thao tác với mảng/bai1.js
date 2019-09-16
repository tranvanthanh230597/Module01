let x = 0,
	array = new Array();


function add_array() {
	array[x] = document.getElementById("txtValue").value;
	alert("Element: " + array[x] + " Added at index " + x);
	x++;
	document.getElementById("txtValue").value = "";
}

function display_array() {
	let e = "<hr>";
	for(var i = 0; i < array.length; i++){
		e += "Element " + i + " =" + array[i] + " <br>";
	}
	document.getElementById("result").innerHTML = e;
}