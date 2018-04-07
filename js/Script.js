"use strict"
if (localStorage.getItem('lang') == 2) {
    $('.homeContent').css('display', 'none');
        $('.homeContentEn').css('display', 'block');
        $('.ruMenu').css('display', 'none');
        $('.enMenu').css('display', 'block');
}
else {
    $('.homeContent').css('display', 'block')
        $('.homeContentEn').css('display', 'none')
        $('.ruMenu').css('display', 'block')
        $('.enMenu').css('display', 'none') 
}
$('.ru').on('click', function() {
        localStorage.setItem("lang", "1");
        $('.homeContent').css('display', 'block')
        $('.homeContentEn').css('display', 'none')
        $('.ruMenu').css('display', 'block')
        $('.enMenu').css('display', 'none')
        location.reload();
    });
$('.en').on('click', function() {
        localStorage.setItem("lang", "2");
        $('.homeContent').css('display', 'none');
        $('.homeContentEn').css('display', 'block');
        $('.ruMenu').css('display', 'none');
        $('.enMenu').css('display', 'block');
        location.reload();
    });
$('.but1').click(function () {
    location.href = "index.html";
});
$('.but2').click(function () {
    location.href = "Cornish.html";
});
$('.but3').click(function () {
    location.href = "British.html";
});
$('.but4').click(function () {
    location.href = "Rewards.html";
});
$('.but5').click(function () {
    location.href = "Contacts.html";
});
$(document).ready(function(){
    $('.carousel').carousel();
  });
 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });