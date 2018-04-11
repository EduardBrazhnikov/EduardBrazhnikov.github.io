"use strict"
$('.but1').click(function () {  
    location.href = "index.html";
});
$('.but2').click(function () {   
    location.href = "Metro.html";
});
$('.but3').click(function () { 
    location.href = "Area.html";
});
$('.but4').click(function () { 
    location.href = "Gallery.html";
});
$('.but5').click(function () { 
    location.href = "Coments.html";
});

$(document).ready(function() { 
	
	$(".image").click(function(){	
	  	var img = $(this);	
		var src = img.attr('src'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img' />"+ 
						 "</div>"); 
		$(".popup").fadeIn(800);
		$(".popup_bg").click(function(){ 
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});
	
});