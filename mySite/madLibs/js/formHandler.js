// JavaScript Document
function write(){
	
	//variables
	var yourName = document.getElementById('yourName').value;
	var worstEnemy = document.getElementById('worstEnemy').value;
	var itemBought = document.getElementById('itemBought').value;
	var weekDay = document.getElementById('weekDay').value;
	var nounSnack = document.getElementById('nounSnack').value;
	var negAdjective = document.getElementById('negAdjective').value;
	var cutePet = document.getElementById('cutePet').value;
	var emotion = document.getElementById('emotion').value;
	var onomatopoeia = document.getElementById('onomatopoeia').value;
	var weapon = document.getElementById('weapon').value;
	var noun = document.getElementById('noun').value;
	var nounWish = document.getElementById('nounWish').value;
	var adjective = document.getElementById('adjective').value;

	var backflip = document.querySelector('input[name="backflip"]:checked').value;
	var decision = document.querySelector('input[name="decision"]:checked').value;
	
	var decisionYesNo;
	
	if(decision=="yes"){
		decisionYesNo = "You accept their apology and proceed to plant a passionate kiss on their forehead.<img src='images/foreheadKiss.jpg' class='img-fluid rounded-lg py-3' alt='kiss on forehead'>";
	}else if(decision=="no"){
		decisionYesNo = "You decline their apology and scold them as they lay dying.<img src='images/scold.jpg' class='img-fluid rounded-lg py-3' alt='person scolded'>"
	}else if (decision=="maybe"){
		decisionYesNo = "You tell them that you're going to need some space before you can forgive them but also that you're not mad, just disappointed. At this point, you don't really know how to feel. <img src='images/shrug.jpg' class='img-fluid rounded-lg py-3' alt='shrugging person'>"
	}
	
		
		
document.getElementById('output').innerHTML = yourName+"! Good morning!";
	
document.getElementById('output').innerHTML += "<p> The familiar greeting from "+worstEnemy+", the owner of the "+itemBought+" store you regularly stop at during your morning routine before going to work seemed a little off. You respond, saying a similar greeting, but you could not help but notice something off about his voice. You attribute the sudden and unpleasant feeling of dread to the fact that it is a rainy "+weekDay+" – your least favourite day of the week – and, instead of dwelling on it, grab one "+nounSnack+" as you usually do on your stop by the store. Heading up to the counter, your attempt to nonchalantly avoid "+worstEnemy+"’s gaze is cut short when you notice a "+negAdjective+" smell coming from where they usually stand at the front of the store. <i>Smells like a dead "+cutePet+"</i>, you think to yourself. Instinctively, your eyes find the source of the smell: "+worstEnemy+". Your worst fears are confirmed before your very eyes. </p><p>You grab the hilt of your sword, shaking from "+emotion+". It makes a loud <i>"+onomatopoeia+"!</i> as you unsheathe it, preparing for the events that are about to unfold. Your opponent, <i>Store Owner "+worstEnemy+" the Lesser</i>, squares to you. In each hand, they wield a "+weapon+", preparing to send you to meet your maker. Unfortunately for them, this isn't exactly in your plans.</p><p>You do a "+backflip+" backflip onto the counter as you attempt to dismember "+worstEnemy+"'s head. Although your first swing of the sword hardly misses his scalp, the second finds skin. "+worstEnemy+" falls to the floor.</p><p>You take their hand as they apologize and explain that they never chose to be evil, but rather the "+noun+" life chose them. "+decisionYesNo+" They breathe their final breaths on the floor of the "+itemBought+" store as you walk away. On your way out, you grab a "+nounWish+" and tell the customers in the store to have a "+adjective+" day. Your work here is done.</p>";




}
