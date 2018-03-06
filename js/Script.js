"use strict"
var korzina = document.getElementsByClassName('korzina')[0];
var cardBlock = document.getElementsByClassName('card-container')[0];
var popup = document.getElementsByClassName('popup')[0];
str.forEach(function(item){
    if (item.Availability == true){
        var Availability = 'Есть в наличии';
    }
    else {
        var Availability = 'Нет в наличии';
    }
	var otdelniyDiv = '<div id="bloc3">'+'<h2>'+item.name+'</h2>' +
        '<br>'+ '<div>'+item.dicription+'</div>'+
        '<img class="image" src="'+item.img+'"/>' +
        '<br>'+ '<div>'+item.price+'$</div>'+
		'<br>'+ '<div>'+Availability+'</div>'+
        '<br>'+'<input class="btns" type="button" value="Добавить в корзину" ddd="'+item.name+'">'
	bloc2.innerHTML += otdelniyDiv
})
/*вывод в корзину*/
var btns = document.getElementsByClassName('btns')
console.log(btns);
var arr = []
for(var i = 0;i < btns.length;i++){
	arr[i] = btns[i]
}
console.log(arr);
arr.forEach(function(item){
	item.onclick = function(){
		var currentGoodName = this.getAttribute('ddd')
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
		cardBlock.innerHTML +='<div id="korz">'+
    '<img class="img2" src="'+currentGood[0].img+'"/>' +  
    ' ' + currentGood[0].name + ' ' +
    '<div class="div3">'+
    'Цена:'+ ' ' + currentGood[0].price +
    '</div>'+ ' ' +
    '<img id="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png">'+
    '</div>' +
    '<br>'
    }
}) 


but.onclick = function(){
	var min = parseInt(inp1.value,10);
	var max = parseInt(inp2.value,10);
	if(max<min){
		max = Infinity
	}
if (document.getElementById('Availability').checked){
    var arr = str.filter(function(item){
		return (item.price>=min && item.price <= max && item.Availability == true)
	})
	bloc2.innerHTML = ''
	arr.forEach(function(item){
        if (item.Availability == true){
        var Availability = 'Есть в наличии';
    }
    else {
        var Availability = 'Нет в наличии';
    }
		var otdelniyDiv = '<div id="bloc3">'+'<h2>'+item.name+'</h2>' +
        '<br>'+ '<div>'+item.dicription+'</div>'+
        '<img class="image" src="'+item.img+'"/>' +
        '<br>'+ '<div>'+item.price+'$</div>'+
		'<br>'+ '<div>'+Availability+'</div>'+
        '<br>'+'<input class="btns" type="button" value="Добавить в корзину" ddd="'+item.name+'">'
		bloc2.innerHTML += otdelniyDiv
	})
    /*вывод в корзину*/
    var btns = document.getElementsByClassName('btns')
console.log(btns);
var arr = []
for(var i = 0;i < btns.length;i++){
	arr[i] = btns[i]
}
console.log(arr);
arr.forEach(function(item){
	item.onclick = function(){
		var currentGoodName = this.getAttribute('ddd')
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
		cardBlock.innerHTML +='<div id="korz">'+
    '<img class="img2" src="'+currentGood[0].img+'"/>' +  
    ' ' + currentGood[0].name + ' ' +
    '<div class="div3">'+
    'Цена:'+ ' ' + currentGood[0].price +
    '</div>'+  ' ' +
    '<img id="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png">'+
    '</div>' +
    '<br>'
    }
})  
    
}
    
 /*условие если галочка не чекед*/     
else {
   var arr = str.filter(function(item){
		return (item.price>=min && item.price <= max)
	})
	bloc2.innerHTML = ''
	arr.forEach(function(item){
        if (item.Availability == true){
        var Availability = 'Есть в наличии';
    }
    else {
        var Availability = 'Нет в наличии';
    }
		var otdelniyDiv = '<div id="bloc3">'+'<h2>'+item.name+'</h2>' +
        '<br>'+ '<div>'+item.dicription+'</div>'+
        '<img class="image" src="'+item.img+'"/>' +
        '<br>'+ '<div>'+item.price+'$</div>'+
		'<br>'+ '<div>'+Availability+'</div>'+
        '<br>'+'<input class="btns" type="button" value="Добавить в корзину" ddd="'+item.name+'">'
		bloc2.innerHTML += otdelniyDiv
	}) 
    /*вывод в корзину*/
    var btns = document.getElementsByClassName('btns')
console.log(btns);
var arr = []
for(var i = 0;i < btns.length;i++){
	arr[i] = btns[i]
}
console.log(arr);
arr.forEach(function(item){
	item.onclick = function(){
		var currentGoodName = this.getAttribute('ddd')
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
		cardBlock.innerHTML +='<div id="korz">'+
    '<img class="img2" src="'+currentGood[0].img+'"/>' +  
    ' ' + currentGood[0].name + ' ' +
    '<div class="div3">'+
    'Цена:'+ ' ' + currentGood[0].price +
    '</div>'+  ' ' +
    '<img id="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png">'+
    '</div>' +
    '<br>'
    }
})      
    }  
}
function korzinaHandler(){
	console.dir(cardBlock)
	if(cardBlock.style.display === 'none'){
		cardBlock.style.display = 'block'
		popup.style.display = 'block'
	}
}
function popupHandler(){
	cardBlock.style.display = 'none'
	popup.style.display = 'none'
}
korzina.onclick = korzinaHandler
popup.onclick = popupHandler







