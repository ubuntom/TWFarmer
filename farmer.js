javascript:
/*By UbunTom http://www.gamemash.co.uk */
function keys(obj)
{
    var keys = [];
    for(var key in obj)
    {
        if(obj.hasOwnProperty(key))
        {
            keys.push(key);
        }
    }
    return keys;
}


if (localStorage['farmBatch'] == undefined)localStorage['farmBatch']="{}";
if (localStorage['farmTemplate'] == undefined)localStorage['farmTemplate']="{}";
if (localStorage['farmVillage'] == undefined)localStorage['farmVillage']="{}";

var keylist, tkeylist, vkeylist;
var batch, template, village;

function showPage()
{

  batch = JSON.parse(localStorage['farmBatch']);
	template = JSON.parse(localStorage['farmTemplate']);
	village = JSON.parse(localStorage['farmVillage']);



	document.body.innerHTML = "";
	document.write('<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="/merged/game.css"><style>td{padding:1px;}</style></head><body id="ds_body" class=" scrollableMenu">');


	document.write('<div class="vis">Batches<br />');
	keylist=keys(batch);
	if (keylist.length==0)
	{
		document.write("No batches created<br />");
	}
	else
	{
		document.write('<table class="vis"><tr><th>Batch name</th><th>Villages</th><th></th><th></th></tr>');
	
		for (j=0;j<keylist.length;j++)
		{
		
			var key=keylist[j];
			document.write('<tr><td>'+key+'</td><td id="Bv'+key+'">'+batch[key].length+' <a href="javascript:populateVillages(\''+key+'\');">');
			document.write(' Show</td>');
		
			document.write("</td><td><a href=\"javascript:deleteBatch('"+key+"');\">Delete</a></td>");
			document.write("<td><a href=\"javascript:sendFarm('"+key+"');\">Send</a></td></tr>");
		}
		document.write("</table>");
	}
	
	document.write("<a href=\"javascript:createBatch()\">Create batch</a>");
	document.write("</div>");

	document.write('<div class="vis">Templates<br />');
	tkeylist=keys(template);
	if (tkeylist.length==0)
	{
		document.write("No templates created<br />");
	}
	else
	{
		document.write('<table class="vis"><tr><th>Template name</th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png?48b3b" title="Spear fighter" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png?b389d" title="Swordsman" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png?51d94" title="Axeman" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_archer.png?db2c3" title="Archer" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png?eb866" title="Scout" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png?2d86d" title="Light cavalry" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_marcher.png?ad3be" title="Mounted archer" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png?a83c9" title="Heavy cavalry" alt="" class="" /></th><th width="35"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png?2003e" title="Ram" alt="" class="" /></th><th></th><th></th></tr>');
	
		for (j=0;j<tkeylist.length;j++)
		{
		
			var key=tkeylist[j];
			document.write('<tr><td>'+key+'</td>');
			for (i=0;i<=8;i++)
			{
				document.write("<td id=\"Tt"+key+i+"\">"+template[key][ i ]+"</td>");
			}
		
		
			document.write("<td id=\"Te"+key+"\"><a href=\"javascript:editTemplate('"+key+"');\">Edit</a></td>");
			document.write("<td><a href=\"javascript:deleteTemplate('"+key+"');\">Delete</a></td></tr>");
		}
		document.write("</table>");
	}
	
	document.write("<a href=\"javascript:createTemplate()\">Create template</a>");
	document.write("</div>");

	document.write('<div class="vis">Villages<br />');
	vkeylist=keys(village);
	if (vkeylist.length==0)
	{
		document.write("No villages added<br />");
	}
	else
	{
		document.write('<table class="vis"><tr><th>Coordinate</th><th>Template</th></tr>');
	
		for (j=0;j<vkeylist.length;j++)
		{
		
			var key=vkeylist[j];
			document.write('<tr><td>'+key+'</td>');
			if (village[key]=="")document.write("<td id=\"Vt"+key+"\"><a href=\"javascript:editVillage('"+key+"');\">Disabled</a></td>");
			else document.write("<td id=\"Vt"+key+"\"><a href=\"javascript:editVillage('"+key+"');\">"+village[key]+"</a></td>");
			document.write("<td><a href=\"javascript:deleteVillage('"+key+"');\">Delete</a></td></tr>");
		}
		document.write("</table>");
	}
	document.write("<a href=\"javascript:createVillage()\">Add village</a>");
	document.write("</div>");

}

