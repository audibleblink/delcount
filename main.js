var parseCount=function(t){var e={timestamp:new Date(t.delState.timestamp).toString()};return t.delSuper.del.reduce(function(t,e){return t[e.pId]=e.State.find(function(t){return"US"==t.sId}).Cand.map(function(t){return{name:t.cName,total:t.dTot-t.sdTot}}),t},{}).Dem.filter(function(t){return"Sanders"===t.name||"Clinton"==t.name}).reduce(function(t,e){return t[e.name]=e.total,t},e)},writeBody=function(t){document.getElementById("bernie_count").innerHTML=t.Sanders,document.getElementById("hilary_count").innerHTML=t.Clinton,document.getElementById("timestamp").innerHTML=t.timestamp},url="http://vps.audibleblink.com/reports",xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(4===xmlhttp.readyState&&200===xmlhttp.status){var t=JSON.parse(xmlhttp.responseText);writeBody(parseCount(t))}},xmlhttp.open("GET",url),xmlhttp.setRequestHeader("accept","application/json"),xmlhttp.send();