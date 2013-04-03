
function regName(url)
{
  var number = Math.floor(Math.random()*100000000)
	number = number.toString();
	if (number.length>7)number=number.substr(0,7);
	else if (number.length<7)number=number+"0";
	
	$.ajax({
		type:"POST",
		url: url,
		data: "name="+number,
		success: function(text, textStatus, jqXHR){
		},
		dataType: "text"
	});
}

function reqHQ(vid)
{
	$.ajax({
		url: "/game.php?village="+vid+"&screen=main",
		success: function(text, textStatus, jqXHR){
			var data = document.createElement('div');
			data.innerHTML=text;

			regName(data.getElementsByTagName("form")[0].action);
		},
		dataType: "text"
	});
}

var spans = document.getElementsByTagName("span");
for (var i=0;i<spans.length;i++)
{
	if (spans[i].id.search("label_text_")==0)
	{
		reqHQ(spans[i].id.split("_")[2]);
	}
}
