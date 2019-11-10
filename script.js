document.addEventListener("DOMContentLoaded", function() {
	let btn = document.getElementById("changeText");
	btn.addEventListener("click", doFindAndReplace);
});

function doFindAndReplace(ev) {
	ev.preventDefault();
	let find = document.getElementById("find").value;
	let replace = document.getElementById("replace").value;

	let string = document.getElementById("input").innerText;
	document.getElementById("input").innerText = string.replace(/({find})/g, replace);

}