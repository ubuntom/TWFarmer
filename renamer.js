javascript:
/*Ubuntom and Beastfoxxx*/

/*REPLACE "No Escape" with player name + village number.*/

var namesDict = {
"Drakizath": new Array("603|711","593|713","596|718","607|710","598|715","607|725","610|733"),
"Phantom-X": new Array("612|716","622|710","612|726","612|722","615|724"),
"terrorcore21": new Array("615|705","608|718","600|720","597|723","608|723"),
"chapt3r": new Array("627|721","626|727","619|732","626|725","628|737"),
"Venom Us": new Array("607|738","607|742","608|742","601|747"),
"UbunTom": new Array("623|700","621|698","624|698")

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
