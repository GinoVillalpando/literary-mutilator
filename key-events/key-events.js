window.addEventListener("keydown", keyColorChanger, false);

function keyColorChanger(key) {
	if (key.keyCode == "13"){
		document.getElementById("paragraphOne").style.color = "blue";
	}
}