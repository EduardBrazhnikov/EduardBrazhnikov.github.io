var obj = [];
$(document).ready(function(){
			var spreadsheetID = '1l9t5XRgA2fJztyum926VSjagXSR2irAzxDjmMzazWCc'
			var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
			$.getJSON(url, function(data){
				for(var i = 0; i < data.feed.entry.length; i++){
					obj[i] = { login:data.feed.entry[i].gsx$login.$t,
                    password:data.feed.entry[i].gsx$password.$t,
                    domen:data.feed.entry[i].gsx$domen.$t,
                    costd:data.feed.entry[i].gsx$costd.$t,
                    hosting:data.feed.entry[i].gsx$hosting.$t,
                    costh:data.feed.entry[i].gsx$costh.$t,
                    datadom:data.feed.entry[i].gsx$datadom.$t,
					datahost:data.feed.entry[i].gsx$datahost.$t,
					id:data.feed.entry[i].gsx$id.$t }
				}
 var script = document.createElement('script');
       script.setAttribute('src','js/Script.js');
       document.head.appendChild(script);
			});
		});