javascript:/*By UbunTom http://www.gamemash.co.uk/ */

var attacks;

function showPage()
{
document.body.innerHTML = "";

if (localStorage['atts']!="" && localStorage['atts']!=undefined)
{

document.write('<table class="vis"><tr><th>Target</th><th>A/S</th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spear.png?48b3b" title="Spear fighter" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_sword.png?b389d" title="Swordsman" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_axe.png?51d94" title="Axeman" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_archer.png?db2c3" title="Archer" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_spy.png?eb866" title="Scout" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_light.png?2d86d" title="Light cavalry" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_marcher.png?ad3be" title="Mounted archer" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_heavy.png?a83c9" title="Heavy cavalry" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_ram.png?2003e" title="Ram" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_catapult.png?5659c" title="Catapult" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_knight.png?58dd0" title="Paladin" alt="" class="" /></th><th width="50"><img src="http://cdn2.tribalwars.net/graphic/unit/unit_snob.png?0019c" title="Nobleman" alt="" class="" /></th><th>Cat Target</th><th> </th><th> </th></tr><tr>');


attacks=localStorage['atts'].split(",");


for (x=0;x<attacks.length;x++)
{
var data=attacks[x].split("|");


document.write("<tr><td>"+data[3]+"|"+data[4]+"</td><td>");

if (data[1]=="true")document.write("Attack</td>");
else document.write("Support</td>");

for (i=6;i<=17;i++)
{
document.write("<td style=\"text-align:center;\">"+data[ i ]+"</td>");
}

document.write("<td>"+data[18]+"</td>");

document.write("<td><a href=\"javascript:deleteAttack("+x+")\">Delete</a><td>");



if (x>0)document.write("<a href=\"javascript:shiftUp("+x+")\">^</a> ");
else document.write("&nbsp;&nbsp;");


if (x<attacks.length-1)document.write(" <a href=\"javascript:shiftDown("+x+")\">v</a>");


document.write("</td></tr>");


}
document.write("</table>");

document.write("<a href=\"javascript:delete localStorage['atts'];showPage()\">Delete all commands</a><br /><br />");

}

else document.write('No commands');

}

function shiftUp(index){
if (index>0){
var temp=attacks[index-1];
attacks[index-1]=attacks[index];
attacks[index]=temp;
}
localStorage['atts']=attacks.join(",");
showPage();
}

function shiftDown(index){
if (index<attacks.length-1){
var temp=attacks[index+1];
attacks[index+1]=attacks[index];
attacks[index]=temp;
}
localStorage['atts']=attacks.join(",");
showPage();
}

function deleteAttack(index)
{
attacks.splice(index, 1);
localStorage['atts']=attacks.join(",");
showPage();
}

showPage();
