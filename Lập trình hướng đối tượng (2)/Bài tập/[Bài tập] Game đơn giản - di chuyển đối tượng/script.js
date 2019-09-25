function hero(image,top,left,size) {
	this.image = image;
	this.top = top;
	this.left = left;
	this.size = size;

	this.getHeroElement = function(){
		return '<img width="'+ this.size + 'px"' +
      		   ' height="'+ this.size + 'px"' +
      		   ' src="' + this.image +'"' +
      		   ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
	}
	this.moveRight = function(){
		this.left += 20;
		console.log('ok : ' + this.left);
	}
}


let ironMan = new hero("oke.jpg", 20,30,200);
function start(){
	console.log("start");
	if (ironMan.left < (window.innerWidth - ironMan.size)) {
		ironMan.moveRight();
	}
	console.log(ironMan.getHeroElement());
	document.getElementById("game").innerHTML = ironMan.getHeroElement();
	setTimeout(start, 500 );
}


start();
