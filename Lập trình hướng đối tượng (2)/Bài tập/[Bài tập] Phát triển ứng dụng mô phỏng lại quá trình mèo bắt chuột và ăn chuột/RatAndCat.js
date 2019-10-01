function Rat (name,weight,speed,status) {
	this.name = name;
	this.weight = weight;
	this.speed = speed;
	this.status = status;
	this.mess = "";

	this.say =function(){
		this.mess += this.name + " Say: " + document.getElementById("inputTxt"+this.name).value + "<br>";
		document.getElementById("box"+this.name).innerHTML = this.mess;
	}

	this.die = function(){
		if (this.status) {
			return this.name+" is outlive";
		} 
		else {
			return this.name+" is die";
		}
	}
};

function Cat (name,weight,speed){
	this.name = name;
	this.weight = weight;
	this.speed = speed;
	this.mess = "";

	this.catchRat = function(rat){
		if (this.speed >= rat.speed) {
			this.catCatched = rat;
			alert(this.name + " catched " + rat.name);
		}
		else{
			alert(this.name +" can not catch " + rat.name)
		}
	}
	this.catEat = function(){
		if (this.catCatched) {
			this.catCatched.status = false;
			this.weight += this.catCatched.weight;
			this.catCatched.weight = 0;
			this.catCatched="";
			show();
		} 
		else {
			alert("Not things to eat");
		}
	}
	this.say =function(){
		this.mess += this.name + " Say: " + document.getElementById("inputTxt"+this.name).value + "<br>";
		document.getElementById("box"+this.name).innerHTML = this.mess;
	}
};

let rat1 = new Rat("Jerry", 20,30,true);
let rat2 = new Rat("Grandfather_Of_Tom", 20,60,true);
let cat = new Cat("Tom", 30,50);


function show(){
	document.getElementById(rat2.name+"Name").innerHTML = rat2.name;
	document.getElementById(rat1.name+"Name").innerHTML = rat1.name;

	document.getElementById("status"+rat2.name).innerHTML = rat2.die();
	document.getElementById("status"+rat1.name).innerHTML = rat1.die();
	document.getElementById("speed"+rat2.name).innerHTML = rat2.speed +" m/phut";;
	document.getElementById("speed"+rat1.name).innerHTML = rat1.speed +" m/phut";
	document.getElementById("speed"+cat.name).innerHTML = cat.speed +" m/phut";
	document.getElementById(cat.name+"Name").innerHTML = cat.name;
	document.getElementById("weight"+rat2.name).innerHTML = rat2.weight+ " kg";
	document.getElementById("weight"+rat1.name).innerHTML = rat1.weight+ " kg";
	document.getElementById("weight"+cat.name).innerHTML = cat.weight+ " kg";

	document.getElementById(rat2.name+"Option").innerHTML = rat2.name;
	document.getElementById(rat1.name+"Option").innerHTML = rat1.name;

}

function Catch(){
	let con = document.getElementById("conectRat").value;
	console.log(con);
	if (con == "rat1") {
		cat.catchRat(rat1);
	} else {
		cat.catchRat(rat2);
	}
}