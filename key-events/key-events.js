window.addEventListener("keydown", keyColorChanger, false);

function keyColorChanger(key) {
	if (key.keyCode == "13"){
		document.getElementById("paragraphOne").style.color = "yellow";
		document.getElementById("paragraphTwo").style.color = "red";
		document.getElementById("paragraphThree").style.color = "green";
	}
}