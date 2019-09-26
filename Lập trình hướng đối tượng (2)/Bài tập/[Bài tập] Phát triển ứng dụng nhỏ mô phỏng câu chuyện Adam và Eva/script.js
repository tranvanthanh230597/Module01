function Human (name,gender,weight) {
	this.name = name;
	this.gender = gender;
	this.weight = weight;
	this.mess = "";

	this.getName = function(){
		return this.name;
	}
	this.getGender = function(){
		return this.gender;
	}
	this.getWeight = function(){
		return this.weight;
	}
	this.eatApple = function(apple){
		this.weight ++;
		console.log(apple);
		apple.decrease();
		show();
	}
	this.say = function(){
		this.mess += this.name + " Say: " + document.getElementById("inputTxt"+this.name).value + "<br>";
		document.getElementById("box"+this.name).innerHTML = this.mess;
	}
};

function Apple (weight){
	this.weight =weight;
	this.getWeight = function(){
		return this.weight;
	}
	this.decrease = function(){
		if (this.weight >0) {
			this.weight --;
		} 
		else {
			alert("not enough Apple to eat");
		}
	}
};


let adam = new Human("Adam", "male", 60);
let eva = new Human("Eva", "female", 40);
let apple = new Apple(20);

function show(){
	document.getElementById("adamName").innerHTML = adam.getName();
	document.getElementById("genderAdam").innerHTML = adam.getGender();
	document.getElementById("weightAdam").innerHTML = adam.getWeight();
	document.getElementById("evaName").innerHTML = eva.getName();
	document.getElementById("genderEva").innerHTML = eva.getGender();
	document.getElementById("weightEva").innerHTML = eva.getWeight();
	document.getElementById("weightApple").innerHTML = apple.getWeight();
}

