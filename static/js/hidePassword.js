 $(function() {var pass = $("input[type=password]");for(var j=0; j < pass.length; ++j )	{ label = $("label[for='"+pass[j].id+"']");	for( var k = 0; k < label.length;++k ){	label[k].style.display = 'none'	} pass[j].style.display='none';}});