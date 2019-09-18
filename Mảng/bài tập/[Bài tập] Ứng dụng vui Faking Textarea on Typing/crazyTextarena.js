// khai báo chuỗi được lập lại trong textarena
let a=[],
	n="";

a[0] = "H"; a[1] = "e"; a[2] = "l"; a[3] = "l"; a[4] = "o"; a[5] = "!";
a[6] = "t"; a[7] = "h"; a[8] = "i"; a[9] = "s"; a[10] = " ";
a[11] = "i"; a[12] = "s"; a[13] = " ";
a[14] = "a"; a[15] = " ";
a[16] = "c"; a[17] = "r"; a[18]= "a"; a[19]= "z"; a[20]= "y"; a[21]= " ";
a[22]= "d"; a[23]= "o"; a[24]= "g";

function crazyTextarena() {
	let text =document.myForm.myTxt.value;
	count = text.length;
	if (count > 0) {
		for( i = 0 ; i < count; i++){
			n += a[i];
			if (i == 25) {
				console.log(text);
				document.myForm.myTxt.value = "";
				n ="";
			}
		}
	}
	console.log(n);
	document.myForm.myTxt.value = n;
	n="";
	setTimeout("crazyTextarena()", 1);
}
