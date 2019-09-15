function myPlus() {
	document.calculator.display.value +="+";
	document.calculator.display.style.textAlign = 'right';
}
function mySub() {
	document.calculator.display.value +="-";
	document.calculator.display.style.textAlign = 'right';
}
function myMul() {
	document.calculator.display.value +="*";
	document.calculator.display.style.textAlign = 'right';
}
function myDiv() {
	document.calculator.display.value +="/";
	document.calculator.display.style.textAlign = 'right';
}
function myMob() {
	document.calculator.display.value +="%";
	document.calculator.display.style.textAlign = 'right';
}
function myDot() {
	document.calculator.display.value +=".";
	document.calculator.display.style.textAlign = 'right';
}
function myClear() {
	document.calculator.display.value ="";
	document.calculator.display.style.textAlign = 'right';
}