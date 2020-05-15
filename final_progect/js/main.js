$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
window.onload = function () {
	var BurgerMenu = document.getElementById('BurgerMenu');
	var Close = document.getElementById('Close');
	var Header_Nav = document.getElementById('Header_Nav');
	var HeaderNav = document.getElementById('HeaderNav');
	var scrol_right = document.getElementById('scrol_right');
	BurgerMenu.onclick = function aaa() {
		HeaderNav.style.width = "200px";
		Header_Nav.classList.toggle("close");
		Close.classList.toggle("close");
		BurgerMenu.classList.toggle("close");
	}
	Close.onclick = function aaa() {
		Header_Nav.classList.toggle("close");
		Close.classList.toggle("close");
		BurgerMenu.classList.toggle("close");
	}
	$(".scroling").on('click', function (e) {
		e.preventDefault();
		console.log(e.target);
		console.log(this);
		var numEl = parseInt(this.id.match(/\d+/)) + 1;
		let rt = "#sc" + numEl;
		$('html, body').animate({
			scrollTop: $(rt).parent().offset().top
			//	scrollTop: $("#sc"+rt).offset().top // класс объекта к которому приезжаем
		}, 1000); // Скорость прокрутки
	});
	let ObjInfo = {
		'1': {
			name: "Alan",
			famile: "Richman",
			post: "CEO of Romashka",
			img: "img/face/4.png"
		},
		'2': {
			name: "Robert",
			famile: "Rich",
			post: "System Administrator",
			img: "img/face/1.png"
		},
		'3': {
			name: "John",
			famile: "Simmons",
			post: "Network Administrator",
			img: "img/face/2.png"
		},
		'4': {
			name: "Richard",
			famile: "Griffin",
			post: "Software Architect",
			img: "img/face/3.png"
		}
	};
$('#ScrolLeftS2').click(function fn(){
	var NumScrol = $("#ScrolWrapS2").attr('data-check');
		NumScrol--;
		fill2(Math.abs(NumScrol));
});
$('#ScrolRightS2').click(function fn(){
	var NumScrol = $("#ScrolWrapS2").attr('data-check');
		NumScrol++;
		fill2(Math.abs(NumScrol));
});


function fill2(num) {
	if (num > 5) {
			num = 1;
		}
		if (num < 1) {
			num = 5;
		}
	$('.step').css('display','none');
	$('.step[data-id='+num+']').css('display','block');
	 $("#ScrolWrapS2").attr('data-check',num);

};












	scrol_right.onclick = function fg() {
		var num = $("#scrol_right").attr('data-id');
		num++;
		fill(Math.abs(num));
	}
	$("#ScrolLeft").click(function fg() {
		var num = $("#scrol_right").attr('data-id');
		num--;
		fill(Math.abs(num));
	});

	function fill(num) {
		if (num > Object.keys(ObjInfo).length) {
			num = 1;
		}
		if (num < 1) {
			num = Object.keys(ObjInfo).length
		}
		var ofn = document.createElement("span");
		ofn.id = "Name";
		ofn.classList.add('name');
		$("#scrol_right").attr('data-id', num);
		$("#OfferName").html(ObjInfo[num].famile);
		$("#OfferName").prepend(ofn);
		$("#Name").html(ObjInfo[num].name + ' ');
		$("#OfferPost").html(ObjInfo[num].post);
		$("#OfferImg").attr('src', ObjInfo[num].img);
	}
	$(".button").click(function () {
		var value = $(this).attr("data-filter");
		if (value == "all") {
			$(".filter").show(1000);
		} else {
			$(".filter").not("." + value).hide("1000");
			$(".filter").filter("." + value).show("1000");
		}
	});
};
