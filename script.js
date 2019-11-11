document.addEventListener("DOMContentLoaded", function() {
	let btn = document.getElementById("changeText");
	btn.addEventListener("click", findReplace);
});


function findReplace() {
	//grab the original text
	let string = document.getElementById("input").innerHTML;
	//grab the words to find/replace
	let findValue = document.getElementById("find").value;
	let replaceValue = document.getElementById("replace").value;
	//create a new regex object to use to search for findWord
	//include the g and i modifiers: g is for global, i is for case insensitive
	let reg = new RegExp(findValue, "gi");
	//find and replace words in original text using the regex we created
	let newText = string.replace(reg, replaceValue);
	//output the new text to the page
	document.getElementById("input").innerHTML = newText;
}




