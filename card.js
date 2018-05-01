let cardBloc = document.getElementById('blocCard');
let butdel = document.getElementsByClassName('del')[0];
if(localStorage.getItem('card') == null){
	cardBloc.innerHTML += 'Корзина пуста'
}else{
	var stringFromStorage = localStorage.getItem('card')
	var arrFromStorage = JSON.parse(stringFromStorage)
    var bigDiv = document.createElement('div');
        bigDiv.className = "bigDiv";
        var nameT = document.createElement('div')
        nameT.className = "nameT";
	for(var i = 0; i <arrFromStorage.length;i++){
		nameT.innerHTML += arrFromStorage[i].name + '<br>'+ '<br>';
	}
    bigDiv.append(nameT);
		cardBloc.appendChild(bigDiv)
}

function remove(){
   bigDiv.remove();
   localStorage.clear();
}
butdel.onclick = remove;