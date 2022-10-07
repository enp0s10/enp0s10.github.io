// Javascript by w3 schools

function changeMnt(event, mnt, btn) {
	var i, tabs, links;

	tabs = document.getElementsByClassName("tab-content");

	for(i=0; i<tabs.length; i++) {
		tabs[i].style.display = "none";
	}

	links = document.getElementsByClassName("tab-link");

	for(i=0; i<links.length; i++) {
		links[i].className = links[i].className.replace("active", "");
	}

	document.getElementById(mnt).style.display = "block";
	event.currentTarget.className += "active";

}
