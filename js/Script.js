"use strict"
var obj = {login: 'Admin', password: '010101', domen: 'eduardbrazhnikov.githab.io', costD: '300', hosting: 'githab.io', localS: '777'};
var log = document.getElementsByClassName('inp')[0];
var pas = document.getElementsByClassName('inp')[1];
var sub = document.getElementsByClassName('inp')[2];
var forma = document.getElementById('login-form');
if(localStorage.getItem('lk') == obj.localS){
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ obj.login + '</h2>'+ '<br>' + '<br>';
	bigDiv.className = "bigDiv";
	var table = document.createElement('table');
	var tr1 = document.createElement('tr');
	var tr2 = document.createElement('tr');
	var th1 = document.createElement('th');
	th1.innerHTML = 'Домен';
	var th2 = document.createElement('th');
	th2.innerHTML = 'Цена, грн';
	var th3 = document.createElement('th');
	th3.innerHTML = 'Срок, год';
	var th4 = document.createElement('th');
	th4.innerHTML = 'Итого, грн';
	var td1 = document.createElement('td');
	td1.innerHTML = obj.domen;
	var td2 = document.createElement('td');
	td2.innerHTML = obj.costD;
	var sel = document.createElement('select');
	sel.setAttribute('name', 'sele');
	var opt1 = document.createElement('option'); 
	opt1.innerHTML = '1 год';
	opt1.setAttribute('value', '1');
	opt1.setAttribute('selected', 'selected');
	var opt2 = document.createElement('option');
	opt2.innerHTML = '2 года';
	opt2.setAttribute('value', '2');
	var opt3 = document.createElement('option');
	opt3.innerHTML = '3 года';
	opt3.setAttribute('value', '3');
	var td3 = document.createElement('td');
	td3.innerHTML = '';
	var td4 = document.createElement('td');
	td4.innerHTML = '300';
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
	bigDiv.appendChild(table);
	table.appendChild(tr1);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2);
	sel.appendChild(opt3);
	tr2.appendChild(td4);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * obj.costD;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
	var bigDiv2 = document.createElement('div');
	bigDiv2.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ obj.login + '</h2>'+ '<br>' + '<br>';
	bigDiv2.className = "bigDiv2";
	btn1.onclick = function(){
		bigDiv.remove();
		bigDiv3.remove();
		th1.innerHTML = 'Хостинг';
		td1.innerHTML = obj.hosting;
		document.body.appendChild(bigDiv2);
		bigDiv2.appendChild(table);
	table.appendChild(tr1);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2);
	sel.appendChild(opt3);
	tr2.appendChild(td4);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * obj.costD;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	}
	btn0.onclick = function(){
		location.reload(true);
	}
	var bigDiv3 = document.createElement('div');
	bigDiv3.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ obj.login + '</h2>'+ '<br>' + '<br>';
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
	bigDiv.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ obj.login + '</h2>'+ '<br>' + '<br>';
	bigDiv.className = "bigDiv";
	var table = document.createElement('table');
	var tr1 = document.createElement('tr');
	var tr2 = document.createElement('tr');
	var th1 = document.createElement('th');
	th1.innerHTML = 'Домен';
	var th2 = document.createElement('th');
	th2.innerHTML = 'Цена, грн';
	var th3 = document.createElement('th');
	th3.innerHTML = 'Срок, год';
	var th4 = document.createElement('th');
	th4.innerHTML = 'Итого, грн';
	var td1 = document.createElement('td');
	td1.innerHTML = obj.domen;
	var td2 = document.createElement('td');
	td2.innerHTML = obj.costD;
	var sel = document.createElement('select');
	sel.setAttribute('name', 'sele');
	var opt1 = document.createElement('option'); 
	opt1.innerHTML = '1 год';
	opt1.setAttribute('value', '1');
	opt1.setAttribute('selected', 'selected');
	var opt2 = document.createElement('option');
	opt2.innerHTML = '2 года';
	opt2.setAttribute('value', '2');
	var opt3 = document.createElement('option');
	opt3.innerHTML = '3 года';
	opt3.setAttribute('value', '3');
	var td3 = document.createElement('td');
	td3.innerHTML = '';
	var td4 = document.createElement('td');
	td4.innerHTML = '300';
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
	bigDiv.appendChild(table);
	table.appendChild(tr1);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2);
	sel.appendChild(opt3);
	tr2.appendChild(td4);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * obj.costD;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
	var bigDiv2 = document.createElement('div');
	bigDiv2.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ obj.login + '</h2>'+ '<br>' + '<br>';
	bigDiv2.className = "bigDiv2";
	btn1.onclick = function(){
		bigDiv.remove();
		bigDiv3.remove();
		th1.innerHTML = 'Хостинг';
		td1.innerHTML = obj.hosting;
		document.body.appendChild(bigDiv2);
		bigDiv2.appendChild(table);
	table.appendChild(tr1);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2);
	sel.appendChild(opt3);
	tr2.appendChild(td4);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * obj.costD;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
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