function createBatch(){
	var name = prompt("Batch name","");
	if (name.trim()=="")alert("Batch name cannot be empty");
	else if (batch.hasOwnProperty(name))alert("Name already in use");
	else
	{
		batch[name]=new Array();
		localStorage['farmBatch']=JSON.stringify(batch);
		showPage();
	}
	
}

function populateVillages(key){
	
	var fill = "<textarea id=\"Bt"+key+"\">";
	
	if (batch[key].length>0)
	{
		for (i=0;i<batch[key].length;i++){
			fill+=batch[key][ i ]+"\n";
		}
	
		fill=fill.substring(0, fill.length - 1);
	}
	
	fill+="</textarea><br /><a href=\"javascript:saveVillages('"+key+"');\">Save</a>";
	
	document.getElementById("Bv"+key).innerHTML=fill;
	
	void(0);
}

function saveVillages(key){

	var v = document.getElementById("Bt"+key).value.trim();
	
	batch[key]=v.split("\n");
	
	document.getElementById("Bv"+key).innerHTML=batch[key].length+' <a href="javascript:populateVillages(\''+key+'\');">Show</a>';
	
	
	localStorage['farmBatch']=JSON.stringify(batch);
	
	void(0);


}

function deleteBatch(key){
	delete batch[key];
	localStorage['farmBatch']=JSON.stringify(batch);
	showPage();
}

function createTemplate(){
	var name = prompt("Template name","");
	if (name.trim()=="")alert("Template name cannot be empty");
	else if (template.hasOwnProperty(name))alert("Name already in use");
	else
	{
		template[name]=new Array(0,0,0,0,0,0,0,0,0);
		localStorage['farmTemplate']=JSON.stringify(template);
		showPage();
	}
	
}

function editTemplate(key){
	for (var i=0;i<=8;i++){
		var n = "<input type=\"number\" style=\"width:40px;\" value=\""+document.getElementById("Tt"+key+i).innerText+"\"/>";
		document.getElementById("Tt"+key+i).innerHTML=n;
	}
	document.getElementById("Te"+key).innerHTML="<a href=\"javascript:saveTemplate('"+key+"');\">Save</a>";

	void(0);
}

function saveTemplate(key){
	for (var i=0;i<=8;i++){
		var n=document.getElementById("Tt"+key+i).firstChild.value;
		template[key][ i ]=n;
		document.getElementById("Tt"+key+i).innerHTML=n;
	}
	
	document.getElementById("Te"+key).innerHTML="<a href=\"javascript:editTemplate('"+key+"');\">Edit</a>";
	
	localStorage['farmTemplate']=JSON.stringify(template);
	
	void(0);
}

function deleteTemplate(key){
	delete template[key];
	localStorage['farmTemplate']=JSON.stringify(template);
	showPage();
}

function createVillage(){
	var name = prompt("Village coordinates","");

	var vils;
	if (name.search(",")!=-1)vils=name.split(",");
	else if (name.search("\n")!=-1)vils=name.split("\n");
	else vils=new Array(name);
	
	
	for (var i=0;i<vils.length;i++)
	{

		var c = vils[ i ].split("|");
	
		if (c.length!=2)alert("Invalid coordinate");
		else
		{
			var x = parseInt(c[0]);
			var y = parseInt(c[1]);
	
			if (x>=0 && x<=999 && y>=0 && y<=999)
			{
				village[vils[ i ]]="";
				localStorage['farmVillage']=JSON.stringify(village);
				showPage();
			}
			else alert("Invalid coordinate");
		}
	}
	
}

