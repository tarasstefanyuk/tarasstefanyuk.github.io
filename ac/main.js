var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var BoxText1 = document.getElementById('BoxText1');
var BoxText2 = document.getElementById('BoxText2');
var BoxText3 = document.getElementById('BoxText3');
var container = document.getElementById('container');




btn1.onclick = function(){
	if(btn1.style.transform == 'rotate(180deg)'){
		 btn1.style.transform = 'rotate(0deg)';
	}else{
	 btn1.style.transform = 'rotate(180deg)';
	}
	BoxText1.classList.toggle('show');
}
btn2.onclick = function(){
	if(btn2.style.transform == 'rotate(180deg)'){
		 btn2.style.transform = 'rotate(0deg)';
	}else{
	 btn2.style.transform = 'rotate(180deg)';
	}
	BoxText2.classList.toggle('show');
}
btn3.onclick = function(){
	if(btn3.style.transform == 'rotate(180deg)'){
		 btn3.style.transform = 'rotate(0deg)';
	}else{
	 btn3.style.transform = 'rotate(180deg)';
	}
	BoxText3.classList.toggle('show');
}

