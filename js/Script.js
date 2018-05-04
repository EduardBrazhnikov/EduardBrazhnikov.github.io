"use strict"
var obj = {login: 'Admin', password: '010101', domen: 'eduardbrazhnikov.githab.io', hosting: 'githab.io', localS: '777'};
var log = document.getElementsByClassName('inp')[0];
var pas = document.getElementsByClassName('inp')[1];
var sub = document.getElementsByClassName('inp')[2];
var forma = document.getElementById('login-form');
if(localStorage.getItem('lk') == obj.localS){
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Ваш домен:' + '&nbsp;' + obj.domen ;
	bigDiv.className = "bigDiv";
	var btn = document.createElement('div');
	btn.className = "btn";
	btn.innerHTML = 'Выйти';
	var btn2 = document.createElement('div');
	btn2.className = "btn2";
	btn2.innerHTML = 'Как оплатить?';
	var btn1 = document.createElement('div');
	btn1.className = "btn1";
	btn1.innerHTML = 'Хостинг';
	var btn0 = document.createElement('div');
	btn0.className = "btn0";
	btn0.innerHTML = 'Домен';
	document.body.appendChild(btn0);
	document.body.appendChild(btn1);
	document.body.appendChild(btn2);
	document.body.appendChild(btn);
	document.body.appendChild(bigDiv);
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
	var bigDiv2 = document.createElement('div');
	bigDiv2.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Ваш хостинг:' + '&nbsp;' + obj.hosting ;
	bigDiv2.className = "bigDiv2";
	btn1.onclick = function(){
		bigDiv.remove();
		bigDiv3.remove();
		document.body.appendChild(bigDiv2);
	}
	btn0.onclick = function(){
		location.reload(true);
	}
	var bigDiv3 = document.createElement('div');
	bigDiv3.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Я не протягиваю лапу за кислым исполкомовским рублём.' + '&nbsp;';
	bigDiv3.className = "bigDiv3";
	btn2.onclick = function(){
		bigDiv.remove();
		bigDiv2.remove();
	document.body.appendChild(bigDiv3);
	}
}else{
	document.body.appendChild(forma);
}
sub.onclick = function(){
if (log.value == obj.login && pas.value == obj.password) {
	localStorage.setItem('lk', obj.localS);
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Ваш домен:' + '&nbsp;' + obj.domen ;
	bigDiv.className = "bigDiv";
	var btn = document.createElement('div');
	btn.className = "btn";
	btn.innerHTML = 'Выйти';
	var btn2 = document.createElement('div');
	btn2.className = "btn2";
	btn2.innerHTML = 'Как оплатить?';
	var btn1 = document.createElement('div');
	btn1.className = "btn1";
	btn1.innerHTML = 'Хостинг';
	var btn0 = document.createElement('div');
	btn0.className = "btn0";
	btn0.innerHTML = 'Домен';
	document.body.appendChild(btn0);
	document.body.appendChild(btn1);
	document.body.appendChild(btn2);
	document.body.appendChild(btn);
	document.body.appendChild(bigDiv);
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
	var bigDiv2 = document.createElement('div');
	bigDiv2.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Ваш хостинг:' + '&nbsp;' + obj.hosting ;
	bigDiv2.className = "bigDiv2";
	btn1.onclick = function(){
		bigDiv.remove();
		bigDiv3.remove();
	document.body.appendChild(bigDiv2);
	}
	btn0.onclick = function(){
		location.reload(true);
	}
	var bigDiv3 = document.createElement('div');
	bigDiv3.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Я не протягиваю лапу за кислым исполкомовским рублём.' + '&nbsp;';
	bigDiv3.className = "bigDiv3";
	btn2.onclick = function(){
		bigDiv.remove();
		bigDiv2.remove();
	document.body.appendChild(bigDiv3);
	}
}
else {
	alert('неверный логин или пароль');
}
}