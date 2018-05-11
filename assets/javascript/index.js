const page = {
	load: function() {
		console.log($("#myContent"));
		$("#myContent").load("menu.html #menuContent"); 
		// $("#myContent").load("../../menu.html #menuContent");
		// $("#myContent").load("menu.html");
		// document.getElementById("myContent").innerHTML='<object type="text/html" data="menu.html"></object>';	
	}
}