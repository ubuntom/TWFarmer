javascript:/*By UbunTom http://www.gamemash.co.uk/ */

var path = document.URL.split('/').slice(0, -1).join('/');var to = document.getElementsByTagName("form")[0].getAttribute("action");var redirect = path + to;


if (document.getElementsByName("attack").length==1)att="true";
else att="false";
ch=document.getElementsByName("ch")[0].value;
x=document.getElementsByName("x")[0].value;
y=document.getElementsByName("y")[0].value;
a=document.getElementsByName("action_id")[0].value;
sp=document.getElementsByName("spear")[0].value;
sw=document.getElementsByName("sword")[0].value;
ax=document.getElementsByName("axe")[0].value;
ar=document.getElementsByName("archer")[0].value;
sc=document.getElementsByName("spy")[0].value;
lc=document.getElementsByName("light")[0].value;
ma=document.getElementsByName("marcher")[0].value;
hc=document.getElementsByName("heavy")[0].value;
rm=document.getElementsByName("ram")[0].value;
ca=document.getElementsByName("catapult")[0].value;
pa=document.getElementsByName("knight")[0].value;
no=document.getElementsByName("snob")[0].value;


tempbld=document.getElementsByName("building");
if (tempbld.length==1)build=tempbld[0].value;
else build="None";

if (localStorage['atts']!=undefined && localStorage['atts']!="")
{
var atts=localStorage['atts'].split(",");
for (i=0;i<atts.length;i++)
{
d=atts[ i ].split("|");
if (d[5]!=a)
{
localStorage['atts']+=",";
localStorage['atts']+=redirect+"|"+att+"|"+ch+"|"+x+"|"+y+"|"+a+"|"+sp+"|"+sw+"|"+ax+"|"+ar+"|"+sc+"|"+lc+"|"+ma+"|"+hc+"|"+rm+"|"+ca+"|"+pa+"|"+no+"|"+build;
}
}
}
else localStorage['atts']=redirect+"|"+att+"|"+ch+"|"+x+"|"+y+"|"+a+"|"+sp+"|"+sw+"|"+ax+"|"+ar+"|"+sc+"|"+lc+"|"+ma+"|"+hc+"|"+rm+"|"+ca+"|"+pa+"|"+no+"|"+build;

void(0);
