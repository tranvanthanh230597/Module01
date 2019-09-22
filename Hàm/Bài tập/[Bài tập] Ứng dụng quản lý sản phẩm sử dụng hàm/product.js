product = new Array( "Jordan 4 Retro Fossil (W)", "Jordan 4 Fossil (W)",
					 "Jordan 12 Retro Black Game Royal","Nike SB Dunk Low Green Hemp");
function showProduct(arr) {
	let myTbody="";
	for (var i =0; i <arr.length; i++) {
			myTbody += 
				"<tr>"+
				"<td>" + i+ "</td>"+
				"<td>"+ arr[i] +"  </td>"+
				"<td><input type= 'text' id = 'name" + i + "' value = '"+ arr[i]+"' ></td>" +
				" <td> <button class='button' onclick='deleteProduct(product,"+ i + ");'>Del</button>"+
				"<button class='button' onclick='edit(product,"+ i + ");'>Edit</button> </td>"+
				"</tr>"
				;
	}
	document.getElementById("myTbody").innerHTML = myTbody;
}

function addProduct(arr) {
	let nameProduct = document.getElementById("nameProduct").value;
	arr.push(nameProduct);
	showProduct(arr);
}
function deleteProduct(arr,num) {
	for (var i = 0; i <arr.length; i++) {
		if (num == i) {
			// arr.splice(arr.indexOf(arr[i]),1) ;

			console.log(arr[i]);
			for (var j =num; j <arr.length - 1; j++) {
				arr[j] = arr[j+1];
			}
			arr.pop();
		}
	}
	showProduct(arr);
}


function edit(arr,num) {
	let editName = document.getElementById("name"+num).value;
	arr[num] = editName;
	showProduct(arr);
}