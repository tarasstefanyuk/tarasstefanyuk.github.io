const table = document.getElementById('table');
const header = document.querySelector('header');

var now = new Date();

header.innerHTML ="Курс валют на: "+ now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();


let requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "text";
request.send();

request.onload = function(){
	const curs = request.response;
	const curss = JSON.parse(curs);








  // document.body.append(curs);
	addHeader(curss);
	// showHerroes(superHerroes);
};

function addHeader(json){

	for(key in json){
	let td = document.createElement('td');
	let td2 = document.createElement('td');
	let td3 = document.createElement('td');
	let tr = document.createElement('tr');

	tr.append(td);
	table.append(tr);
    td.innerHTML += json[key].ccy;
    tr.append(td2);
	td2.innerHTML += json[key].buy;
	tr.append(td3);
	td3.innerHTML += json[key].sale;
	

	// let td = document.createElement('td');



	
  // tr.innerHTML += json[key].ccy;
  
}
}









