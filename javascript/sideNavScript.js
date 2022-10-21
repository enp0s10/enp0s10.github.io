function openNav() {
	document.getElementById("side-nav").style.width = "300px";
	document.getElementById("page-content").style.marginLeft = "300px";
	document.getElementById("open-nav").onclick = closeNav;
}

function closeNav() {
	document.getElementById("side-nav").style.width = "0";
	document.getElementById("page-content").style.marginLeft = "0";
	document.getElementById("open-nav").onclick = openNav;
}