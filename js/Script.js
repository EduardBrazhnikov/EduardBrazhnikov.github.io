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
        var goods = cardBlock.children
        
        for(var i = 0; i < goods.length; i++){
			if(goods[i].getAttribute('ddd') == currentGoodName){
				goods[i].children[4].value = parseInt(goods[i].children[4].value,10) + 1
				return
			}
		}

        
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
        
        /*Отображение в корзине*/
        var imgK = document.createElement('img');
        imgK.className = "img2";
        imgK.src = currentGood[0].img;
        var imgX = document.createElement('img');
        imgX.className = "img3";
        imgX.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png";
        var Bigdiv = document.createElement('div');
        Bigdiv.className = "korz0";
        Bigdiv.setAttribute('ddd',currentGoodName);
        var divK = document.createElement('div');
        divK.className = "korz";
        var divK1 = document.createElement('div');
        divK1.className = "korz1";
        var divK2 = document.createElement('div');
        divK2.className = "korz2";
        var divK3 = document.createElement('div');
        divK3.className = "korz3";
        var inp = document.createElement('input')
		inp.setAttribute('type', 'number')
        inp.className = "korz3";
		inp.value = 1
        divK.innerHTML += currentGood[0].name;
        divK1.innerHTML = "Цена:";
		divK2.innerHTML += currentGood[0].price;
        Bigdiv.append(imgK, divK, " ", divK1, divK2, " ", "Кол-во:", " ",inp, imgX);
        cardBlock.append(Bigdiv);
        
        imgX.onclick = function(){
        Bigdiv.remove();
        }
        
//		cardBlock.innerHTML +='<div id="korz">'+
//    '<img class="img2" src="'+currentGood[0].img+'"/>' +  
//    ' ' + currentGood[0].name + ' ' +
//    '<div class="div3">'+
//    'Цена:'+ ' ' + currentGood[0].price +
//    '</div>'+ ' ' +
//    '<img id="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png">'+
//    '</div>' +
//    '<br>'
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
        var goods = cardBlock.children
        
        for(var i = 0; i < goods.length; i++){
			if(goods[i].getAttribute('ddd') == currentGoodName){
				goods[i].children[4].value = parseInt(goods[i].children[4].value,10) + 1
				return
			}
		}

        
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
        
        /*Отображение в корзине*/
        var imgK = document.createElement('img');
        imgK.className = "img2";
        imgK.src = currentGood[0].img;
        var imgX = document.createElement('img');
        imgX.className = "img3";
        imgX.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png";
        var Bigdiv = document.createElement('div');
        Bigdiv.className = "korz0";
        Bigdiv.setAttribute('ddd',currentGoodName);
        var divK = document.createElement('div');
        divK.className = "korz";
        var divK1 = document.createElement('div');
        divK1.className = "korz1";
        var divK2 = document.createElement('div');
        divK2.className = "korz2";
        var divK3 = document.createElement('div');
        divK3.className = "korz3";
        var inp = document.createElement('input')
		inp.setAttribute('type', 'number')
        inp.className = "korz3";
		inp.value = 1
        divK.innerHTML += currentGood[0].name;
        divK1.innerHTML = "Цена:";
		divK2.innerHTML += currentGood[0].price;
        Bigdiv.append(imgK, divK, " ", divK1, divK2, " ", "Кол-во:", " ",inp, imgX);
        cardBlock.append(Bigdiv);
        
        imgX.onclick = function(){
        Bigdiv.remove();
        }
        
        
//		cardBlock.innerHTML +='<div id="korz">'+
//    '<img class="img2" src="'+currentGood[0].img+'"/>' +  
//    ' ' + currentGood[0].name + ' ' +
//    '<div class="div3">'+
//    'Цена:'+ ' ' + currentGood[0].price +
//    '</div>'+  ' ' +
//    '<img id="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png">'+
//    '</div>' +
//    '<br>'
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
        var goods = cardBlock.children
        
        for(var i = 0; i < goods.length; i++){
			if(goods[i].getAttribute('ddd') == currentGoodName){
				goods[i].children[4].value = parseInt(goods[i].children[4].value,10) + 1
				return
			}
		}

        
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
        
        /*Отображение в корзине*/
        var imgK = document.createElement('img');
        imgK.className = "img2";
        imgK.src = currentGood[0].img;
        var imgX = document.createElement('img');
        imgX.className = "img3";
        imgX.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png";
        var Bigdiv = document.createElement('div');
        Bigdiv.className = "korz0";
        Bigdiv.setAttribute('ddd',currentGoodName);
        var divK = document.createElement('div');
        divK.className = "korz";
        var divK1 = document.createElement('div');
        divK1.className = "korz1";
        var divK2 = document.createElement('div');
        divK2.className = "korz2";
        var divK3 = document.createElement('div');
        divK3.className = "korz3";
        var inp = document.createElement('input')
		inp.setAttribute('type', 'number')
        inp.className = "korz3";
		inp.value = 1
        divK.innerHTML += currentGood[0].name;
        divK1.innerHTML = "Цена:";
		divK2.innerHTML += currentGood[0].price;
        Bigdiv.append(imgK, divK, " ", divK1, divK2, " ", "Кол-во:", " ",inp, imgX);
        cardBlock.append(Bigdiv);
        
        imgX.onclick = function(){
        Bigdiv.remove();
        }
        
        
//		cardBlock.innerHTML +='<div id="korz">'+
//    '<img class="img2" src="'+currentGood[0].img+'"/>' +  
//    ' ' + currentGood[0].name + ' ' +
//    '<div class="div3">'+
//    'Цена:'+ ' ' + currentGood[0].price +
//    '</div>'+  ' ' +
//    '<img id="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/620px-Deletion_icon.svg.png">'+
//    '</div>' +
//    '<br>'
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