function editVillage(key){
	var templates = "<select id=\"Vs"+key+"\">";
	var current=village[key];
	
	var options="";
	var ok=false;
	for (var i=0;i<tkeylist.length;i++)
	{
		if (current==tkeylist[ i ]){
			options+="<option selected value=\""+tkeylist[ i ]+"\">"+tkeylist[ i ]+"</option>";
			ok=true;
		}
		else options+="<option value=\""+tkeylist[ i ]+"\">"+tkeylist[ i ]+"</option>";
	}
	
	if (ok==true){
		templates+="<option value=\"\">Disabled</option>"+options+"</select>";
	}
	else templates+="<option selected value=\"\">Disabled</option>"+options+"</select>";
	
	document.getElementById("Vt"+key).innerHTML=templates+"<a href=\"javascript:saveVillage('"+key+"');\">Save</a>";
	
	
}

function saveVillage(key){
	var t = document.getElementById("Vt"+key).firstChild.value;
	village[key]=t;
	
	if (village[key]=="")document.getElementById("Vt"+key).innerHTML="<a href=\"javascript:editVillage('"+key+"');\">Disabled</a>";
	else document.getElementById("Vt"+key).innerHTML="<a href=\"javascript:editVillage('"+key+"');\">"+village[key]+"</a>";
	
	localStorage['farmVillage']=JSON.stringify(village);
	
	
}


function deleteVillage(key){
	delete village[key];
	localStorage['farmVillage']=JSON.stringify(village);
	showPage();
}

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
var url = "/game.php?village="+vill+"&try=confirm&screen=place";


function sendFarm(key){

var list=['spear','sword','axe','archer','spy','light','marcher','heavy','ram'];


for (j=0;j<batch[key].length;j++)
{

	var xy=batch[key][j].split("|");
	
	var v=batch[key][j];

	var troops;
	var ok=false;
	if (village.hasOwnProperty(v))
	{
		if (template.hasOwnProperty(village[v]))
		{
			troops=template[village[v]];
			ok=true;
		}
	}
	
	if(ok==true){
		
		var tpostData="";
		for (var i=0;i<=8;i++)
		{
			tpostData+="&"+list[ i ]+"="+troops[ i ];
		}
		
		
		var postData="attack=Attack&x="+xy[0]+"&y="+xy[1]+tpostData;
		createXHR(url,postData);
		
		
	}
	
}
}

function createXHR(url,postData)
{
	var req=new XMLHttpRequest();
	req.onreadystatechange = function(){
		if (req.readyState==4 && req.status==200)
		    {
		    	var parser = new DOMParser();
		    	var doc = parser.parseFromString(req.responseText, "text/xml");

			if (doc.getElementsByName("ch").length==0)return; /*Possible captcha*/

			var ch=doc.getElementsByName("ch")[0].value;
			var x=doc.getElementsByName("x")[0].value;
			var y=doc.getElementsByName("y")[0].value;
			var aid=doc.getElementsByName("action_id")[0].value;
		
		
			var postData="attack=true&ch="+ch+"&x="+x+"&y="+y+"&action_id="+aid;
		
			sp=doc.getElementsByName("spear")[0].value;
			sw=doc.getElementsByName("sword")[0].value;
			ax=doc.getElementsByName("axe")[0].value;
			ar=doc.getElementsByName("archer")[0].value;
			sc=doc.getElementsByName("spy")[0].value;
			lc=doc.getElementsByName("light")[0].value;
			ma=doc.getElementsByName("marcher")[0].value;
			hc=doc.getElementsByName("heavy")[0].value;
			rm=doc.getElementsByName("ram")[0].value;
		
		
			postData+="&spear="+sp+"&sword="+sw+"&axe="+ax+"&archer="+ar+"&spy="+sc+"&light="+lc+"&marcher="+ma+"&heavy="+hc+"&ram="+rm+"&catapult=0&knight=0&snob=0";

		    	
		    	var url2 = doc.getElementsByTagName("form")[0].getAttribute("action");
		    	
		    	var req2=new XMLHttpRequest();
		    	req2.open("POST",url2,true);
			req2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			req2.send(postData);

		    	
		  }
	};
	
	req.open("POST",url,true);
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send(postData);
	
}

showPage();
