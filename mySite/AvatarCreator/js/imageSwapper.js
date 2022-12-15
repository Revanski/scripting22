// JavaScript Document

var character={face:"", glasses:"", hat:""};


function setAvatar(changling){
	character.face=changling;
	console.log(character.face);
	bodyBuilder();
}

function setHat(changling){
	character.hat=changling;
	console.log(character.hat);
	bodyBuilder();
}

function setGlasses(changling){
	character.glasses=changling;
	console.log(character.glasses);
	bodyBuilder();
}

function setShirt(changling){
	character.shirt=changling;
	console.log(character.glasses);
	bodyBuilder();
}

function setBeard(changling){
	character.beard=changling;
	console.log(character.beard);
	bodyBuilder();
}




function bodyBuilder(){
	
	if(character.face!=""){
		document.getElementById('face').innerHTML="<img class='img-fluid' src='images/"+character.face+"' alt='face'>";
	}
	if(character.hat!=""){
		document.getElementById('hat').innerHTML="<img class='img-fluid' src='images/"+character.hat+"' alt='hat'>";
	}
	
	if(character.glasses!=""){
		document.getElementById('glasses').innerHTML="<img class='img-fluid' src='images/"+character.glasses+"' alt='glasses'>";
	}
		if(character.shirt!=""){
		document.getElementById('shirt').innerHTML="<img class='img-fluid' src='images/"+character.shirt+"' alt='shirt'>";
	}
	
	
}

function write(){
	var yourName = document.getElementById('yourName').value;
	
	document.getElementById('avatarName').innerHTML = yourName;	
}



