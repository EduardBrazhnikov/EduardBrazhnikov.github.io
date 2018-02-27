"use strict"
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
        '<br>'+'<input id="but2" type="button" value="Добавить в корзину">'
	bloc2.innerHTML += otdelniyDiv
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
        '<br>'+'<input id="but2" type="button" value="Добавить в корзину">'
		bloc2.innerHTML += otdelniyDiv
	})
    
}
    
      
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
        '<br>'+'<input id="but2" type="button" value="Добавить в корзину">'
		bloc2.innerHTML += otdelniyDiv
	}) 
}	
   
}





