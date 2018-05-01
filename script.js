$(document).ready(function(){
      $('.carousel').carousel();
    });
jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 50 ? 'In': 'Out')](100);           
    });
});
var konstruktor = document.getElementsByClassName('menu')[2];
konstruktor.onclick = function(){
	location.href = "konstruktor.html";
};
var index = document.getElementsByClassName('menu')[0];
index.onclick = function(){
	location.href = "index.html";
};
var card = document.getElementById('btnK');
card.onclick = function(){
	location.href = "card2.html";
};
var kolKorz = document.getElementsByClassName('round')[0];
var localNumber = localStorage.getItem('cardRound');
if (localStorage.getItem('cardRound') == null){
			kolKorz.innerHTML = 0;
		}
		else{
			kolKorz.innerHTML = localNumber;
		};
data.forEach(function(item){
	var block = document.createElement('div');
    block.className = "blockT";
	var title = document.createElement('h4');
	title.innerHTML = item.name;
	title.className = "titleT";
	var description = document.createElement('div');
	description.innerHTML = item.description;
	description.className = "descriptionT";
	var price = document.createElement('h4');
	price.innerHTML = item.price + 'грн' + '<br>';
	price.className = "priceT";
	var imT = document.createElement('img');
	imT.setAttribute('src', item.img);
	// var divIm = document.createElement('div');
    imT.className = "imgT";
	description.insertBefore(imT, description.firstChild);
	var btn = document.createElement('div');
	btn.innerHTML = "Добавить в корзину";
    btn.className = "waves-effect waves-light btn blue accent-3";
	btn.id = "btnT";
	btn.setAttribute('dataId', item.id);
	btn.onclick = function(){
		kolKorz.innerHTML++;
		var number = kolKorz.innerHTML;
		localStorage.setItem('cardRound', number);
		var singleGood;
		var dataId = this.getAttribute('dataId');
		for(var i = 0; i < data.length; i++){
			if(dataId == data[i].id){
				singleGood = data[i]
				break;
			}
		}
		if(localStorage.getItem('card') == null){
			var arrToStorage = []
			arrToStorage.push(singleGood)
			var jsonToStorage = JSON.stringify(arrToStorage)
			localStorage.setItem('card',jsonToStorage)
		}else{
			var stringFromStorage = []
			stringFromStorage = localStorage.getItem('card')
			var arrFromStorage = JSON.parse(stringFromStorage)
			arrFromStorage.push(singleGood)
			var jsonToStorage = JSON.stringify(arrFromStorage)
			localStorage.setItem('card',jsonToStorage)
		}
	}
    var elem = document.getElementById('bloc2');
	console.log(elem);
	block.appendChild(title);
	block.appendChild(price);
	// block.appendChild(divIm);
	block.appendChild(description);
	block.appendChild(btn);
	elem.appendChild(block);

			
		
});



