"use strict"
var obj = {login: 'Admin', password: '010101', domen: 'eduardbrazhnikov.githab.io', hosting: 'githab.io'};
var log = document.getElementsByClassName('inp')[0];
var pas = document.getElementsByClassName('inp')[1];
var sub = document.getElementsByClassName('inp')[2];
var forma = document.getElementsByClassName('form')[0];
if(localStorage.getItem('lk') == 777){
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Ваш домен:' + '&nbsp;' + obj.domen ;
	bigDiv.className = "bigDiv";
	var btn = document.createElement('div');
	btn.className = "btn";
	btn.innerHTML = 'Выйти';
	document.body.appendChild(bigDiv);
	bigDiv.appendChild(btn);
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
}else{
	
}
sub.onclick = function(){
if (log.value == obj.login && pas.value == obj.password) {
	localStorage.setItem('lk', 777);
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = 'Личный кабинет'+ '<br>' + '<br>' + 'Ваш домен:' + '&nbsp;' + obj.domen ;
	bigDiv.className = "bigDiv";
	var btn = document.createElement('div');
	btn.className = "btn";
	btn.innerHTML = 'Выйти';
	document.body.appendChild(bigDiv);
	bigDiv.appendChild(btn);
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
}
else {
	alert('неверный логин или пароль');
}
}