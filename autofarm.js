var list=['spear','sword','axe','archer','spy','light','marcher','heavy'];

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

var vill=gup("village");
var t=gup("t");

var url;
if(t=="")url = "/game.php?village="+vill+"&try=confirm&screen=place";
else url = "/game.php?t="+t+"&village="+vill+"&try=confirm&screen=place";

function send(num)
{
  

	var x=villages[num][0];
	var y=villages[num][1];

	var troops=villages[num][2];

	var tpostData="";
	for (var i=0;i<=7;i++)
	{
		tpostData+="&"+list[ i ]+"="+villages[num][i+2];
	}


	var postData="attack=Attack&x="+x+"&y="+y+tpostData;
	createXHR(url,postData);
	
	
	return true;


}

function createXHR(url,postData)
{
	var req=new XMLHttpRequest();
	req.uurrll=postData;
	req.onreadystatechange = function(){
		
		if (req.readyState==4 && req.status==200)
		{
			
			var parser = new DOMParser();
			var doc;
			if (navigator.appName=="Netscape")doc = parser.parseFromString(req.responseText, "text/html");
			else doc = parser.parseFromString(req.responseText, "text/xml");

			if (doc.getElementsByName("ch").length==0)
			{
				return false;
			}

			var ch=doc.getElementsByName("ch")[0].value;
			var x=doc.getElementsByName("x")[0].value;
			var y=doc.getElementsByName("y")[0].value;
			var aid=doc.getElementsByName("action_id")[0].value;


			var postData="attack=true&ch="+ch+"&x="+x+"&y="+y+"&action_id="+aid;

			var sp=doc.getElementsByName("spear")[0].value;
			var sw=doc.getElementsByName("sword")[0].value;
			var ax=doc.getElementsByName("axe")[0].value;
			var ar=doc.getElementsByName("archer")[0].value;
			var sc=doc.getElementsByName("spy")[0].value;
			var lc=doc.getElementsByName("light")[0].value;
			var ma=doc.getElementsByName("marcher")[0].value;
			var hc=doc.getElementsByName("heavy")[0].value;



			postData+="&spear="+sp+"&sword="+sw+"&axe="+ax+"&archer="+ar+"&spy="+sc+"&light="+lc+"&marcher="+ma+"&heavy="+hc+"&ram=0&catapult=0&knight=0&snob=0";


			var url2 = doc.getElementsByTagName("form")[0].getAttribute("action");

			var req2=new XMLHttpRequest();
			req2.open("POST",url2,true);
			req2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			req2.send(postData);
			
			return true;
	
		}
		
		
	};
	
	req.open("POST",url,false);
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send(postData);
	
}

var ok=true;
var get="";
var r = new RegExp("[0-9]+");
for (var i=0;i<=7;i++)
{
	var t = document.getElementById("unit_input_"+list[i]).nextSibling.nextSibling.innerHTML;
	get+="&"+list[i]+"="+t.match(r)[0];
}




$.getScript("http://gamemash.co.uk/villagelist.php?id="+vill+get,function(){
for(var v=0;v<villages.length;v++)
{
	if(ok==false)
	{
		break;
	}
	send(v);
}
setTimeout(document.write("Finished sending to: "+villages.length+" villages<br />"),1000);
});
