"use strict"
/*Это все неправильно но это первое что пришло на ум*/ 
if (localStorage.getItem('lang') == 2) {  /*если язык en */
    $('.homeContent').css('display', 'none'); /*это прячим ру текст*/
        $('.homeContentEn').css('display', 'block'); /*это вывод en текста*/
        $('.ruMenu').css('display', 'none');  /*это прячим ру меню*/
        $('.enMenu').css('display', 'block'); /*это вывод en меню*/
}
else {                                    /*если язык не en */
    $('.homeContent').css('display', 'block'); /*все наоборот*/
        $('.homeContentEn').css('display', 'none');
        $('.ruMenu').css('display', 'block');
        $('.enMenu').css('display', 'none'); 
}
$('.ru').on('click', function() {   /*Это клик по кнопке "русский язык"*/
        localStorage.setItem("lang", "1"); /*это отметка в память что язык en*/
        $('.homeContent').css('display', 'block'); /*это вывод ру текста*/
        $('.homeContentEn').css('display', 'none');/*это прячим en текст*/
        $('.ruMenu').css('display', 'block'); /*это вывод ру меню*/
        $('.enMenu').css('display', 'none'); /*это прячим en меню*/
        location.reload(); /*перезагружаем страницу*/
    });
$('.en').on('click', function() { /*аналогично*/
        localStorage.setItem("lang", "2");
        $('.homeContent').css('display', 'none');
        $('.homeContentEn').css('display', 'block');
        $('.ruMenu').css('display', 'none');
        $('.enMenu').css('display', 'block');
        location.reload();
    });
$('.but1').click(function () {     /*Клик по диву "Главная"*/
    location.href = "index.html";  /*Открытие страницы "Главная"*/
});
$('.but2').click(function () {    /*Клик по диву "Корниш Рекс"*/
    location.href = "Cornish.html"; /*Открытие страницы "Корниш Рекс"*/
});
$('.but3').click(function () { /*аналогично*/
    location.href = "British.html";
});
$('.but4').click(function () { /*аналогично*/
    location.href = "Rewards.html";
});
$('.but5').click(function () { /*аналогично*/
    location.href = "Contacts.html";
});
/*Это копи паст из фреймворка Материалайз(карусель)*/
$(document).ready(function(){ 
    $('.carousel').carousel();
  });
/*Это копи паст из фреймворка Материалайз(открытие большой картинки)*/
 $(document).ready(function(){ 
    $('.materialboxed').materialbox();
  });
$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
$('#send').click(function () {
    location.href = "Contacts.html";
});