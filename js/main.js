"use strict"
$(document).ready(function() { 
   $('.buttonExample').click(function() {
	var h = $('.portfolio').offset();
	$('body,html').animate({scrollTop:h.top},700);
});	
$('.contacts').click(function() {
	var h = $('.contact').offset();
	$('body,html').animate({scrollTop:h.top},700);
});	 
   $('.arrow').click(function() {
	var h = $('.portfolio').offset();
	$('body,html').animate({scrollTop:h.top},700);
});
   $('.locationSite:eq(0)').click(function() {
	window.open('http://mylending.hostenko.com/');
});
$('.locationSite:eq(1)').click(function() {
	window.open('https://daribox.com/');
});
   $('.locationSite:last').click(function() {
	window.open('http://lendingfirst.zzz.com.ua/');
});
   $('.repository:eq(0)').click(function() {
	window.open('https://github.com/EduardBrazhnikov/Lending2');
});
$('.repository:eq(1)').click(function() {
	window.open('https://github.com/EduardBrazhnikov/daribox');
});
   $('.repository:last').click(function() {
	window.open('https://github.com/EduardBrazhnikov/landing1');
});
   $('.languageEn').click(function() {
	location.href = "https://eduardbrazhnikov.github.io/index_en.html";
});
   $('.languageRu').click(function() {
	location.href = "https://eduardbrazhnikov.github.io/";
});
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
   $('.topButton').fadeIn();
} else {
   $('.topButton').fadeOut();
}
});
   $('.topButton').click(function() {
   $('body,html').animate({scrollTop:0},700);
});
});