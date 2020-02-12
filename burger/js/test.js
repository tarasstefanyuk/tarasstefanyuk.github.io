var btn = document.getElementById("btn");
var menuItem = document.getElementById("menu_item");
var cls = document.getElementById("close");
btn.addEventListener("click", toggleMenu);
function toggleMenu(){
	alert("hfghfg");
	// menuItem.classList.toggle("show");
}
cls.addEventListener("click", toggleMenu);