function Remote (name,code) {
	this.code = code;
	this.name = name;

	this.connect = function(_TV){
		this.TV = _TV;
	}

	this.onOffTv = function(){
		if (this.TV.statusTV) {
			this.TV.statusTV = false;
			alert("TV Off");
		} 
		else {
			this.TV.statusTV = true;
			alert("TV On");
		}
		show();
	}

	this.remoteChannels = function(code){
		this.TV.changeChannels(code);
		show();
	}

	this.remoteVolume =function(num){
		this.TV.changeVolume(num);
		show();
	}


};

function TV (name,channel,volume,statusTV){
	this.channels = ["channel 01","channel 02","channel 03", "channel 04",
					"channel 05","channel 06","channel 07", "channel 08"];
	this.name = name;
	this.channel = channel;
	this.volume = volume;
	this.statusTV = statusTV;

	this.changeChannels = function(_num){
		for (var i = 0 ; i < this.channels.length; i++) {
			if (_num == i) {
				this.channel = this.channels[_num];
			}
		}
	}
	this.changeVolume = function(_num){
		if ((_num >= 0) &&(_num <= 100)) {
			this.volume = _num;
		}
		else {
			alert("can not change volume");
		}
	}
	this.status = function () {
		if (this.statusTV) {
			return "On"
		}
		else {
			return "Off"
		}
	}

}

let tv = new TV("SamSung","", 21, false);
let remote = new Remote("Remote",);
remote.connect(tv);


function show() {
	document.getElementById("TV").innerHTML = tv.name;
	document.getElementById("remoteName").innerHTML = remote.name;
	document.getElementById("channelTV").innerHTML = tv.channel;
	document.getElementById("volumeTV").innerHTML = tv.volume;
	document.getElementById("statusTV").innerHTML = tv.status();
}
function volumeUp() {
	tv.volume += 1;
	show();
}
function volumeDown() {
	tv.volume -= 1;
	show();
}