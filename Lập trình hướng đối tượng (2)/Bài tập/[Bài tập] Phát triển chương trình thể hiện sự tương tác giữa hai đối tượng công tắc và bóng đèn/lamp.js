let EletricLamp = function(name,status){
	this.name = name;
	this.status = status;

	this.light = function(){
		if (this.status) {
			return "lighting";
		} 
		else {
			return " Not lighting";
		}
	};

	this.turnOn = function(){
		if (this.status) {
			alert("Lamp is being turned on") ;
		} else {
			this.status = true;
			show();
		}
	};

	this.turnOff = function(){
		if (this.status) {
			this.status = false;
			show();
		}
		else{
			alert("Lamp is being turned off") ;
		}
	};
}
let SwitchButton = function(){
	this.conetcToLamp = function(_EletricLamp){
		this.eletricLamp = _EletricLamp ;
	}
	this.switchOn = function(){
		
		this.eletricLamp.turnOn();
	}
	this.switchOff = function(){
		this.eletricLamp.turnOff();
	}
}

let lamp1 = new EletricLamp ("Eletric Lamp 1", false);
let lamp2 = new EletricLamp ("Eletric Lamp 2", false);
let switchLamp = new SwitchButton();

function show(){
	document.getElementById("lampName1").innerHTML = lamp1.name;
	document.getElementById("lampName2").innerHTML = lamp2.name;
	document.getElementById("lampOption1").innerHTML = lamp1.name;
	document.getElementById("lampOption2").innerHTML = lamp2.name;
	document.getElementById("lampStatus1").innerHTML = lamp1.light();
	document.getElementById("lampStatus2").innerHTML = lamp2.light();
}
function conect(){
	let con = document.getElementById("conectLamp").value;
	console.log(con);
	if (con == "lamp1") {
		switchLamp.conetcToLamp(lamp1);
	} else {
		switchLamp.conetcToLamp(lamp2);
	}
}
