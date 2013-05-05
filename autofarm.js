$.getScript("https://raw.github.com/UbunTom/TWFarmer/master/attackSender.js",function(){});

$.getScript("http://gamemash.co.uk/villagelist.php?id="+vill+get,function(){
for(var v=0;v<villages.length;v++)
{
	if(ok==false)
	{
		break;
	}
	send(v);
}
//setTimeout(document.write("Finished sending to: "+villages.length+" villages<br />"),1000);
});
