javascript:/*By UbunTom http://www.gamemash.co.uk/ */
var post=['attack','ch','x','y','action_id','spear','sword','axe','archer','spy','light','marcher','heavy','ram','catapult','knight','snob'];

if (localStorage['atts']!="" && localStorage['atts']!=undefined)
{


attacks=localStorage['atts'].split(",");

for (x=0;x<attacks.length;x++)
{

var xmlhttp=new XMLHttpRequest();

var data=attacks[x].split("|");
xmlhttp.open("POST",data[0],true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

var postData;
if(data[1]=="true")postData="attack=true&";
else postData="support=true&";


for (i=1;i<post.length;i++)
{
postData+=post[ i ]+"="+data[i+1]+"&";
}

if (data[18]!="None")postData+="building="+data[18];

xmlhttp.send(postData);


}

}

delete localStorage['atts'];

void(0);
