//Note: use of this script may get you banned

$.getScript("https://raw.github.com/UbunTom/TWFarmer/master/attackSender.js",function(){	
	
	$.getScript("http://gamemash.co.uk/villagelist.php?id="+vill+get,function(){
	for(var v=0;v<villages.length;v++)
	{
		if(ok==false)
		{
			break;
		}
		send(v);
	}
	});	
	
});


