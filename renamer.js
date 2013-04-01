javascript:
/*Ubuntom and Beastfoxxx*/

/*REPLACE "No Escape" with player name + village number.*/

var namesDict = {
"Drakizath": new Array("603|711","593|713","596|718","607|710","598|715","607|725","610|733"),
"Phantom-X": new Array("612|716","622|710","612|726","612|722","615|724"),
"terrorcore21": new Array("615|705","608|718","600|720","597|723","608|723"),
"Venom Us": new Array("607|738","607|742","608|742","601|747"),
"chapt3r": new Array("627|721","626|727","619|732","626|725","628|737"),
"UbunTom": new Array("623|700","621|698","624|698"),
"Iceviking": new Array("629|701","629|702","632|702","638|719"),
"Twin Juggernaut": new Array("637|716","630|716","628|713"),
"LegendaryScuit": new Array("634|711","634|709","635|706"),
"Jayman001": new Array("600|727","595|726","601|725"),
"GarethGG": new Array("611|709","621|705"),
"Beastfoxxx": new Array("612|719","657|692"),
"kingscarpus": new Array("641|704","646|703"),
"Kathula": new Array("605|717","601|718"),
"BishopMartin": new Array("674|748"),
"Mudfiend": new Array("617|712"),
"Sully11": new Array("601|707"),
"unspokenhell": new Array("624|729"),
"LordDogfather": new Array("629|729"),
"Marscuit": new Array("651|702"),
"Macleane": new Array("685|727")
};/*A dictionary of each player and an array of their village coords. */

var keys = [];
for(var key in namesDict)
{
  if(namesDict.hasOwnProperty(key))
	{
	    keys.push(key);
	}
}	/*Make an array of each player name, so that we can iterate over the dictionary */

var html = document.body.innerHTML;

function pad(n)
{
	var s = (n+1).toString();
	while(s.length<3)s="0"+s;
	return s;
}


for (i=0;i<keys.length;i++)
{
	var name = keys[i];
	for(j=0;j<namesDict[name].length;j++)
	{
		var coord = namesDict[name][j];
		var regCoord = coord.replace("|","\\|");
		var regEx = new RegExp("No Escape \\(" + regCoord + "\\)","ig");
		html = html.replace(regEx, name + pad(j) + " (" + coord + ")");	
	}
}
document.body.innerHTML = html;

void(0);
