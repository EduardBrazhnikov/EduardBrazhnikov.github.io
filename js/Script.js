"use strict"
// var obj = [{'login': 'Admin', 'password': '010101', 'domen': 'eduardbrazhnikov.githab.io', 'costd': 300, 'hosting': 'githab.io', 'costh': 150, 'datadom': '14.09.2018', 'datahost': '14.09.2018', 'id': '777'},
// {'login': 'User', 'password': '020202', 'domen': 'eduardbrazhnikov.githab.io', 'costd': 300, 'hosting': 'githab.io', 'costh': 300, 'datadom': '14.09.2018', 'datahost': '14.09.2018', 'id': '888'}];
var log = document.getElementsByClassName('inp')[0];
var pas = document.getElementsByClassName('inp')[1];
var sub = document.getElementsByClassName('inp')[2];
var forma = document.getElementById('login-form');
console.log(obj);
obj.forEach(function(item){
if(localStorage.getItem('lk') == item.id){
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ item.login + '</h2>'+ '<br>' + '<br>';
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
	var th5 = document.createElement('th');
	th5.innerHTML = 'Активен до:';
	var td1 = document.createElement('td');
	td1.innerHTML = item.domen;
	var td2 = document.createElement('td');
	td2.innerHTML = item.costd;
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
	var opt4 = document.createElement('option');
	opt4.innerHTML = '4 года';
	opt4.setAttribute('value', '4');
	var opt5 = document.createElement('option');
	opt5.innerHTML = '5 лет';
	opt5.setAttribute('value', '5');
	var td3 = document.createElement('td');
	td3.innerHTML = '';
	var td4 = document.createElement('td');
	td4.innerHTML = item.costd;
	var td5 = document.createElement('td');
	td5.innerHTML = item.datadom;
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
	tr1.appendChild(th5);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2);
	sel.appendChild(opt3);
	sel.appendChild(opt4);
	sel.appendChild(opt5);
	tr2.appendChild(td4);
	tr2.appendChild(td5);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * item.costd;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
	var bigDiv2 = document.createElement('div');
	bigDiv2.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ item.login + '</h2>'+ '<br>' + '<br>';
	bigDiv2.className = "bigDiv2";
	btn1.onclick = function(){
		bigDiv.remove();
		bigDiv3.remove();
		th1.innerHTML = 'Хостинг';
		td1.innerHTML = item.hosting;
		td2.innerHTML = item.costh;
		td4.innerHTML = item.costh;
		td5.innerHTML = item.datahost;
		th2.innerHTML = 'Цена, грн/мес';
		opt1.innerHTML = '1 мес';
		opt1.setAttribute('value', '150');
		opt2.innerHTML = '3 мес';
		opt2.setAttribute('value', '180');
		opt3.innerHTML = '6 мес';
	    opt3.setAttribute('value', '300');
		opt4.innerHTML = '1 год';
	    opt4.setAttribute('value', '500');
		opt5.innerHTML = '2 года';
	    opt5.setAttribute('value', '900');
		document.body.appendChild(bigDiv2);
		bigDiv2.appendChild(table);
	table.appendChild(tr1);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	tr1.appendChild(th5);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2); 
	sel.appendChild(opt3);
	sel.appendChild(opt4);
	sel.appendChild(opt5);
	tr2.appendChild(td4);
	tr2.appendChild(td5);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	td4.innerHTML = deadline;
	};
	sel.addEventListener("change", changeOption);
	}
	
	btn0.onclick = function(){  /*это клик*/
     bigDiv3.remove();
		bigDiv2.remove();
		th1.innerHTML = 'Домен';
		td1.innerHTML = item.domen;
		td2.innerHTML = item.costd;
		td4.innerHTML = item.costd;
		td5.innerHTML = item.datadom;
		th2.innerHTML = 'Цена, грн';
		opt1.innerHTML = '1 год';
		opt1.setAttribute('value', '1');
		opt2.innerHTML = '2 года';
		opt2.setAttribute('value', '2');
		opt3.innerHTML = '3 года';
	    opt3.setAttribute('value', '3');
		opt4.innerHTML = '4 года';
	    opt4.setAttribute('value', '4');
		opt5.innerHTML = '5 лет';
	    opt5.setAttribute('value', '5');
      	  document.body.appendChild(bigDiv);
		  bigDiv.appendChild(table);
		  function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * item.costd;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	}  	/*это клик*/
	var poletext = document.createElement('div');
	var bigDiv3 = document.createElement('div');
	bigDiv3.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ item.login + '</h2>'+ '<br>' + '<br>';
	bigDiv3.className = "bigDiv3";
	btn2.onclick = function(){
		bigDiv.remove();
		bigDiv2.remove();
		poletext.className = "descriptionT";
		poletext.innerHTML = "<h2>"+"Как оплатить услуги вашего хостинга и домена?"+"</h2>"+"<br>"+"<p>"+ 
		"Для продления действия домена и хостинга необходимо перевести деньги через терминал на карту ПриватБанка:"+"<center>"+
		"<h2 style='color:red'>"+"5168755526960931"+"</h2>"+"</center>"+
		"Пополнить счет карты ПриватБанка или перечислить деньги на банковскую карту можно, воспользовавшись терминалом. ПриватБанк это наибольший государственный банк Украины, поэтому его терминалы находятся даже в самых небольших городках нашей страны. На главном сайте ПриватБанка можно увидеть адреса терминалов самообслуживания в вашем городе." +"</p>"
	document.body.appendChild(bigDiv3);
	bigDiv3.appendChild(poletext);
	}
}else{

}
});
sub.onclick = function(){
obj.forEach(function(item){	
if (log.value == item.login && pas.value == item.password) {
	localStorage.setItem('lk', item.id);
	forma.remove();
	var bigDiv = document.createElement('div');
	bigDiv.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ item.login + '</h2>'+ '<br>' + '<br>';
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
	var th5 = document.createElement('th');
	th5.innerHTML = 'Активен до:';
	var td1 = document.createElement('td');
	td1.innerHTML = item.domen;
	var td2 = document.createElement('td');
	td2.innerHTML = item.costd;
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
	var opt4 = document.createElement('option');
	opt4.innerHTML = '4 года';
	opt4.setAttribute('value', '4');
	var opt5 = document.createElement('option');
	opt5.innerHTML = '5 лет';
	opt5.setAttribute('value', '5');
	var td3 = document.createElement('td');
	td3.innerHTML = '';
	var td4 = document.createElement('td');
	td4.innerHTML = item.costd;
	var td5 = document.createElement('td');
	td5.innerHTML = item.datadom;
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
	tr1.appendChild(th5);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2);
	sel.appendChild(opt3);
	sel.appendChild(opt4);
	sel.appendChild(opt5);
	tr2.appendChild(td4);
	tr2.appendChild(td5);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * item.costd;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	
	btn.onclick = function(){
		localStorage.clear();
		location.reload(true);
	}
	var bigDiv2 = document.createElement('div');
	bigDiv2.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ item.login + '</h2>'+ '<br>' + '<br>';
	bigDiv2.className = "bigDiv2";
	btn1.onclick = function(){
		bigDiv.remove();
		bigDiv3.remove();
		th1.innerHTML = 'Хостинг';
		td1.innerHTML = item.hosting;
		td4.innerHTML = item.costh;
		td2.innerHTML = item.costh;
		td5.innerHTML = item.datahost;
		th2.innerHTML = 'Цена, грн/мес';
		opt1.innerHTML = '1 мес';
		opt1.setAttribute('value', '150');
		opt2.innerHTML = '3 мес';
		opt2.setAttribute('value', '180');
		opt3.innerHTML = '6 мес';
	    opt3.setAttribute('value', '300');
		opt4.innerHTML = '1 год';
	    opt4.setAttribute('value', '500');
		opt5.innerHTML = '2 года';
	    opt5.setAttribute('value', '900');
		document.body.appendChild(bigDiv2);
		bigDiv2.appendChild(table);
	table.appendChild(tr1);
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	tr1.appendChild(th5);
	table.appendChild(tr2);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	td3.appendChild(sel);
	sel.appendChild(opt1);
	sel.appendChild(opt2); 
	sel.appendChild(opt3);
	sel.appendChild(opt4);
	sel.appendChild(opt5);
	tr2.appendChild(td4);
	tr2.appendChild(td5);
	function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	td4.innerHTML = deadline;
	};
	sel.addEventListener("change", changeOption);
	}
	btn0.onclick = function(){ /*это клик*/
		bigDiv3.remove();
		bigDiv2.remove();
		th1.innerHTML = 'Домен';
		td1.innerHTML = item.domen;
		td2.innerHTML = item.costd;
		td4.innerHTML = item.costd;
		td5.innerHTML = item.datadom;
		th2.innerHTML = 'Цена, грн';
		opt1.innerHTML = '1 год';
		opt1.setAttribute('value', '1');
		opt2.innerHTML = '2 года';
		opt2.setAttribute('value', '2');
		opt3.innerHTML = '3 года';
	    opt3.setAttribute('value', '3');
		opt4.innerHTML = '4 года';
	    opt4.setAttribute('value', '4');
		opt5.innerHTML = '5 лет';
	    opt5.setAttribute('value', '5');
      	  document.body.appendChild(bigDiv);
		  bigDiv.appendChild(table);
		  function changeOption(){
	var deadline = sel.options[sel.selectedIndex].value;
	var result = deadline * item.costd;
	td4.innerHTML = result;
	};
	sel.addEventListener("change", changeOption);
	} /*это клик*/
	var bigDiv3 = document.createElement('div');
	bigDiv3.innerHTML = '<h2>' + 'Личный кабинет пользователя:' +'&nbsp;'+ item.login + '</h2>'+ '<br>' + '<br>';
	bigDiv3.className = "bigDiv3";
	var poletext = document.createElement('div');
	btn2.onclick = function(){
		bigDiv.remove();
		bigDiv2.remove();
		poletext.className = "descriptionT";
		poletext.innerHTML = "<h2>"+"Как оплатить услуги вашего хостинга и домена?"+"</h2>"+"<br>"+"<p>"+ 
		"Для продления действия домена и хостинга необходимо перевести деньги через терминал на карту ПриватБанка:"+"<center>"+
		"<h2 style='color:red'>"+"5168755526960931"+"</h2>"+"</center>"+
		"Пополнить счет карты ПриватБанка или перечислить деньги на банковскую карту можно, воспользовавшись терминалом. ПриватБанк это наибольший государственный банк Украины, поэтому его терминалы находятся даже в самых небольших городках нашей страны. На главном сайте ПриватБанка можно увидеть адреса терминалов самообслуживания в вашем городе." +"</p>"
	document.body.appendChild(bigDiv3);
	bigDiv3.appendChild(poletext);
	}
}
else {
	
};
});
};

