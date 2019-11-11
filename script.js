document.addEventListener("DOMContentLoaded", function() {
	let btn = document.getElementById("changeText");
	btn.addEventListener("click", findReplace);
});


function findReplace(ev) {
	ev.preventDefault();
	//grab the original text
	let txt = document.getElementById("input").innerHTML;
	//grab the words to find/replace
	let findWord = document.getElementById("find").value;
	let replaceWord = document.getElementById("replace").value;
	//create a new regex object to use to search for findWord
	//include the g and i modifiers: g is for global, i is for case insensitive
	let re = new RegExp(findWord, "gi");
	//find and replace words in original text using the regex we created
	let newText = txt.replace(re, replaceWord);
	//output the new text to the page
	document.getElementById("input").innerHTML = newText;
}


// function findReplace() {
// 	// grab the original text
// 	let string = document.getElementById("find").innerHTML;
// 	//grab the words to find/replace
// 	let findWord = document.getElementById("find").value;
//
// 	let replaceWord = document.getElementById("replace").value;
//
// 	let reg = new RegExp(findWord, "gi")
//
// 	let newText = string.replace(reg, replaceWord);



