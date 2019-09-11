function ChangeImage1() {
	let imgOb1 = document.getElementById('img1');
	imgOb1.src = "image/goku/goku2.jpg";

	winGame();
}
function ChangeImage2() {
	let imgOb1 = document.getElementById('img2');
	imgOb1.src = "image/goku/goku2.jpg";

	winGame();
}
function ChangeImage3() {
	let imgOb1 = document.getElementById('img3');
	imgOb1.src = "image/goku/goku2.jpg";

	winGame();
}
function ChangeImage4() {
	let imgOb1 = document.getElementById('img4');
	imgOb1.src = "image/goku/goku2.jpg";

	winGame();
}
function winGame() {
	let imgOb1 = document.getElementById('img1').alt;
	let imgOb2 = document.getElementById('img2').alt;
	let imgOb3 = document.getElementById('img3').alt;
	let imgOb4 = document.getElementById('img4').alt;

	// nếu alt 4 cái giống nhau thì ưin
	let isWin = imgOb1 === imgOb2 &&  imgOb1 === imgOb2;
}